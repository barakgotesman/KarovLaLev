import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GlowBackground from '../../components/ui/GlowBackground';
import gameBackground from '../../assets/images/game-background.png';
import CardDisplay from './CardDisplay';
import EndSessionControl from './EndSessionControl';
import { useSession } from '../../context/SessionContext';

interface GameScreenProps {
  onEndSession: () => void;
}

export default function GameScreen({ onEndSession }: GameScreenProps) {
  const { state, drawNextCard } = useSession();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  // Guards against CardDisplay's onAnimationComplete firing spuriously on
  // mount (isFlipped already starts false, so no real animation runs) —
  // only an explicit "next card" click should trigger a draw.
  const pendingDrawRef = useRef(false);

  // Auto-advance to the End screen once the deck is exhausted (currentCard
  // goes null after a draw), or if the session's filters produced an empty
  // deck to begin with. Guarded by turnNumber so this doesn't fire if the
  // screen is reached directly without a session having been started.
  useEffect(() => {
    if (!state.currentCard && state.turnNumber > 0) {
      onEndSession();
    }
  }, [state.currentCard, state.turnNumber, onEndSession]);

  function handleFlip() {
    setIsFlipped((prev) => !prev);
  }

  function handleNextCard() {
    // Just trigger the flip-back animation here — the actual card swap
    // happens in handleFlipComplete once the card is fully face-down, so
    // the new question never flashes into view mid-rotation.
    pendingDrawRef.current = true;
    setIsFlipped(false);
  }

  function handleFlipComplete() {
    if (!pendingDrawRef.current) return;
    pendingDrawRef.current = false;
    drawNextCard();
  }

  if (!state.currentCard) return null;

  const playerName = state.playerNames[state.currentPlayerIndex];

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
          <div className="flex items-center gap-xs">
            <span
              className="material-symbols-outlined text-primary text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              diversity_2
            </span>
            <h1 className="font-sans text-[16px] font-black tracking-tight text-primary [text-shadow:0_0_16px_rgba(255,26,60,0.4)]">
              תור {playerName}
            </h1>
          </div>
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

      <div className="relative z-20 flex flex-col flex-1 min-h-0 w-full max-w-[600px] mx-auto pt-[clamp(12px,3vh,32px)]">
        <CardDisplay
          questionText={state.currentCard.text}
          isFlipped={isFlipped}
          onFlip={handleFlip}
          onFlipComplete={handleFlipComplete}
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
