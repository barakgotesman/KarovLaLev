/** Turn-count -> max unlocked depth mapping. Centralized here so game-balance
 * tuning never requires touching component or hook code. Depth 1 is always
 * unlocked; each threshold below unlocks depth 1..N (not just N alone). */
const DEPTH_THRESHOLDS: { minTurn: number; maxDepth: 1 | 2 | 3 | 4 }[] = [
  { minTurn: 1, maxDepth: 1 },
  { minTurn: 4, maxDepth: 2 },
  { minTurn: 8, maxDepth: 3 },
  { minTurn: 13, maxDepth: 4 },
];

/** Returns the highest card depth unlocked for the given turn number. */
export function getUnlockedDepth(turnNumber: number): 1 | 2 | 3 | 4 {
  let unlocked: 1 | 2 | 3 | 4 = 1;
  for (const { minTurn, maxDepth } of DEPTH_THRESHOLDS) {
    if (turnNumber >= minTurn) unlocked = maxDepth;
  }
  return unlocked;
}
