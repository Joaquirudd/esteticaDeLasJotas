// src/components/Galeria.jsx
import React from 'react';
import '../styles/Galeria.css';

// Para este ejemplo usamos imágenes locales o de internet
import img1 from '../images/galeria1.jpg';
import img2 from '../images/galeria2.webp';
import img3 from '../images/galeria3.jpg';
import img4 from '../images/galeria4.webp';
import img5 from '../images/galeria5.png';
import img6 from '../images/galeria6.jpg';

const imagenes = [img1, img2, img3, img4, img5, img6];

export default function Galeria() {
  return (
    <section id="galeria" className="galeria">
      <h2>Galería</h2>
      <div className="galeria-contenido">
        <div className="galeria-grid">
          {imagenes.map((src, index) => (
          <div key={index} className="galeria-item">
            <img src={src} alt={`Imagen ${index + 1}`} />
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
