import React from 'react';
import { Link } from 'react-router-dom';
import './dashboardadmin.css'; // Agrega estilos personalizados aquí

const AdminPage = () => {
    return (
        <div className="admin-container">
            <h1>Panel de Administración</h1>
            <div className="buttons-container">
                <Link to="/admin" className="admin-button">CRUD Admin</Link>
                <Link to="/clientes" className="admin-button">CRUD Clientes</Link>
                <Link to="/paquete" className="admin-button">CRUD Paquetes</Link>
                <Link to="/excursiones" className="admin-button">CRUD Excursiones</Link>
                <Link to="/comentario" className="admin-button">CRUD Comentario</Link>
                <Link to="/crudcontacto" className="admin-button">CRUD Contacto</Link>
                <Link to="/hotel-form" className="admin-button">CRUD Hoteles</Link>
                <Link to="/reserva" className="admin-button">CRUD Reservas</Link>
            </div>
        </div>
    );
};

export default AdminPage;