
import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-nombre">De Las Jotas</p>

      <div className="footer-links">
        <a 
          href="https://www.instagram.com/tu_usuario" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a 
          href="https://wa.me/549XXXXXXXXXX" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} De Las Jotas · Todos los derechos reservados
      </p>
    </footer>
  );
}
