import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const DashboardAdmin = () => {
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-content">
                {/* Sección del Administrador */}
                <div className="admin-section">
                    <img src="../src/assets/logo.png" className="logo-image" alt="Logo" />
                    <h1 className="section-title">Administrador</h1>
                    <p className="section-description">Accede al panel de administración para gestionar servicios, usuarios y más.</p>
                    <Link to="/admin" className="login-button">Iniciar Sesión</Link>
                </div>

                {/* Sección del Cliente */}
                <div className="client-section">
                    <img src="../src/assets/usuario.png" className="logo-image" alt="Logo" />
                    <h2 className="section-title">Cliente</h2>
                    <p className="section-description">Accede a tu cuenta para reservar un servicio de manera rápida y sencilla.</p>
                    <Link to="/cliente" className="login-button">Iniciar Sesión</Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;