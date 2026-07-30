import type { Card, CategoryId } from '../types';
import { CARDS } from '../data/cards';

/** Filters the full card bank down to the cards a session with these
 * settings would draw from — shared by useGameSession (to build the actual
 * deck) and the Setup screen (to preview the resulting deck size live). */
export function getEligibleCards(isAdultEnabled: boolean, selectedCategories: CategoryId[]): Card[] {
  return CARDS.filter(
    (card) =>
      (isAdultEnabled || !card.isAdult) &&
      (selectedCategories.length === 0 || selectedCategories.includes(card.category)),
  );
}
