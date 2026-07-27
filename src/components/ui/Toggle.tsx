interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

/** Pill switch used for binary settings (e.g. the 18+ content toggle). */
export default function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <div className="w-full flex items-center justify-between px-md py-sm bg-surface-container/40 backdrop-blur-xl rounded-full border-t border-white/5">
      <span className="text-[12px] font-sans font-semibold tracking-[0.05em] text-on-surface/80">
        {label}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          checked ? 'bg-primary-container' : 'bg-surface-variant'
        }`}
      >
        <div
          className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${
            checked ? 'bg-on-primary-container right-1 -translate-x-6' : 'bg-outline right-1 translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
