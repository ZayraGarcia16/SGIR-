import React from 'react';
import { Link } from 'react-router-dom';

const SobreNosotros = () => {
  return (
    <>
      <header>
                <div className="container1">
                    <nav>
                        <div className="logo">
                            <img src="../src/assets/logo.png" alt="Logo" />
                        </div>
                        <ul>
                            <div className="btn">
                                <li className="fas fa-times close-btn"></li>
                            </div>
                            <Link to="/">Inicio</Link> |
                            <Link to="/nosotros">Nosotros</Link> | 
                            <Link to="/servicios">Servicios</Link> | 
                            <Link to="/inicio-con">Ingresar</Link>
                        </ul>
                        <div className="btn">
                            <li className="fas fa-bars menu-btn"></li>
                        </div>
                    </nav>
                </div>
            </header>

      <div className="container my-5">
        {/* Encabezado */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold" style={{ fontSize: '2.5rem' }}>Jose Leon</h1>
            <p className="text-muted" style={{ fontSize: '1.2rem' }}>Gerente General</p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="../src/assets/nosotros/leon.jpg"
              alt="Jose Leon"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)'
              }}
            />
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 className="fw-bold">Nuestra Misión</h3>
              <p>
                Facilitar experiencias de viaje únicas y educativas, especializándonos en caminatas escolares,
                excursiones, campamentos y deportes extremos. Inspiramos la exploración, el aprendizaje y la conexión
                con la naturaleza, proporcionando aventuras emocionantes que dejan recuerdos duraderos.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 className="fw-bold">Nuestra Visión</h3>
              <p>
                Ser reconocidos como líderes en la industria de viajes de aventura y educativos a nivel nacional.
                Aspiramos a transformar la manera en que las personas se relacionan con el mundo a través de nuestros
                servicios innovadores.
              </p>
            </div>
          </div>
        </div>

        {/* Contacto y Ubicación */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div style={{
              overflow: 'hidden',
              borderRadius: '10px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9314619195684!2d-74.18673882429074!3d4.606293042467241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e4322a10e07%3A0x4c73a91c32b1163c!2sCl.%2065%20Sur%20%2379c%20-%2004%2C%20Bosa%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1726779339640!5m2!1sen!2sco"
                title="Ubicación de la empresa"
                style={{
                  width: '100%',
                  height: '300px',
                  border: 'none'
                }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h4 className="fw-bold">Ubícanos fácilmente</h4>
            <p>
              Nos puedes encontrar en nuestro punto físico, o si lo prefieres, comunícate con nosotros para obtener
              información personalizada.
            </p>
            <a
              href="contactanos.php"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Comunícate aquí
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreNosotros;
