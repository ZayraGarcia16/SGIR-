import React from 'react';
import { Link } from 'react-router-dom';
import './dashboardadmin.css'; // Agrega estilos personalizados aquí

const AdminPage = () => {
    return (
        <div className="admin-container">
            <h1>Panel de Administración</h1>
            <div className="buttons-container">
                <Link to="/crudadmin" className="admin-button">Gestion de Administrador</Link>
                <Link to="/clientes" className="admin-button">Gestion de Clientes</Link>
                <Link to="/paquete" className="admin-button">Gestion de Paquetes</Link>
                <Link to="/excursiones" className="admin-button">Gestion de Excursiones</Link>
                <Link to="/comentario" className="admin-button">Gestion de Comentarios</Link>
                <Link to="/crudcontacto" className="admin-button">Gestion de Contacto</Link>
                <Link to="/hotel" className="admin-button">Gestion de Hoteles</Link>
                <Link to="/reserva" className="admin-button">Gestion de Reservas</Link>
            </div>
        </div>
    );
};

export default AdminPage;