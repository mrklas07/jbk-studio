import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio'; // <--- Nuevo
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';     // <--- Nuevo

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />  {/* <--- Aquí va el portafolio */}
      <Footer />
      
      {/* El Chatbot va fuera de todo flujo, porque es flotante */}
      <Chatbot />
    </div>
  );
}

export default App;