import React, { useState, useEffect } from "react";
import axios from "axios";
import './Hoteles.css'; // Asegúrate de que la ruta sea correcta

const FormHotel = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        ubicacion: "",
        numeroHabitaciones: 0,
        numeroPersonas: 0,
        comida: "",
        precio: 0,
        categoria: "baja" // Valor predeterminado
    });

    const [hoteles, setHoteles] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (editingId) {
                await axios.put(`http://localhost:7700/api/hotels/${editingId}`, formData);
            } else {
                await axios.post("http://localhost:7700/api/hotels", formData, {
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            setIsSuccess(true);
            obtenerHoteles();
            resetForm();
        } catch (error) {
            console.error("Error al guardar el hotel:", error);
            if (error.response && error.response.data) {
                setError(error.response.data.message || "Ocurrió un error al guardar el hotel");
            } else {
                setError("Ocurrió un error al guardar el hotel");
            }
        } finally {
            setLoading(false);
        }
    };

    const obtenerHoteles = async () => {
        try {
            const response = await axios.get("http://localhost:7700/api/hotels");
            setHoteles(response.data);
        } catch (error) {
            console.error("Error al obtener los hoteles:", error);
            setError("No se pudieron cargar los hoteles.");
        }
    };

    const editHotel = (hotel) => {
        console.log("Editing hotel ID:", hotel._id);
        setFormData(hotel);
        setEditingId(hotel._id);
    };

    const deleteHotel = async (id) => {
        console.log("Deleting hotel ID:", id); // Debug
        if (window.confirm("¿Estás seguro de que deseas eliminar este hotel?")) {
            try {
                await axios.delete(`http://localhost:7700/api/hotels/${id}`);
                obtenerHoteles();
            } catch (error) {
                console.error("Error al eliminar el hotel:", error);
                setError("No se pudo eliminar el hotel.");
            }
        }
    };

    const resetForm = () => {
        setFormData({
            nombre: "",
            ubicacion: "",
            numeroHabitaciones: 0,
            numeroPersonas: 0,
            comida: "",
            precio: 0,
            categoria: "baja"
        });
        setEditingId(null);
    };

    useEffect(() => {
        obtenerHoteles();
    }, []);

    return (
        <div className="container3">
            <div className="formulario-hotel-container">
                <h1>{editingId ? "Editar Hotel" : "Crear Hotel"}</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </label>
                    <label>
                        Ubicación:
                        <input type="text" name="ubicacion" value={formData.ubicacion} onChange={handleChange} required />
                    </label>
                    <label>
                        Número de Habitaciones:
                        <input type="number" name="numeroHabitaciones" value={formData.numeroHabitaciones} onChange={handleChange} required min="1" />
                    </label>
                    <label>
                        Capacidad (Número de Personas):
                        <input type="number" name="numeroPersonas" value={formData.numeroPersonas} onChange={handleChange} required min="1" />
                    </label>
                    <label>
                        Comida:
                        <input type="text" name="comida" value={formData.comida} onChange={handleChange} required />
                    </label>
                    <label>
                        Precio:
                        <input type="number" name="precio" value={formData.precio} onChange={handleChange} required min="0" />
                    </label>
                    <label>
                        Categoría:
                        <select name="categoria" value={formData.categoria} onChange={handleChange}>
                            <option value="baja">Baja</option>
                            <option value="media">Media</option>
                        </select>
                    </label>

                    <button className="agregar-button" type="submit" disabled={loading}>
                        {loading ? "Cargando..." : (editingId ? "Actualizar Hotel" : "Agregar Hotel")}
                    </button>
                </form>
            </div>

            <div className="hoteles-container">
                <h2>Hoteles Creados</h2>
                {hoteles.length > 0 ? (
                    <ul>
                        {hoteles.map((hotel) => (
                            <li key={hotel._id}>
                                <h3>{hotel.nombre}</h3>
                                <p><strong>Ubicación:</strong> {hotel.ubicacion}</p>
                                <p><strong>Habitaciones:</strong> {hotel.numeroHabitaciones}</p>
                                <p><strong>Capacidad:</strong> {hotel.numeroPersonas} personas</p>
                                <p><strong>Comida:</strong> {hotel.comida}</p>
                                <p><strong>Precio:</strong> ${hotel.precio}</p>
                                <p><strong>Categoría:</strong> {hotel.categoria}</p>

                                <button className="edit-button" onClick={() => editHotel(hotel)}>Editar</button>
                                <button className="delete-button" onClick={() => deleteHotel(hotel._id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay hoteles creados aún.</p>
                )}
            </div>
        </div>
    );
};

export default FormHotel;
