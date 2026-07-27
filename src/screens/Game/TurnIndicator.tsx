interface TurnIndicatorProps {
  player: 1 | 2;
}

/** Small pill announcing whose turn it is to draw/answer. */
export default function TurnIndicator({ player }: TurnIndicatorProps) {
  return (
    <div className="flex items-center justify-center shrink-0 pt-[clamp(12px,3vh,32px)] pb-[clamp(12px,3vh,48px)]">
      <div className="flex items-center gap-sm bg-surface-container-high/40 backdrop-blur-md px-md py-xs rounded-full animate-pulse">
        <span
          className="material-symbols-outlined text-primary text-[20px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          diversity_2
        </span>
        <span className="font-sans text-[12px] font-semibold text-on-surface-variant tracking-widest">
          תור שחקן {player}...
        </span>
      </div>
    </div>
  );
}
