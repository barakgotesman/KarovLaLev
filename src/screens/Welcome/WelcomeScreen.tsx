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

      <div className="relative z-20 flex flex-col items-center justify-center flex-1 min-h-0 px-gutter py-[clamp(12px,3vh,32px)] text-center">
        <div
          className="mb-[clamp(14px,3vh,28px)]"
          style={{ animation: 'fade-in-up 1.2s ease-out forwards' }}
        >
          <h1 className="font-sans text-[clamp(30px,6vh,42px)] font-black leading-[1.15] tracking-tight text-primary [text-shadow:0_0_25px_rgba(255,26,60,0.4)] mb-xs">
            קרוב ללב
          </h1>
          <p className="font-sans text-[clamp(14px,2vh,17px)] leading-relaxed text-on-surface-variant max-w-[280px] mx-auto">
            משחק קלפים לזוגות, לשיחות שלא קורות מעצמן.
          </p>
        </div>

        <p
          className="w-full max-w-[300px] font-sans text-[13px] leading-relaxed text-on-surface-variant/90 mb-[clamp(14px,3vh,28px)] opacity-0"
          style={{ animation: 'fade-in-up 1.2s ease-out 0.3s forwards' }}
        >
          שולפים קלף, שואלים ועונים בקול רם – בלי הקלדה, בלי מסכים באמצע. השאלות
          נפתחות בהדרגה מהקליל אל העמוק, ויש גם מצב 18+ ובחירת נושאים לכוון את
          השיחה לאן שבא לכם.
        </p>

        <div
          className="w-full max-w-[320px] flex flex-col gap-[clamp(14px,3vh,32px)] items-center opacity-0"
          style={{ animation: 'fade-in-up 1.2s ease-out 0.6s forwards' }}
        >
          <StartButton onStart={onStart} />

          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-on-tertiary-container opacity-60 text-[16px]">
              volunteer_activism
            </span>
            <p className="font-sans text-[11px] font-semibold tracking-[0.05em] text-on-surface-variant/60">
              בלי שיפוט, בלי צופים – רק אתם, זה לזה.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
