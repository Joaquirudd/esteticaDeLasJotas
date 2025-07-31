// src/components/Tratamientos.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import '../styles/Tratamientos.css';

export default function Tratamientos() {
  const [tratamientos, setTratamientos] = useState([]);

  useEffect(() => {
    const obtenerTratamientos = async () => {
      const querySnapshot = await getDocs(collection(db, 'tratamientos'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTratamientos(data);
    };

    obtenerTratamientos();
  }, []);

  return (
    <section id="tratamientos" className="tratamientos">
      <h2>Tratamientos</h2>
      <div className="grid-tratamientos">
        {tratamientos.map(trat => (
          <div key={trat.id} className="card-tratamiento">
            <img src={trat.imagen} alt={trat.titulo} />
            <h3>{trat.titulo}</h3>
            <p>{trat.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
