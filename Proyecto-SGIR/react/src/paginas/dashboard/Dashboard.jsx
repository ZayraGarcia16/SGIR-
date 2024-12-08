import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const DashboardAdmin = () => {
    return (
        <div className="dashboard-container">
            <div className="content">
                {/* Sección del Administrador */}
                <div className="left">
                    <img src="../src/assets/logo.png" className="logo" alt="Logo" />
                    <h1>Administrador</h1>
                    <p>Accede al panel de administración</p>
                    <Link to="/dashboard-admin" className="admin-button"><a>Iniciar Sesion</a></Link>
                    
                </div>

                {/* Sección del Cliente */}
                <div className="right">
                <img src="../src/assets/logo.png" className="logo" alt="Logo" />
                    <h2>Cliente</h2>
                    <p>Accede a tu cuenta para reservar un servicio</p>
                    <Link to="/cliente" className="admin-button"><a>Iniciar Sesion</a></Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;