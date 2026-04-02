"use client";

type Particle = {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  opacity: number;
  drift: string;
};

function seededValue(seed: number) {
  const value = Math.sin(seed * 9999.91) * 10000;
  return value - Math.floor(value);
}

const particles: Particle[] = Array.from({ length: 35 }).map((_, i) => {
  const leftSeed = seededValue(i + 1);
  const durationSeed = seededValue(i + 101);
  const delaySeed = seededValue(i + 201);
  const sizeSeed = seededValue(i + 301);
  const opacitySeed = seededValue(i + 401);
  const driftSeed = seededValue(i + 501);

  return {
    id: i,
    left: `${leftSeed * 100}%`,
    animationDuration: `${durationSeed * 12 + 8}s`,
    animationDelay: `-${delaySeed * 20}s`,
    size: `${sizeSeed * 3 + 2}px`,
    opacity: opacitySeed * 0.5 + 0.3,
    drift: `${(driftSeed - 0.5) * 100}px`,
  };
});

export default function FireEmbers() {
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
