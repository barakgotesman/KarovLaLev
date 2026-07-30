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
