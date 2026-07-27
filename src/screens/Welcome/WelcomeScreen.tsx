import GlowBackground from '../../components/ui/GlowBackground';
import heroImage from '../../assets/images/welcome-hero.png';
import StartButton from './StartButton';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div
      className="flex flex-col w-full h-dvh relative overflow-hidden bg-background"
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <GlowBackground heroImage={heroImage} />

      <div className="relative z-20 flex flex-col items-center justify-center flex-1 min-h-0 px-gutter py-[clamp(16px,4vh,40px)] text-center">
        <div
          className="mb-[clamp(16px,5vh,64px)]"
          style={{ animation: 'fade-in-up 1.2s ease-out forwards' }}
        >
          <h1 className="font-sans text-[clamp(32px,7vh,46px)] font-black leading-[1.15] tracking-tight text-primary [text-shadow:0_0_25px_rgba(255,26,60,0.4)] mb-sm">
            קרוב ללב
          </h1>
          <p className="font-sans text-[clamp(14px,2.2vh,18px)] leading-relaxed text-on-surface-variant max-w-[280px] mx-auto">
            מתקרבים זה לזו, קלף אחרי קלף, שכבה אחר שכבה.
          </p>
        </div>

        <div className="w-full max-w-[320px] flex flex-col gap-[clamp(16px,3vh,40px)] items-center">
          <StartButton onStart={onStart} />

          <div className="flex flex-col items-center gap-xs">
            <span className="material-symbols-outlined text-on-tertiary-container opacity-60">
              lock
            </span>
            <p className="font-sans text-[12px] font-semibold tracking-[0.05em] text-on-surface-variant/60">
              מרחב בטוח ופרטי לשניכם
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 pb-[clamp(16px,4vh,64px)] text-center opacity-30 shrink-0">
        <div className="w-16 h-px bg-gradient-to-l from-transparent via-primary to-transparent mx-auto mb-md" />
        <span className="material-symbols-outlined text-primary scale-75">favorite</span>
      </div>
    </div>
  );
}
