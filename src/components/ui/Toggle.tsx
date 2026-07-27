import { useState } from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

/** Small spark burst fired once when the toggle activates — six dots
 * flung outward from the knob at slightly different angles/distances. */
const BURST_SPARKS = [
  { angle: -60, distance: 18 },
  { angle: -25, distance: 22 },
  { angle: 0, distance: 20 },
  { angle: 25, distance: 22 },
  { angle: 60, distance: 18 },
  { angle: 180, distance: 14 },
];

/** Pill switch used for binary settings (e.g. the 18+ content toggle).
 * Turning it on triggers a scarlet glow pulse, a knob "pop", a flame
 * icon fade-in, and a brief spark burst — a little flirtier than a
 * plain on/off switch. The track itself clips (overflow-hidden) so the
 * knob can never visually spill past the pill's rounded edge; the spark
 * burst lives in a separate, unclipped sibling layer so it can still
 * fly beyond the track. */
export default function Toggle({ checked, onChange, label }: ToggleProps) {
  const [justActivated, setJustActivated] = useState(false);

  function handleClick() {
    const next = !checked;
    onChange(next);
    if (next) {
      setJustActivated(true);
      setTimeout(() => setJustActivated(false), 600);
    }
  }

  return (
    <div className="w-full flex items-center justify-between px-md py-sm bg-surface-container/40 backdrop-blur-xl rounded-full border-t border-white/5">
      <span className="text-[12px] font-sans font-semibold tracking-[0.05em] text-on-surface/80">
        {label}
      </span>
      <span className="relative inline-block w-12 h-6">
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          onClick={handleClick}
          className={`relative w-12 h-6 rounded-full overflow-hidden cursor-pointer transition-[background-color,box-shadow] duration-300 ${
            checked
              ? 'bg-primary-container shadow-[0_0_14px_rgba(255,26,60,0.6)] animate-[toggle-glow_1.8s_ease-in-out_infinite]'
              : 'bg-surface-variant'
          }`}
        >
          <span
            className={`absolute top-1 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
              checked
                ? 'bg-on-primary-container right-1 -translate-x-6 scale-105'
                : 'bg-outline right-1 translate-x-0'
            } ${justActivated ? 'animate-[toggle-pop_0.4s_ease-out]' : ''}`}
          >
            <span
              className={`material-symbols-outlined !text-[11px] text-primary-container transition-opacity duration-200 ${
                checked ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              local_fire_department
            </span>
          </span>
        </button>

        {justActivated &&
          BURST_SPARKS.map((spark, i) => (
            <span
              key={i}
              className="absolute top-1 w-1 h-1 rounded-full bg-primary right-2 pointer-events-none"
              style={{
                animation: 'toggle-burst 0.5s ease-out forwards',
                // @ts-expect-error custom properties consumed by the toggle-burst keyframes
                '--angle': `${spark.angle}deg`,
                '--distance': `${spark.distance}px`,
              }}
            />
          ))}
      </span>
    </div>
  );
}
