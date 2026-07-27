interface EndSessionControlProps {
  onEndSession: () => void;
}

/** Compact icon button that ends the session at any time — no forced
 * minimum/maximum number of turns per the game spec. Lives in the header
 * rather than as a full-width pill, since it's a secondary/escape action. */
export default function EndSessionControl({ onEndSession }: EndSessionControlProps) {
  return (
    <button
      type="button"
      onClick={onEndSession}
      aria-label="סיום המסע"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-surface-container-high/60 text-on-surface-variant cursor-pointer hover:text-primary hover:bg-surface-container-high transition-all duration-300"
    >
      <span className="material-symbols-outlined text-[18px]">close</span>
    </button>
  );
}
