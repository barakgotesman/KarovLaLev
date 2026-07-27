import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GlowBackground from '../../components/ui/GlowBackground';
import gameBackground from '../../assets/images/game-background.png';
import CardDisplay from './CardDisplay';
import TurnIndicator from './TurnIndicator';
import EndSessionControl from './EndSessionControl';
import type { Category } from '../../types';

interface GameScreenProps {
  onEndSession: () => void;
}

// Placeholder cards for the frontend demo — replaced by the real
// deck/session logic (useGameSession, data/cards.ts) in a later pass.
const DEMO_CARDS: { text: string; category: Category; depth: 1 | 2 | 3 | 4 }[] = [
  {
    text: 'מהו הרגע השבוע שבו הרגשת הכי קרוב אלי, גם בלי מילים?',
    category: 'רגשות',
    depth: 2,
  },
  {
    text: 'מה משהו קטן שאני עושה שגורם לך להרגיש אהוב/ה?',
    category: 'זוגיות',
    depth: 1,
  },
  {
    text: 'איזו פחד היית רוצה לחלוק איתי הערב?',
    category: 'פחדים',
    depth: 3,
  },
];

export default function GameScreen({ onEndSession }: GameScreenProps) {
  const [player, setPlayer] = useState<1 | 2>(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  function handleFlip() {
    setIsFlipped((prev) => !prev);
  }

  function handleNextCard() {
    setIsFlipped(false);
    setPlayer((prev) => (prev === 1 ? 2 : 1));
    setQuestionIndex((prev) => (prev + 1) % DEMO_CARDS.length);
  }

  const currentCard = DEMO_CARDS[questionIndex];

  return (
    <div className="flex flex-col w-full h-dvh relative overflow-hidden bg-background">
      <GlowBackground heroImage={gameBackground} imagePosition="center 75%" />

      <header
        className="relative z-20 shrink-0"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="h-16 px-gutter flex items-center justify-between">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <h1 className="font-sans text-[20px] font-black tracking-tight text-primary [text-shadow:0_0_16px_rgba(255,26,60,0.4)]">
            המשחק
          </h1>
          <div className="flex items-center gap-xs">
            <button
              type="button"
              onClick={() => setIsMuted((prev) => !prev)}
              className="w-9 h-9 flex items-center justify-center text-on-surface-variant cursor-pointer hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isMuted ? 'volume_off' : 'volume_up'}
              </span>
            </button>
            <EndSessionControl onEndSession={onEndSession} />
          </div>
        </div>
      </header>

      <div className="relative z-20 flex flex-col flex-1 min-h-0 w-full max-w-[600px] mx-auto">
        <TurnIndicator player={player} />

        <CardDisplay
          questionText={currentCard.text}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />

        <div
          className="shrink-0 px-gutter py-[clamp(16px,4vh,40px)] flex flex-col items-center"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <AnimatePresence>
            {isFlipped && (
              <motion.button
                type="button"
                onClick={handleNextCard}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-sm text-primary cursor-pointer"
              >
                <span className="font-sans text-[12px] font-semibold">לשאלה הבאה</span>
                <span className="material-symbols-outlined">arrow_back</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
