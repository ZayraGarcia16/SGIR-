import React, { useState, useEffect } from 'react';
import './PaqueteForm.css';

const PaqueteForm = ({ currentpaquete, onSave }) => {
    const [paquete, setpaquete] = useState({ destino: '', actividad: '', numeroPersonas: 1, precio: '', transporte: '', comida: '' });

    useEffect(() => {
        if (currentpaquete) {
            setpaquete(currentpaquete);
        } else {
            setpaquete({ destino: '', actividad: '', numeroPersonas: 1, precio: '', transporte: '', comida: '' });
        }
    }, [currentpaquete]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setpaquete((prevpaquete) => ({
            ...prevpaquete,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(paquete);
    };
    return (
        <form onSubmit={handleSubmit} className='paquete-Form'>
            <input
                type="text"
                name="destino"
                value={paquete.destino}
                onChange={handleChange}
                placeholder="Destino"
                required
            />
            <input
                type="text"
                name="actividad"
                value={paquete.actividad}
                onChange={handleChange}
                placeholder="Actividad"
                required
            />
            <input
                type="number"
                name="numeroPersonas"
                value={paquete.numeroPersonas}
                onChange={handleChange}
                placeholder="Numero de Personas"
                min="1"
                max="10"
                required
            />
            <input
                type="text"
                name="categoria"
                value={paquete.categoria}
                onChange={handleChange}
                placeholder="categoria"
                required
            />
            <input
                type="text"
                name="precio"
                value={paquete.precio}
                onChange={handleChange}
                placeholder="Precio"
                required
            />
            <input
                type="text"
                name="transporte"
                value={paquete.transporte}
                onChange={handleChange}
                placeholder="Transporte"
                required
            />
            <input
                type="text"
                name="comida"
                value={paquete.comida}
                onChange={handleChange}
                placeholder="Comida"
                required
            />
            <button type="submit">{currentpaquete ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
};

export default PaqueteForm;
