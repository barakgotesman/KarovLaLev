import { useEffect, useRef, useState } from 'react';
import backgroundMusic from '../assets/audio/background-music.mp3';

const BACKGROUND_VOLUME = 0.3;

/** Owns a single looping background-music element for the whole app. It
 * tries to start playing as soon as the app mounts; browsers that block
 * that (no user gesture yet) reject the promise silently, so a one-time
 * listener retries on the very first tap/click anywhere on the page —
 * covering both "autoplay allowed" and "autoplay blocked" browsers without
 * depending on a specific button. Mute is a volume toggle rather than
 * pause/resume so the track keeps its position while muted. */
export function useAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  if (!audioRef.current) {
    const audio = new Audio(backgroundMusic);
    audio.loop = true;
    audio.volume = BACKGROUND_VOLUME;
    audioRef.current = audio;
  }

  function play() {
    audioRef.current?.play().catch(() => {
      // Autoplay rejected outside a user-gesture call stack; the
      // first-interaction listener below will retry.
    });
  }

  useEffect(() => {
    play();

    function retryOnFirstInteraction() {
      if (audioRef.current?.paused) {
        play();
      }
    }
    document.addEventListener('pointerdown', retryOnFirstInteraction);

    return () => {
      document.removeEventListener('pointerdown', retryOnFirstInteraction);
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  function toggleMute() {
    setIsMuted((prev) => !prev);
  }

  return { play, isMuted, toggleMute };
}
