import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import SetupScreen from './screens/Setup/SetupScreen';
import GameScreen from './screens/Game/GameScreen';
import EndScreen from './screens/End/EndScreen';
import { SessionProvider, useSession } from './context/SessionContext';
import { AudioProvider, useAppAudio } from './context/AudioContext';
import MuteButton from './components/ui/MuteButton';

function WelcomeRoute() {
  const navigate = useNavigate();
  const { play } = useAppAudio();
  return (
    <WelcomeScreen
      onStart={() => {
        play();
        navigate('/setup');
      }}
    />
  );
}

function SetupRoute() {
  const navigate = useNavigate();
  return <SetupScreen onContinue={() => navigate('/game')} onExit={() => navigate('/')} />;
}

function GameRoute() {
  const navigate = useNavigate();
  const { state } = useSession();

  // If this route is reached with no active session (direct navigation,
  // a page reload, or a dev-server full-reload wiping in-memory state),
  // there's no card to show — send the player back to start instead of
  // rendering a blank screen.
  useEffect(() => {
    if (state.turnNumber === 0) {
      navigate('/', { replace: true });
    }
  }, [state.turnNumber, navigate]);

  return <GameScreen onEndSession={() => navigate('/end')} />;
}

function EndRoute() {
  const navigate = useNavigate();
  const { resetSession } = useSession();

  function backToWelcome() {
    resetSession();
    navigate('/');
  }

  return <EndScreen onRestart={backToWelcome} onExit={backToWelcome} />;
}

function App() {
  return (
    <AudioProvider>
      <SessionProvider>
        <MuteButton />
        <Routes>
          <Route path="/" element={<WelcomeRoute />} />
          <Route path="/setup" element={<SetupRoute />} />
          <Route path="/game" element={<GameRoute />} />
          <Route path="/end" element={<EndRoute />} />
        </Routes>
      </SessionProvider>
    </AudioProvider>
  );
}

export default App;
