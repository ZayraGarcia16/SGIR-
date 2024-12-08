import React from 'react';
import './estilos_inicio.css';
import { Link } from 'react-router-dom';

const InicioCon = () => {
    return (
      <div className="inicio-background">
        <div className="inicio-content">
          <div className="inicio-left">
            <img src="../src/assets/logo.png" className="inicio-logo" alt="Caminantes Por Colombia" />
            <h1>Caminantes Por Colombia</h1>
          </div>
          <div className="inicio-right">
            <h2>Empezar</h2>
            <p>Acceso exclusivo para administrador</p>
            <div className="inicio-buttons">
             <button> <Link to="/dashboard">Iniciar Sesion</Link> </button>
            </div>
            <div className="inicio-links">
             <a ><Link to="/politica">Política de Privacidad</Link></a>
             <a ><Link to="/terminos">Terminos de Privacidad</Link></a>
    
            </div>
            <div className="inicio-icon-link">
            <a ><Link to="/ayuda">Ayuda</Link>
                <i className="fas fa-question-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default InicioCon;