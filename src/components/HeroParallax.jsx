// src/components/HeroParallax.jsx
import React from 'react';
import '../styles/HeroParallax.css';

export default function HeroParallax() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>De Las Jotas</h1>
        <p>Estética y bienestar en cada detalle</p>
        <a 
          href="https://wa.me/549XXXXXXXXXX" 
          className="btn-turno" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Turnos
        </a>
      </div>
    </section>
  );
}
