import React from 'react';
import { Link } from 'react-router-dom';
import './dashboardadmin.css'; // Agrega estilos personalizados aquí

const ClientePage = () => {
    return (
        <div className="admin-container">
            <h1>Panel Vista Usuario</h1>
            <div className="buttons-container">
                <Link to="/clientevista" className="admin-button">Excursiones</Link>
                <Link to="/" className="admin-button">Paquetes </Link>
                <Link to="/" className="admin-button">Hoteles</Link>
                <Link to="/contacto" className="admin-button">Hoteles</Link>
                
            </div>
        </div>
    );
};

export default ClientePage;