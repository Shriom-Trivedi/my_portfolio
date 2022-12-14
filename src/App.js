import About from './components/About/About';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import NavigationPanel from './components/Navigation/NavigationPanel';

function App() {
  return (
    <div className=' overflow-x-hidden'>
      <NavigationPanel />
      <LandingPage />
      <About />
      <Footer />
    </div>
  );
}

export default App;
