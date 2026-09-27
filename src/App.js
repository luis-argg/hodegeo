import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import System from './components/System';
import AppFeatures from './components/AppFeatures';
import Hardware from './components/Hardware';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <About />
        <System />
        <AppFeatures />
        <Hardware />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
