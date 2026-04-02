"use client";

import { useEffect, useState } from "react";

export default function FireEmbers() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; animationDuration: string; animationDelay: string; size: string; opacity: number; drift: string }>>([]);

  useEffect(() => {
    // Generate particles on client side to avoid hydration mismatched
    // Adjust length to change particle density
    const newParticles = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 12 + 8}s`, // Between 8s and 20s
      animationDelay: `-${Math.random() * 20}s`, // Start randomly mid-animation
      size: `${Math.random() * 3 + 2}px`, // 2px to 5px
      opacity: Math.random() * 0.5 + 0.3,
      drift: `${(Math.random() - 0.5) * 100}px`, // Random horizontal drift distance
    }));
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-screen" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-100px] rounded-full bg-[#ffb786] ember-anim"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            boxShadow: `0 0 ${parseInt(p.size) * 3}px rgba(245, 130, 32, 0.8), 0 0 ${parseInt(p.size) * 6}px rgba(245, 130, 32, 0.4)`,
            '--drift': p.drift,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
