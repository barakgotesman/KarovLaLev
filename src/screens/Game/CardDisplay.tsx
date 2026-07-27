import { motion } from 'framer-motion';

interface CardDisplayProps {
  questionText: string;
  isFlipped: boolean;
  onFlip: () => void;
}

// Card-back lattice: a diamond linework grid with a center dot at each
// intersection, in scarlet at low opacity — encoded via encodeURIComponent
// rather than hand-escaped quotes, since a manually-escaped data URI here
// previously broke silently and rendered as a flat solid color.
const CARD_BACK_PATTERN = encodeURIComponent(
  `<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#ff1a3c" stroke-width="0.75"/>
    <circle cx="30" cy="30" r="1.5" fill="#ff1a3c"/>
  </svg>`,
);

/** The face-down/face-up game card. Tapping the face-down back triggers
 * a 3D flip-reveal showing the question text on the front. */
export default function CardDisplay({ questionText, isFlipped, onFlip }: CardDisplayProps) {
  return (
    <div
      className="flex-1 min-h-0 flex items-center justify-center px-gutter"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative h-full max-h-[480px] w-auto max-w-[320px] aspect-[2/3] cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        onClick={onFlip}
      >
        {/* Card Back */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2rem] bg-surface-container-highest shadow-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Lattice linework */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,${CARD_BACK_PATTERN}")`,
              backgroundSize: '40px 40px',
            }}
          />
          {/* Radial vignette for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.35) 100%)',
            }}
          />
          {/* Shimmer sweep */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                'linear-gradient(115deg, transparent 40%, rgba(255,26,60,0.18) 50%, transparent 60%)',
              backgroundSize: '250% 250%',
              animation: 'card-shimmer 6s ease-in-out infinite',
            }}
          />
          {/* Ornate double border with corner marks */}
          <div className="absolute inset-3 rounded-[1.6rem] border border-primary/15 pointer-events-none">
            <div className="absolute inset-2 rounded-[1.4rem] border-[0.5px] border-primary/20" />
            {['top-2 right-2', 'top-2 left-2', 'bottom-2 right-2', 'bottom-2 left-2'].map((pos) => (
              <span
                key={pos}
                className={`absolute ${pos} w-1.5 h-1.5 rotate-45 border border-primary/40`}
              />
            ))}
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-md text-center border-[0.5px] border-primary/20 rounded-[2rem]">
            <div
              className="w-16 h-16 rounded-full bg-gradient-to-b from-primary/20 to-transparent flex items-center justify-center mb-md"
              style={{ animation: 'card-icon-pulse 2.5s ease-in-out infinite' }}
            >
              <span className="material-symbols-outlined text-primary text-[32px]">auto_awesome</span>
            </div>
            <span className="font-sans text-[16px] font-semibold text-primary opacity-60">
              געו כדי לגלות
            </span>
          </div>
          <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_60px_rgba(255,26,60,0.08)]" />
        </div>

        {/* Card Front */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2rem] bg-surface-container-low shadow-2xl overflow-hidden flex flex-col justify-between p-[clamp(16px,4%,32px)] text-center border-[0.5px] border-primary/10"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Corner marks, matching the back for a cohesive card object */}
          {['top-2 right-2', 'top-2 left-2', 'bottom-2 right-2', 'bottom-2 left-2'].map((pos) => (
            <span
              key={pos}
              className={`absolute ${pos} w-1.5 h-1.5 rotate-45 border border-primary/30 pointer-events-none`}
            />
          ))}

          <div className="w-full h-px shrink-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="flex-1 min-h-0 flex flex-col items-center justify-center overflow-y-auto">
            <p className="font-sans text-[clamp(13px,2.6vh,20px)] font-semibold text-on-surface leading-relaxed">
              {questionText}
            </p>
          </div>
          <div className="w-full h-px shrink-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
