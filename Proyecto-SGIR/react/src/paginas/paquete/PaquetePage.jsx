// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Listapaquete from './Listapaquete';
import PaqueteForm from './PaqueteForm';
import Header from './Header';


const PaquetePage = () => {
    const [paquetes, setpaquete] = useState([]);
    const [currentpaquete, setCurrentpaquete] = useState(null);
    const URLAPI = 'http://localhost:7700/api/paquete'

    
    const fetchpaquete = async () => {
        try {
            const response = await axios.get(`${URLAPI}`); //ENDPOINT DE LA API
            setpaquete(response.data);
        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
        }
    };

    
    useEffect(() => {
        fetchpaquete();
    }, [paquetes]);

    
    const handleEdit = (paquete) => {
        setCurrentpaquete(paquete);
    };


    const handleDelete = async (paquete) => {
        try {
            await axios.delete(`${URLAPI}/${paquete._id}`);
            setpaquete(paquetes.filter((u) => u._id !== paquete._id));
        } catch (error) {
            console.error('Error al eliminar el paquete:', error);
        }
    };

   
    const handleSave = async (paquete) => {
        if (currentpaquete) {
            try {
                const response = await axios.put(`${URLAPI}/${currentpaquete._id}`, paquete);
                setpaquete(
                    paquetes.map((u) => (u._id === currentpaquete.id ? response.data : u))
                );
            } catch (error) {
                console.error('Error al actualizar el paquete:', error);
            }
        } else { 
            try {
                console.log({paquete})
                const response = await axios.post(`${URLAPI}`, paquete);
                setpaquete([...paquetes, response.data]);
            } catch (error) {
                console.error('Error al agregar paquete:', error);
            }
        }
        setCurrentpaquete(null);
    };

    return (
        <div className="app-container">
            <Header />
            <hr />
            <main>
                <Listapaquete paquete={paquetes} onEdit={handleEdit} onDelete={handleDelete} />
                <PaqueteForm currentpaquete={currentpaquete} onSave={handleSave} />
            </main>
        </div>
    );
};

export default PaquetePage;
