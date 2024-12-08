import React from "react";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted" >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Conoce nuestras Redes Sociales</span>
        </div>
        <div>
          <a
            href="https://www.facebook.com/p/Caminantes-Por-Colombia-100049091809294/?locale=es_LA"
            className="me-4 text-reset"
            aria-label="Facebook"
            style={{ textDecoration: 'none' }} // Aquí se elimina el subrayado
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.tiktok.com/@leoncaminantes"
            className="me-4 text-reset"
            aria-label="Tiktok"
            style={{ textDecoration: 'none' }} // Aquí se elimina el subrayado
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https://www.instagram.com/caminantespor_colombia/"
            className="me-4 text-reset"
            aria-label="Instagram"
            style={{ textDecoration: 'none' }} // Aquí se elimina el subrayado
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#!" className="me-4 text-reset" aria-label="GitHub" style={{ textDecoration: 'none' }}> 
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Caminantes Por Colombia
              </h6>
              <p>
                En Caminantes por Colombia ofrecemos experiencias extraordinarias
                a través de caminatas escolares, excursiones, campamentos y
                deportes extremos. Diseñamos programas que combinan aventura,
                educación y diversión para personas de todas las edades.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
              <p>
                <a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>
                  Hotel
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>
                  Excursiones
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>
                  Paquetes Turísticos
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Políticas</h6>
              <p>
                <a
                  onClick={() => setPage("terminos-de-uso")}
                  className="text-reset"
                  style={{ cursor: "pointer", textDecoration: 'none' }}
                >
                  Términos de Uso
                </a>
              </p>
              <p>
                <a
                  onClick={() => setPage("politica-privacidad")}
                  className="text-reset"
                  style={{ cursor: "pointer", textDecoration: 'none' }}
                >
                  Política de Privacidad
                </a>
              </p>
              <p>
                <a
                  onClick={() => setPage("ayuda")}
                  className="text-reset"
                  style={{ cursor: "pointer", textDecoration: 'none' }}
                >
                  Ayuda
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <i className="fas fa-home me-3"></i> Calle 65 No.79 C-04 Sur Bosa
                Centro
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                caminanteporcolombia@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 57 312 2567578
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 57 321 9090547
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="" style={{ textDecoration: 'none' }}>
          Caminantes Por Colombia
        </a>
      </div>
    </footer>
  );
}

export default Footer;