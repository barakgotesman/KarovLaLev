import GlowBackground from '../../components/ui/GlowBackground';
import Button from '../../components/ui/Button';
import { useSession } from '../../context/SessionContext';

interface EndScreenProps {
  onRestart: () => void;
  onExit: () => void;
}

export default function EndScreen({ onRestart, onExit }: EndScreenProps) {
  const { state } = useSession();
  const [playerOne, playerTwo] = state.playerNames;

  return (
    <div className="flex flex-col w-full h-dvh relative overflow-hidden bg-background">
      <GlowBackground />

      <div
        className="relative z-20 flex flex-col items-center justify-center flex-1 min-h-0 px-gutter py-[clamp(16px,4vh,40px)] text-center"
        style={{
          paddingTop: `max(env(safe-area-inset-top), clamp(16px, 4vh, 40px))`,
          paddingBottom: `max(env(safe-area-inset-bottom), clamp(16px, 4vh, 40px))`,
        }}
      >
        {/* Ornament */}
        <div className="relative w-24 h-24 shrink-0 flex items-center justify-center mb-[clamp(12px,3vh,32px)]">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
          <span
            className="material-symbols-outlined text-[48px] text-primary"
            style={{
              fontVariationSettings: "'FILL' 1",
              animation: 'card-icon-pulse 2.5s ease-in-out infinite',
            }}
          >
            auto_awesome
          </span>
        </div>

        {/* Headline + subtext */}
        <div className="flex flex-col gap-sm max-w-[320px] shrink-0">
          <h2 className="font-sans text-[clamp(24px,5vh,34px)] font-black tracking-tight text-primary [text-shadow:0_0_16px_rgba(255,26,60,0.4)]">
            סיימתם את המסע
          </h2>
          <p className="font-sans text-[clamp(13px,2.4vh,16px)] leading-relaxed text-on-surface-variant">
            {playerOne} ו{playerTwo}, תודה על הרגעים המשותפים. מקווים שהתקרבתם קצת יותר.
          </p>
        </div>

        <div className="w-24 h-px shrink-0 bg-gradient-to-r from-transparent via-outline-variant to-transparent my-[clamp(16px,4vh,40px)]" />

        {/* Reflection card */}
        <div className="w-full max-w-[340px] shrink-0 bg-surface-container/40 backdrop-blur-xl p-md rounded-xl flex flex-col items-center gap-sm mb-[clamp(16px,4vh,40px)]">
          <div className="flex items-center justify-center gap-xs text-secondary">
            <span className="material-symbols-outlined text-[18px]">favorite</span>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest">
              סיכום המפגש
            </span>
          </div>
          <p className="font-sans text-[13px] font-semibold text-on-surface">
            {playerOne} ו{playerTwo} עברו {state.turnNumber} שאלות ביחד הערב
          </p>
          <p className="font-sans text-[14px] italic text-on-surface">
            "הדברים היפים ביותר בעולם אינם נראים או נשמעים, אלא מורגשים בלב."
          </p>
        </div>

        {/* Actions */}
        <div className="w-full max-w-[320px] shrink-0 flex flex-col gap-sm">
          <Button variant="primary" onClick={onRestart}>
            <span className="flex items-center justify-center gap-sm">
              התחילו מסע חדש
              <span className="material-symbols-outlined">arrow_back</span>
            </span>
          </Button>
          <button
            type="button"
            onClick={onExit}
            className="h-14 rounded-full font-sans text-[14px] font-semibold text-on-surface-variant cursor-pointer flex items-center justify-center transition-colors hover:text-primary"
          >
            יציאה
          </button>
        </div>
      </div>
    </div>
  );
}
