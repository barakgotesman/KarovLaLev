import { createContext, useContext, type ReactNode } from 'react';
import { useAudio } from '../hooks/useAudio';

type AudioContextValue = ReturnType<typeof useAudio>;

const AudioContext = createContext<AudioContextValue | null>(null);

/** Wraps the whole routed app in one persistent background-music instance,
 * so the track keeps playing (and mute state stays in sync) across
 * navigation between Welcome, Setup, Game, and End. */
export function AudioProvider({ children }: { children: ReactNode }) {
  const audio = useAudio();
  return <AudioContext.Provider value={audio}>{children}</AudioContext.Provider>;
}

export function useAppAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAppAudio must be used within an AudioProvider');
  }
  return context;
}
