import WelcomeScreen from './screens/Welcome/WelcomeScreen';

function App() {
  return (
    <WelcomeScreen
      onStart={(isAdult) => {
        // Game/session logic not wired yet — placeholder for the next step.
        console.log('start journey, isAdult =', isAdult);
      }}
    />
  );
}

export default App;
