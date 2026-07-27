import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GlowBackground from '../../components/ui/GlowBackground';
import Button from '../../components/ui/Button';
import { useSession } from '../../context/SessionContext';
import type { CategoryId } from '../../types';
import AgeToggle from './AgeToggle';
import CategoryFilter from './CategoryFilter';
import PlayerNamesForm from './PlayerNamesForm';

interface SetupScreenProps {
  onContinue: () => void;
}

const STEP_TITLES = ['איך קוראים לכם?', 'תוכן למבוגרים?', 'על מה תרצו לדבר?'];
const TOTAL_STEPS = STEP_TITLES.length;

export default function SetupScreen({ onContinue }: SetupScreenProps) {
  const { startSession } = useSession();
  const [step, setStep] = useState(0);
  const [names, setNames] = useState<[string, string]>(['', '']);
  const [isAdult, setIsAdult] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<CategoryId[]>([]);

  const isLastStep = step === TOTAL_STEPS - 1;
  // Both names are required before leaving the first step.
  const namesMissing = step === 0 && (names[0].trim() === '' || names[1].trim() === '');

  function handleNext() {
    if (namesMissing) return;
    if (isLastStep) {
      startSession({
        playerNames: [names[0].trim(), names[1].trim()],
        isAdultEnabled: isAdult,
        selectedCategories,
      });
      onContinue();
      return;
    }
    setStep((prev) => prev + 1);
  }

  function handleBack() {
    setStep((prev) => Math.max(0, prev - 1));
  }

  return (
    <div className="flex flex-col w-full h-dvh relative overflow-hidden bg-background">
      <GlowBackground />

      <div
        className="relative z-20 flex flex-col flex-1 min-h-0 items-center justify-center px-gutter py-[clamp(16px,4vh,40px)] gap-[clamp(16px,3vh,32px)] overflow-y-auto"
        style={{
          paddingTop: `max(env(safe-area-inset-top), clamp(16px, 4vh, 40px))`,
          paddingBottom: `max(env(safe-area-inset-bottom), clamp(16px, 4vh, 40px))`,
        }}
      >
        {/* Step progress dots */}
        <div className="shrink-0 flex items-center gap-xs">
          {STEP_TITLES.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === step ? 'w-6 bg-primary' : 'w-1.5 bg-surface-container-high'
              }`}
            />
          ))}
        </div>

        <h1 className="shrink-0 font-sans text-[clamp(22px,5vh,30px)] font-black tracking-tight text-primary [text-shadow:0_0_16px_rgba(255,26,60,0.4)] text-center">
          {STEP_TITLES[step]}
        </h1>

        <div className="w-full max-w-[320px] shrink-0 min-h-[140px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              {step === 0 && <PlayerNamesForm names={names} onChange={setNames} />}
              {step === 1 && <AgeToggle isAdult={isAdult} onChange={setIsAdult} />}
              {step === 2 && (
                <CategoryFilter selected={selectedCategories} onChange={setSelectedCategories} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full max-w-[320px] shrink-0 flex flex-col gap-sm">
          <Button variant="primary" pulse={isLastStep} disabled={namesMissing} onClick={handleNext}>
            {isLastStep ? 'בואו נתחיל' : 'המשך'}
          </Button>
          {step > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="h-11 rounded-full font-sans text-[13px] font-semibold text-on-surface-variant cursor-pointer flex items-center justify-center transition-colors hover:text-primary"
            >
              חזרה
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
