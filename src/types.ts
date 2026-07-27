// Category identity is numeric (see data/categories.ts for the id -> Hebrew
// label mapping and the named CATEGORY_ID constants used when authoring cards).
export type CategoryId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export interface Card {
  id: string;
  text: string;
  category: CategoryId;
  depth: 1 | 2 | 3 | 4;
  isAdult: boolean;
  tags?: string[];
}

/** Config collected on the Setup screen, before the deck is built. */
export interface SessionConfig {
  playerNames: [string, string];
  isAdultEnabled: boolean;
  /** Empty means "no filter" — every category is eligible. */
  selectedCategories: CategoryId[];
}

/** Live session state — "which screen" is owned by React Router, not this. */
export interface GameState extends SessionConfig {
  turnNumber: number;
  currentPlayerIndex: 0 | 1;
  drawnCardIds: string[];
  currentCard: Card | null;
}
