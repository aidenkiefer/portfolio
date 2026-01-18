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

    // Create nodes with staggered "birth" times
    const nodes: Node[] = Array.from({ length: nodeCount }, (_, i) => ({
      x: rand(20, cssW - 20),
      y: rand(20, cssH - 20),
      vx: rand(-1, 1) * speed,
      vy: rand(-1, 1) * speed,
      bornAt: i * 0.08, // 80ms stagger
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

    // Build stable edge list ONCE (not recomputed every frame)
    const edges: Edge[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const nbrs = nearestIndices(nodes, i, maxConnections);
      for (const j of nbrs) {
        if (j <= i) continue; // prevent duplicates
        edges.push({ i, j, startOffset: 0 });
      }
    }

    // Sort edges by distance (short edges first for clean build)
    edges.sort((e1, e2) => {
      const a1 = nodes[e1.i], b1 = nodes[e1.j];
      const a2 = nodes[e2.i], b2 = nodes[e2.j];
      const d1 = (a1.x - b1.x) ** 2 + (a1.y - b1.y) ** 2;
      const d2 = (a2.x - b2.x) ** 2 + (a2.y - b2.y) ** 2;
      return d1 - d2;
    });

    // Apply global stagger (sequential)
    const globalStagger = 0.018;
    edges.forEach((e, idx) => {
      e.startOffset = idx * globalStagger;
    });

    let raf = 0;
    const start = performance.now();

    const draw = (now: number) => {
      const t = (now - start) / 1000;

      ctx.clearRect(0, 0, cssW, cssH);

      // Subtle overall opacity so it doesn't compete with content
      const baseNodeAlpha = 0.55;
      const baseEdgeAlpha = 0.22;

      // Edge animation parameters
      const edgeBaseDelay = 0.08;     // small pause after nodes appear
      const edgeDuration = 0.55;      // draw time in seconds

      // Update positions (optional drift)
      if (!reducedMotion && speed > 0) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;

          // bounce inside bounds
          if (n.x < 16 || n.x > cssW - 16) n.vx *= -1;
          if (n.y < 16 || n.y > cssH - 16) n.vy *= -1;
        }
      }

      // Draw edges first (so nodes sit on top) - using stable edge list
      for (const edge of edges) {
        const a = nodes[edge.i];
        const b = nodes[edge.j];

        // Both nodes must be born before edge can start
        const bornA = reducedMotion ? 1 : clamp01((t - a.bornAt) / 0.7);
        const bornB = reducedMotion ? 1 : clamp01((t - b.bornAt) / 0.7);
        
        if (bornA <= 0 || bornB <= 0) continue;

        // Compute edge start time (after both nodes appear + delay + stagger)
        const edgeStart =
          Math.max(a.bornAt, b.bornAt) +
          edgeBaseDelay +
          edge.startOffset;

        // Compute draw progress with easing
        const raw = (t - edgeStart) / edgeDuration;
        const drawP = reducedMotion ? 1 : clamp01(raw);
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
        if (!reducedMotion && drawP < 1) {
          ctx.beginPath();
          ctx.arc(ex, ey, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 1.2})`;
          ctx.fill();
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const born = reducedMotion ? 1 : Math.max(0, Math.min(1, (t - n.bornAt) / 0.7));
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
