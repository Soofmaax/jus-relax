"use client";

import { useEffect, useRef, useState } from "react";

interface PetalsCanvasProps {
  /**
   * Intensité globale de l'effet.
   * 0.5 = très léger, 1 = standard.
   */
  intensity?: number;
}

/**
 * Canvas décoratif pour les pétales de cerisier.
 *
 * - Utilise uniquement le Canvas 2D de base.
 * - Respecte `prefers-reduced-motion`.
 * - Désactivé automatiquement sur les appareils "low power"
 *   via une heuristique simple (hardwareConcurrency / saveData).
 */
export default function PetalsCanvas({ intensity = 1 }: PetalsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const hardwareConcurrency =
      typeof navigator !== "undefined" && "hardwareConcurrency" in navigator
        ? navigator.hardwareConcurrency || 4
        : 4;

    const connection =
      typeof navigator !== "undefined" &&
      "connection" in navigator &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (navigator as any).connection;

    const saveData = connection && connection.saveData === true;

    const isLowPower =
      saveData || (typeof hardwareConcurrency === "number" && hardwareConcurrency <= 2);

    if (prefersReduced || isLowPower) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = canvas.clientWidth || 1;
      height = canvas.clientHeight || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    interface Petal {
      x: number;
      y: number;
      vy: number;
      vx: number;
      rotation: number;
      rotationSpeed: number;
      size: number;
      opacity: number;
    }

    const petals: Petal[] = [];
    const baseDensity = 16 * intensity;

    const spawnPetal = () => {
      const size = 8 + Math.random() * 12;
      const depthFactor = Math.random(); // 0 = très proche, 1 = lointain

      petals.push({
        x: Math.random() * width,
        y: -20,
        vy: 15 + depthFactor * 20,
        vx: -5 + Math.random() * 10,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        size,
        opacity: 0.18 + depthFactor * 0.25,
      });
    };

    // Initial light population
    for (let i = 0; i < baseDensity; i += 1) {
      spawnPetal();
    }

    let lastTime = performance.now();

    const loop = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.033);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Spawn léger en continu
      if (Math.random() < 0.04 * intensity) {
        spawnPetal();
      }

      for (let i = petals.length - 1; i >= 0; i -= 1) {
        const p = petals[i];

        p.y += p.vy * delta;
        p.x += p.vx * delta;
        p.rotation += p.rotationSpeed;

        if (p.y - p.size > height + 40 || p.x + p.size < -40 || p.x - p.size > width + 40) {
          petals.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        const gradient = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
        gradient.addColorStop(0, `rgba(248, 250, 252, ${p.opacity * 0.15})`);
        gradient.addColorStop(0.4, `rgba(244, 114, 182, ${p.opacity})`);
        gradient.addColorStop(1, `rgba(251, 191, 36, ${p.opacity * 0.4})`);

        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.7);
        ctx.bezierCurveTo(
          p.size * 0.6,
          -p.size * 0.2,
          p.size * 0.6,
          p.size * 0.6,
          0,
          p.size * 0.8
        );
        ctx.bezierCurveTo(
          -p.size * 0.6,
          p.size * 0.6,
          -p.size * 0.6,
          -p.size * 0.2,
          0,
          -p.size * 0.7
        );
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      animationFrameRef.current = window.requestAnimationFrame(loop);
    };

    animationFrameRef.current = window.requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", resize);
    };
  }, [enabled, intensity]);

  if (!enabled) {
    return (
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 opacity-0"
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}