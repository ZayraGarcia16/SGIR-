import React, { useState, useEffect } from 'react';
import './PaqueteForm.css';

const PaqueteForm = ({ currentpaquete, onSave }) => {
    const [paquete, setpaquete] = useState({ destino: '', actividad: '', numeroPersonas: 1, categoria: '', precio: '', transporte: '', comida: '' });

    useEffect(() => {
        if (currentpaquete) {
            setpaquete(currentpaquete);
        } else {
            setpaquete({ destino: '', actividad: '', numeroPersonas: 1, categoria: '', precio: '', transporte: '', comida: '' });
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
            <select name="destino" value={paquete.destino} onChange={handleChange} required>
                <option value="">Seleccione Destino</option>
                <option value="Destino 1">Cartagena</option>
                <option value="Destino 2">Cali</option>
                <option value="Destino 3">San Andres</option>
                <option value="Destino 4">La guajira</option>
            </select>
            <select name="actividad" value={paquete.actividad} onChange={handleChange} required>
                <option value="">Seleccione Actividad</option>
                <option value="Actividad 1"></option>
                <option value="Actividad 2">senderismo</option>
                <option value="Actividad 3">Surf</option>
                <option value="Actividad 4">Recorrido a islas</option>
            </select>
            <input
    type="number"
    name="numeroPersonas"
    value={paquete.numeroPersonas}
    onChange={handleChange}
    placeholder="Número de Personas"
    min="1"
    max="30"
    required
/>

            <select name="categoria" value={paquete.categoria} onChange={handleChange} required>
                <option value="">Seleccione Categoria</option>
                <option value="Categoria 1">paquete1</option>
                <option value="Categoria 2">paquete2</option>
                <option value="Categoria 3">paquete3</option>
                <option value="Categoria 4">paquete4</option>
            </select>
            <select name="precio" value={paquete.precio} onChange={handleChange} required>
                <option value="">$Seleccione Precio</option>
                <option value="$100,000">$1.600.000</option>
                <option value="$200,000">$1.100.000</option>
                <option value="$300,000">$930.000</option>
            </select>
            <select name="transporte" value={paquete.transporte} onChange={handleChange} required>
                <option value="">Seleccione Transporte</option>
                <option value="Transporte 1">bus</option>
                <option value="Transporte 2">avion</option>
                
            </select>
            <select name="comida" value={paquete.comida} onChange={handleChange} required>
                <option value=""> Seleccione Comida</option>
                <option value="Comida 1">todoincluido</option>
                <option value="Comida 2">almuerzo incluido</option>
                <option value="Comida 3">sin comida</option>
                
            </select>
            <button type="submit">{currentpaquete ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
};

export default PaqueteForm;
