"use client";

import React, { useEffect, useRef, useState } from "react";

type NodeGraphProps = {
  className?: string;         // set color via Tailwind text-* class
  width?: number;             // if omitted, use parent size
  height?: number;            // if omitted, use parent size
  nodeCount?: number;         // default 22
  maxConnections?: number;    // default 2 per node
  speed?: number;             // drift speed (0 = none)
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

function parseRgb(rgb: string) {
  // "rgb(r, g, b)" or "rgba(r, g, b, a)"
  const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!m) return { r: 30, g: 58, b: 95 };
  return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]) };
}

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  bornAt: number; // seconds
};

type Edge = {
  i: number;
  j: number;
  startOffset: number; // stagger delay in seconds
  removeStart?: number; // when removal animation starts (undefined = not removing)
  addStart?: number; // when add animation starts (undefined = not adding)
  isActive: boolean; // whether edge is currently active/visible
  lastUsedAt?: number; // timestamp when this edge was last active (for cooldown)
};

export function NodeGraph({
  className,
  width,
  height,
  nodeCount = 22,
  maxConnections = 2,
  speed = 0.06,
}: NodeGraphProps) {
  const reducedMotion = usePrefersReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [color, setColor] = useState({ r: 30, g: 58, b: 95 });

  useEffect(() => {
    if (!wrapRef.current) return;
    const c = getComputedStyle(wrapRef.current).color;
    setColor(parseRgb(c));
  }, [className]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    const cssW = width ?? parent?.clientWidth ?? 320;
    const cssH = height ?? parent?.clientHeight ?? 220;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    // Create nodes with staggered "birth" times (doubled timing)
    const nodes: Node[] = Array.from({ length: nodeCount }, (_, i) => ({
      x: rand(20, cssW - 20),
      y: rand(20, cssH - 20),
      vx: rand(-1, 1) * speed,
      vy: rand(-1, 1) * speed,
      bornAt: i * 0.30, // 300ms stagger (doubled from 150ms)
    }));

    // Nearest neighbor helper (used only at init)
    const nearestIndices = (nodes: Node[], idx: number, maxConnections: number) => {
      const a = nodes[idx];
      const dists = nodes
        .map((b, j) => {
          if (j === idx) return null;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          return { j, d: dx * dx + dy * dy };
        })
        .filter(Boolean) as { j: number; d: number }[];

      dists.sort((p, q) => p.d - q.d);
      return dists.slice(0, maxConnections).map((p) => p.j);
    };

    // Build initial edge list
    // First, create edges based on nearest neighbors (initial connections)
    const allPossibleEdges: Edge[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const nbrs = nearestIndices(nodes, i, maxConnections);
      for (const j of nbrs) {
        if (j <= i) continue; // prevent duplicates
        allPossibleEdges.push({ i, j, startOffset: 0, isActive: false });
      }
    }
    
    // Also add some additional potential edges between nodes that aren't nearest neighbors
    // This gives us more variety for the cycling phase
    const additionalEdgeCount = Math.floor(nodeCount * 0.5); // Add ~50% more potential edges
    const existingEdgeKeys = new Set(
      allPossibleEdges.map(e => `${Math.min(e.i, e.j)}-${Math.max(e.i, e.j)}`)
    );
    
    for (let attempt = 0; attempt < additionalEdgeCount * 2 && allPossibleEdges.length < nodeCount * maxConnections * 1.5; attempt++) {
      const i = Math.floor(Math.random() * nodes.length);
      const j = Math.floor(Math.random() * nodes.length);
      if (i === j) continue;
      
      const key = `${Math.min(i, j)}-${Math.max(i, j)}`;
      if (!existingEdgeKeys.has(key)) {
        allPossibleEdges.push({ i, j, startOffset: 0, isActive: false });
        existingEdgeKeys.add(key);
      }
    }

    // Sort edges by distance (short edges first for clean build)
    allPossibleEdges.sort((e1, e2) => {
      const a1 = nodes[e1.i], b1 = nodes[e1.j];
      const a2 = nodes[e2.i], b2 = nodes[e2.j];
      const d1 = (a1.x - b1.x) ** 2 + (a1.y - b1.y) ** 2;
      const d2 = (a2.x - b2.x) ** 2 + (a2.y - b2.y) ** 2;
      return d1 - d2;
    });

    // Start with initial edges (first N edges)
    const initialEdgeCount = Math.min(allPossibleEdges.length, nodeCount * maxConnections);
    const edges: Edge[] = allPossibleEdges.slice(0, initialEdgeCount).map((e, idx) => ({
      ...e,
      isActive: true,
      startOffset: idx * 0.036, // doubled from 0.018
    }));

    // Helper to get distance between two nodes
    const getEdgeDistance = (e: Edge) => {
      const a = nodes[e.i];
      const b = nodes[e.j];
      return (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
    };

    // Helper to get edge key (normalized for comparison)
    const getEdgeKey = (i: number, j: number) => `${Math.min(i, j)}-${Math.max(i, j)}`;
    
    // Helper to check if a node has any active edges
    const nodeHasActiveEdges = (nodeIdx: number): boolean => {
      return edges.some(e => 
        e.isActive && 
        (e.i === nodeIdx || e.j === nodeIdx) &&
        e.removeStart === undefined &&
        e.addStart === undefined
      );
    };
    
    // Helper to find a new edge to add (from unused edges)
    // Prioritizes edges between nodes that don't currently have active edges
    const findNewEdgeToAdd = (currentTime: number): Edge | null => {
      const activeEdgeKeys = new Set(
        edges.filter(e => e.isActive).map(e => getEdgeKey(e.i, e.j))
      );
      
      const COOLDOWN_SECONDS = 3.0; // Don't reuse an edge within 3 seconds
      const now = currentTime;
      
      // Build list of candidate edges (not currently active)
      const candidates: Array<{ edge: Edge; key: string; priority: number }> = [];
      
      for (const edge of allPossibleEdges) {
        const key = getEdgeKey(edge.i, edge.j);
        
        // Skip if currently active
        if (activeEdgeKeys.has(key)) continue;
        
        // Check cooldown: find if this edge was recently used
        const existingEdge = edges.find(e => getEdgeKey(e.i, e.j) === key);
        if (existingEdge?.lastUsedAt !== undefined) {
          const timeSinceLastUse = now - existingEdge.lastUsedAt;
          if (timeSinceLastUse < COOLDOWN_SECONDS) {
            continue; // Skip edges in cooldown
          }
        }
        
        // Calculate priority:
        // Higher priority for edges between nodes that have NO active edges
        // This ensures we introduce connections to previously unconnected nodes
        const nodeIHasEdges = nodeHasActiveEdges(edge.i);
        const nodeJHasEdges = nodeHasActiveEdges(edge.j);
        
        let priority = 0;
        if (!nodeIHasEdges && !nodeJHasEdges) {
          priority = 3; // Both nodes unconnected - highest priority
        } else if (!nodeIHasEdges || !nodeJHasEdges) {
          priority = 2; // One node unconnected - medium priority
        } else {
          priority = 1; // Both nodes already connected - lower priority
        }
        
        candidates.push({ edge, key, priority });
      }
      
      if (candidates.length === 0) return null;
      
      // Sort by priority (highest first), then by distance (shorter first)
      candidates.sort((a, b) => {
        if (b.priority !== a.priority) {
          return b.priority - a.priority; // Higher priority first
        }
        // If same priority, prefer shorter edges
        const distA = getEdgeDistance(a.edge);
        const distB = getEdgeDistance(b.edge);
        return distA - distB;
      });
      
      // Pick from top candidates (top 30% to add some variety)
      const topCandidates = candidates.slice(0, Math.max(1, Math.ceil(candidates.length * 0.3)));
      const selected = topCandidates[Math.floor(Math.random() * topCandidates.length)];
      
      return { 
        ...selected.edge, 
        isActive: false, 
        addStart: undefined,
        lastUsedAt: undefined // Will be set when it becomes active
      };
    };

    let raf = 0;
    const start = performance.now();
    let cyclePhase: 'building' | 'cycling' = 'building';
    let lastCycleAction = 0;
    const cycleInterval = 0.8; // time between add/remove actions

    const draw = (now: number) => {
      const t = (now - start) / 1000;

      ctx.clearRect(0, 0, cssW, cssH);

      // Subtle overall opacity so it doesn't compete with content
      const baseNodeAlpha = 0.55;
      const baseEdgeAlpha = 0.22;

      // Edge animation parameters (doubled timing)
      const edgeBaseDelay = 0.50;     // doubled from 0.25
      const edgeDuration = 1.70;      // doubled from 0.85

      // Calculate when all initial edges should be done drawing
      const lastNodeBorn = Math.max(...nodes.map(n => n.bornAt));
      const lastEdgeStart = lastNodeBorn + edgeBaseDelay + edges[edges.length - 1]?.startOffset || 0;
      const allEdgesDrawnTime = lastEdgeStart + edgeDuration;

      // Transition to cycling phase
      if (cyclePhase === 'building' && t >= allEdgesDrawnTime) {
        cyclePhase = 'cycling';
        lastCycleAction = t;
      }

      // Handle edge cycling (add/remove)
      if (cyclePhase === 'cycling' && !reducedMotion && t - lastCycleAction >= cycleInterval) {
        // Get edges that are fully active (not being added or removed)
        const fullyActiveEdges = edges.filter(e => 
          e.isActive && 
          e.removeStart === undefined && 
          e.addStart === undefined
        );
        
        if (fullyActiveEdges.length > 0) {
          // Sort active edges by current distance (longest first)
          const sortedByDistance = [...fullyActiveEdges].sort((e1, e2) => {
            return getEdgeDistance(e2) - getEdgeDistance(e1);
          });

          // Remove longest edge
          const toRemove = sortedByDistance[0];
          const removeIdx = edges.findIndex(e => e === toRemove);
          if (removeIdx >= 0) {
            edges[removeIdx].removeStart = t;
            // Mark when this edge was last used (for cooldown tracking)
            edges[removeIdx].lastUsedAt = t;
          }

          // Add new edge (with cooldown check)
          const newEdge = findNewEdgeToAdd(t);
          if (newEdge) {
            edges.push({
              ...newEdge,
              addStart: t,
              startOffset: 0,
            });
          }
        }
        
        lastCycleAction = t;
      }

      // Determine if we're still in the edge drawing phase
      const isDrawingPhase = t < allEdgesDrawnTime;
      const nodeSpeedMultiplier = isDrawingPhase ? 0.5 : 1.0; // 50% speed during drawing

      // Update positions (optional drift, slower during drawing phase)
      if (!reducedMotion && speed > 0) {
        for (const n of nodes) {
          n.x += n.vx * nodeSpeedMultiplier;
          n.y += n.vy * nodeSpeedMultiplier;

          // bounce inside bounds
          if (n.x < 16 || n.x > cssW - 16) n.vx *= -1;
          if (n.y < 16 || n.y > cssH - 16) n.vy *= -1;
        }
      }

      // Draw edges first (so nodes sit on top)
      for (const edge of edges) {
        const a = nodes[edge.i];
        const b = nodes[edge.j];

        // Both nodes must be born before edge can start
        const bornA = reducedMotion ? 1 : clamp01((t - a.bornAt) / 1.4); // doubled from 0.7
        const bornB = reducedMotion ? 1 : clamp01((t - b.bornAt) / 1.4); // doubled from 0.7
        
        if (bornA <= 0 || bornB <= 0) continue;

        let drawP = 0;
        let isRemoving = false;
        let isAdding = false;

        // Handle removal animation
        if (edge.removeStart !== undefined) {
          isRemoving = true;
          const removeRaw = (t - edge.removeStart) / edgeDuration;
          drawP = reducedMotion ? 0 : clamp01(1 - removeRaw); // reverse animation
          if (drawP <= 0) {
            edge.isActive = false;
            edge.removeStart = undefined;
            continue; // edge is fully removed
          }
        }
        // Handle add animation
        else if (edge.addStart !== undefined) {
          isAdding = true;
          const addRaw = (t - edge.addStart) / edgeDuration;
          drawP = reducedMotion ? 1 : clamp01(addRaw);
          if (drawP >= 1) {
            edge.isActive = true;
            edge.addStart = undefined;
            edge.lastUsedAt = t; // Track when this edge became active
            drawP = 1;
          }
        }
        // Handle initial build animation
        else if (edge.isActive) {
          const edgeStart =
            Math.max(a.bornAt, b.bornAt) +
            edgeBaseDelay +
            edge.startOffset;
          const raw = (t - edgeStart) / edgeDuration;
          drawP = reducedMotion ? 1 : clamp01(raw);
        } else {
          continue; // edge not active and not animating
        }

        const p = easeOutCubic(drawP);

        // Interpolate endpoint for draw-on effect
        const ax = a.x, ay = a.y;
        const bx = b.x, by = b.y;
        const ex = ax + (bx - ax) * p;
        const ey = ay + (by - ay) * p;

        // Alpha increases slightly as edge draws
        const alpha = baseEdgeAlpha * Math.min(bornA, bornB) * (0.35 + 0.65 * drawP);

        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Optional: traveling dot head (motion graphics flourish)
        if (!reducedMotion && drawP < 1 && drawP > 0 && !isRemoving) {
          ctx.beginPath();
          ctx.arc(ex, ey, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 1.2})`;
          ctx.fill();
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const born = reducedMotion ? 1 : clamp01((t - n.bornAt) / 2.4); // doubled from 1.2
        if (born <= 0) continue;

        const r = 2.2 + (1 - born) * 1.8; // start a bit bigger, settle smaller
        const alpha = baseNodeAlpha * born;

        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [width, height, nodeCount, maxConnections, speed, color, reducedMotion]);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
