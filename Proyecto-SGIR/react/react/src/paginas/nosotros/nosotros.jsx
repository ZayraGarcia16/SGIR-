import React from 'react';
import Menu from '../../componentes/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
const SobreNosotros = () => {
    return (
      <>
        {/* Agregar el componente Menu */}
        <Menu />
        
        <div className="container">
          <div className="card-container">
            <div className="header">
              <img src="../../assets/nosotros/leon.jpg" alt="Jose Leon" />
              <div>
                <h1>Jose Leon</h1>
                <h2>Gerente</h2>
              </div>
            </div>
  
            <div className="descripcion">
              <img src="leon.jpg" alt="Jose Leon" className="imagen-mision-vision" />
              <div className="misvision">
                <div>
                  <h3>Misión:</h3>
                  <p>
                    Facilitar experiencias de viaje únicas y educativas, especializándonos en caminatas escolares, excursiones, campamentos y deportes extremos. En la Agencia de Viajes, se dedican a inspirar la exploración, el aprendizaje y la conexión con la naturaleza, proporcionando aventuras emocionantes que dejan recuerdos duraderos.
                  </p>
                </div>
  
                <div>
                  <h3>Visión:</h3>
                  <p>
                    Ser reconocidos como líderes en la industria de viajes de aventura y educativos a nivel nacional. Aspiramos a ser la elección preferida para aquellos que buscan experiencias auténticas y educativas, y a transformar la manera en que las personas se relacionan con el mundo a través de nuestros servicios innovadores.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="contac">
            <div className="mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9314619195684!2d-74.18673882429074!3d4.606293042467241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e4322a10e07%3A0x4c73a91c32b1163c!2sCl.%2065%20Sur%20%2379c%20-%2004%2C%20Bosa%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1726779339640!5m2!1sen!2sco"
                title="Ubicación de la empresa"
              ></iframe>
            </div>
            <div className="ubica">
              <p>Nos puedes encontrar en nuestro punto físico o...</p>
              <a href="contactanos.php">
                <button className="cont" type="button">Comunicate aqui...</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
};

export default SobreNosotros;
