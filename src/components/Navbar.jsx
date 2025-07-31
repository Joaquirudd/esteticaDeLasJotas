// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">De Las Jotas</div>
      <ul className="nav-links">
        <li><a href="#tratamientos">Tratamientos</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#turnos">Turnos</a></li>
        <li><a href="#horarios">Horarios</a></li>
      </ul>
    </nav>
  );
}
