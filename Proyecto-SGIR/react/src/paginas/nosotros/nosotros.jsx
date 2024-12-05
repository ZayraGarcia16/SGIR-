import React from 'react';
import { Link } from 'react-router-dom';
import './nosotros.css'

const SobreNosotros = () => {
  return (
    <>
      {/* Header con fondo negro y texto blanco */}
      <header className="custom-header">
        <div className="custom-logo">
          <img src="../src/assets/logo.png" alt="Logo" />
        </div>
        <nav className="custom-nav">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/inicio-con">Ingresar</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contenido principal */}
      <div className="content-container">
        <div className="content-header">
          <h1 className="fw-bold">Jose Leon</h1>
          <p className="position-text">Gerente General</p>
        </div>

        <div className="image-container">
          <img src="../src/assets/nosotros/leon.jpg" alt="Jose Leon" />
        </div>

        {/* Misión y Visión */}
        <div className="mission-vision">
          <div className="section">
            <h3>Nuestra Misión</h3>
            <p>
              Facilitar experiencias de viaje únicas y educativas, especializándonos en caminatas escolares,
              excursiones, campamentos y deportes extremos...
            </p>
          </div>
          <div className="section">
            <h3>Nuestra Visión</h3>
            <p>
              Ser reconocidos como líderes en la industria de viajes de aventura y educativos a nivel nacional...
            </p>
          </div>
        </div>

        {/* Mapa */}
        <div className="map-container">
          <h3>Encuéntranos Aquí</h3>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5487193937456!2d-74.1216984857422!3d4.609710593708278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a90fb31579%3A0x575a8760cb69774d!2sBosa%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1609261977060!5m2!1ses!2sco"
              width="600"
              height="350"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreNosotros;
