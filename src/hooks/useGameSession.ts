import { useRef, useState } from 'react';
import type { Card, GameState, SessionConfig } from '../types';
import { getUnlockedDepth } from '../data/depthProgression';
import { shuffle } from '../utils/shuffle';
import { getEligibleCards } from '../utils/eligibleCards';

const INITIAL_STATE: GameState = {
  playerNames: ['שחקן 1', 'שחקן 2'],
  isAdultEnabled: false,
  selectedCategories: [],
  turnNumber: 0,
  currentPlayerIndex: 0,
  drawnCardIds: [],
  currentCard: null,
};

/** Picks the next undrawn card, preferring ones within the turn's unlocked
 * depth range; falls back to the shallowest remaining undrawn card if none
 * fit (keeps the game playable rather than blocking on a narrow filter). */
function pickNextCard(deck: Card[], drawnIds: string[], turnNumber: number): Card | null {
  const unlockedDepth = getUnlockedDepth(turnNumber);
  const undrawn = deck.filter((card) => !drawnIds.includes(card.id));
  if (undrawn.length === 0) return null;

  const withinDepth = undrawn.find((card) => card.depth <= unlockedDepth);
  if (withinDepth) return withinDepth;

  return [...undrawn].sort((a, b) => a.depth - b.depth)[0];
}

/** Owns the live game session: deck building/shuffling, draw logic, and
 * turn/depth tracking. "Which screen" is owned by React Router — this hook
 * only tracks what's happening in the game itself. */
export function useGameSession() {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  // The shuffled, filtered deck is fixed for the session — a ref avoids
  // re-shuffling on every render while still surviving state updates.
  const deckRef = useRef<Card[]>([]);

  // Builds the session's deck (filtered by 18+ setting and category
  // selection, then shuffled once) and draws the first card.
  function startSession(config: SessionConfig) {
    const eligible = getEligibleCards(config.isAdultEnabled, config.selectedCategories);
    deckRef.current = shuffle(eligible);

    const firstCard = pickNextCard(deckRef.current, [], 1);
    setState({
      ...config,
      turnNumber: 1,
      currentPlayerIndex: 0,
      drawnCardIds: firstCard ? [firstCard.id] : [],
      currentCard: firstCard,
    });
  }

  // Advances to the next turn: switches player, unlocks depth by the new
  // turn count, and draws the next card from the pre-shuffled deck.
  function drawNextCard() {
    setState((prev) => {
      const nextTurn = prev.turnNumber + 1;
      const nextPlayerIndex: 0 | 1 = prev.currentPlayerIndex === 0 ? 1 : 0;
      const nextCard = pickNextCard(deckRef.current, prev.drawnCardIds, nextTurn);
      return {
        ...prev,
        turnNumber: nextTurn,
        currentPlayerIndex: nextPlayerIndex,
        drawnCardIds: nextCard ? [...prev.drawnCardIds, nextCard.id] : prev.drawnCardIds,
        currentCard: nextCard,
      };
    });
  }

  function resetSession() {
    deckRef.current = [];
    setState(INITIAL_STATE);
  }

  const hasCardsRemaining = state.drawnCardIds.length < deckRef.current.length;

  return { state, startSession, drawNextCard, hasCardsRemaining, resetSession };
}
