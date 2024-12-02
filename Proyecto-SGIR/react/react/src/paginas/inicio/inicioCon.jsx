import React from 'react';
import './estilos_inicio.css'
const InicioCon = () => {
    return (
        <div className="background-image">
            <div className="content">
                <div className="left">
                    <img src="../../assets/logo.png"  className="logo" />
                    <h1>Caminantes Por Colombia</h1>
                </div>
                <div className="right">
                    <h2>Empezar</h2>
                    <p>Acceso exclusivo para administrador</p>
                    <div className="buttons">
                        <button onClick={() => location.href = '#'}>Iniciar sesión</button>
                    </div>
                    <div className="links">
                        <a href="assets/html/Terminosdeuso.html">Términos de Uso</a>
                        <a>I</a>
                        <a href="assets/html/politicas.html">Política de Privacidad</a>
                    </div>
                    <div className="icon-link">
                        <a href="assets/html/ayuda.html">
                            <i className="fas fa-question-circle"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InicioCon;
