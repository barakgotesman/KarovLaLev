import { Routes, Route, useNavigate } from 'react-router-dom';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import GameScreen from './screens/Game/GameScreen';
import EndScreen from './screens/End/EndScreen';

// Real session state (deck, depth, drawn cards) not wired yet — routing
// alone doesn't carry it, that comes with useGameSession in a later pass.

function WelcomeRoute() {
  const navigate = useNavigate();
  return <WelcomeScreen onStart={() => navigate('/game')} />;
}

function GameRoute() {
  const navigate = useNavigate();
  return <GameScreen onEndSession={() => navigate('/end')} />;
}

function EndRoute() {
  const navigate = useNavigate();
  return (
    <EndScreen onRestart={() => navigate('/')} onExit={() => navigate('/')} />
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeRoute />} />
      <Route path="/game" element={<GameRoute />} />
      <Route path="/end" element={<EndRoute />} />
    </Routes>
  );
}

export default App;
