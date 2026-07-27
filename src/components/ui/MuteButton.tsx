import { useAppAudio } from '../../context/AudioContext';

/** Global speaker toggle for the background music, fixed in the header
 * corner across every screen so mute state is always reachable and stays
 * in sync with the single app-wide audio instance. */
export default function MuteButton() {
  const { isMuted, toggleMute } = useAppAudio();

  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-label={isMuted ? 'הפעל מוזיקה' : 'השתק מוזיקה'}
      className="fixed z-30 w-9 h-9 flex items-center justify-center text-on-surface-variant cursor-pointer hover:text-primary transition-colors"
      style={{
        top: 'max(env(safe-area-inset-top), 16px)',
        left: 'max(env(safe-area-inset-left), 16px)',
      }}
    >
      <span className="material-symbols-outlined text-[20px]">
        {isMuted ? 'volume_off' : 'volume_up'}
      </span>
    </button>
  );
}
