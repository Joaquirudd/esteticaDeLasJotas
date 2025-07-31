import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroParallax from './components/HeroParallax';
import Tratamientos from './components/Tratamientos';
import Galeria from './components/Galeria';
import Horarios from './components/Horarios';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroParallax />
      <Tratamientos />
      <Galeria />
      <Horarios/>
      <Footer/>
    </div>
  );
}

export default App;
