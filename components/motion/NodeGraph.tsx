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

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  bornAt: number; // seconds
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

    // Precompute connections each frame: connect to nearest neighbors
    const nearest = (idx: number) => {
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

    let raf = 0;
    const start = performance.now();

    const draw = (now: number) => {
      const t = (now - start) / 1000;

      ctx.clearRect(0, 0, cssW, cssH);

      // Subtle overall opacity so it doesn't compete with content
      const baseNodeAlpha = 0.55;
      const baseEdgeAlpha = 0.22;

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

      // Draw edges first (so nodes sit on top)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // fade-in factor for node "birth"
        const born = Math.max(0, Math.min(1, (t - a.bornAt) / 0.7));
        if (born <= 0) continue;

        const nbrs = nearest(i);
        for (const j of nbrs) {
          const b = nodes[j];
          const bornB = Math.max(0, Math.min(1, (t - b.bornAt) / 0.7));
          const edgeAlpha = baseEdgeAlpha * born * bornB;

          // animate edge "draw" effect by interpolating endpoint
          const drawT = reducedMotion ? 1 : Math.max(0, Math.min(1, (t - a.bornAt) / 0.9));
          const ex = a.x + (b.x - a.x) * drawT;
          const ey = a.y + (b.y - a.y) * drawT;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(ex, ey);
          ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${edgeAlpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
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
