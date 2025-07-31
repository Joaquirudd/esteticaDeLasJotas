
import React from 'react';
import '../styles/Horarios.css';

export default function Horarios() {
  return (
    <section id="horarios" className="horarios">
      <h2>Dirección y Horarios</h2>
      <div className="horarios-contenido">
        <div className="horarios-info">
          <p>
            <strong>Dirección:</strong>{' '}
            <a
              href="https://www.google.com/maps/place/Tucum%C3%A1n+1550,+B1722MYN+Merlo,+Provincia+de+Buenos+Aires/@-34.6676358,-58.737643,17z/data=!3m1!4b1!4m6!3m5!1s0x95bc955876def4b5:0x4cf631eaf63dfe24!8m2!3d-34.6676358!4d-58.737643!16s%2Fg%2F11s1rqnwgr?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="link-mapa"
            >
              Tucumán 1550, Merlo, Buenos Aires
            </a>
          </p>

          <p><strong>Horarios:</strong></p>
          <ul>
            <li>Lunes a Viernes: 10:00 a 18:00</li>
            <li>Sábados: 10:00 a 14:00</li>
            <li>Domingos: Cerrado</li>
          </ul>
        </div>

        <div className="mapa">
            <iframe
                title="Mapa ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.4878165654395!2d-58.73764299999998!3d-34.6676358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc955876def4b5%3A0x4cf631eaf63dfe24!2sTucum%C3%A1n%201550%2C%20B1722MYN%20Merlo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1753989679736!5m2!1sen!2sar"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
      </div>
    </section>
  );
}
