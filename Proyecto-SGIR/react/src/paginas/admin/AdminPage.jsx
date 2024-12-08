// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';
import Header from './Header';

const AdminPage = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const URLAPI = 'http://localhost:7700/api/admin'

    // Función para obtener los usuarios del backend
    const fetchUsuarios = async () => {
        try {
            const response = await axios.get(`${URLAPI}`); //ENDPOINT DE LA API
            setUsuarios(response.data);
        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
        }
    };

    // Obtener los usuarios al montar el componente
    useEffect(() => {
        fetchUsuarios();
    }, [usuarios]);

    // Función para manejar la edición de usuarios
    const handleEdit = (usuario) => {
        setCurrentUser(usuario);
    };

    // Función para manejar la eliminación de usuarios
    const handleDelete = async (usuario) => {
        try {
            await axios.delete(`${URLAPI}/${usuario._id}`);
            setUsuarios(usuarios.filter((u) => u._id !== usuario._id));
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
        }
    };

    // Función para manejar la creación o actualización de usuarios
    const handleSave = async (usuario) => {
        if (currentUser) {
            try {
                const response = await axios.put(`${URLAPI}/${currentUser._id}`, usuario);
                setUsuarios(
                    usuarios.map((u) => (u._id === currentUser.id ? response.data : u))
                );
            } catch (error) {
                console.error('Error al actualizar el usuario:', error);
            }
        } else { 
            try {
                const response = await axios.post(`${URLAPI}`, usuario);
                setUsuarios([...usuarios, response.data]);
            } catch (error) {
                console.error('Error al agregar el usuario:', error);
            }
        }
        setCurrentUser(null);
    };

    return (
        <div className="app-container">
            <Header />
            <main>
                <UserList usuarios={usuarios} onEdit={handleEdit} onDelete={handleDelete} />
                <UserForm currentUser={currentUser} onSave={handleSave} />
            </main>
        </div>
    );
};

export default AdminPage;

