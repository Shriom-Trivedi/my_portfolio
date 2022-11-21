import About from './components/About/About';
import LandingPage from './components/LandingPage';
import NavigationPanel from './components/Navigation/NavigationPanel';

function App() {
  return (
    <div>
      <NavigationPanel />
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
