import { createContext, useContext, type ReactNode } from 'react';
import { useGameSession } from '../hooks/useGameSession';

type SessionContextValue = ReturnType<typeof useGameSession>;

const SessionContext = createContext<SessionContextValue | null>(null);

/** Wraps the routed screens so Setup, Game, and End all share one live
 * useGameSession instance — routing (React Router) owns "which screen",
 * this Context owns "what's happening in the game". */
export function SessionProvider({ children }: { children: ReactNode }) {
  const session = useGameSession();
  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}
