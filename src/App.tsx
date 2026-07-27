import { useState } from 'react';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import GameScreen from './screens/Game/GameScreen';
import type { Screen } from './types';

function App() {
  // Real session state (deck, depth, drawn cards) not wired yet — this
  // is just screen routing for the frontend-only pass.
  const [screen, setScreen] = useState<Screen>('welcome');

  if (screen === 'game') {
    return <GameScreen onEndSession={() => setScreen('welcome')} />;
  }

  return (
    <WelcomeScreen
      onStart={() => {
        setScreen('game');
      }}
    />
  );
}

export default App;
