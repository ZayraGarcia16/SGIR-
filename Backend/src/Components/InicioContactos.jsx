import React, { useState, useEffect } from "react";
import axios from "axios";
import './InicioContactos.css';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre_apellido: "",
        correo: "",
        asunto: "",
        mensaje: "",
        fechaActual: ""    
    });

    const [contactos, setContactos] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Para manejar el estado de carga

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setLoading(true); // Inicia la carga
    
        console.log("Datos enviados:", formData); 
    
        try {
            // Crear un nuevo contacto
            const response = await axios.post("http://localhost:4000/api/contactos", formData, {
                headers: { 'Content-Type': 'application/json' } 
            });
            console.log("Respuesta del servidor:", response.data); 
            
            setIsSuccess(true);
            obtenerContactos(); 
            resetForm(); 
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
            if (error.response && error.response.data) {
                setError(error.response.data.message || "Ocurrió un error al enviar el mensaje");
            } else {
                setError("Ocurrió un error al enviar el mensaje");
            }
        } finally {
            setLoading(false); // Finaliza la carga
        }
    };
    
    const obtenerContactos = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/contactos");
            console.log("Mensajes obtenidos:", response.data); // Verifica los datos recibidos
            setContactos(response.data);
        } catch (error) {
            console.error("Error al obtener los contactos:", error);
            setError("No se pudieron cargar las contacto.");
        }
    };

    const deleteContacto = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este mensaje?")) {
            try {
                await axios.delete(`http://localhost:4000/api/contactos/${id}`);
                obtenerContactos(); // Volver a cargar los mensajes después de eliminar
            } catch (error) {
                console.error("Error al eliminar el mensaje:", error);
                setError("No se pudo eliminar el mensaje.");
            }
        }
    };

    useEffect(() => {
        obtenerContactos();
    }, []);

    if (isSuccess) {
        return (
            <div className="confirmacion-container">
                <div className="check-animation">
                    <h2>¡mensaje enviado con éxito!</h2>
                    <button type="submit" className="volver-button" onClick={() => window.location.reload()}>Volver</button>
                </div>
            </div>
        );
    }
    return(
        <>
        <div className="container">
            <div className="box-info">
                <h1>COMUNICATE CON NOSOTROS</h1>
                <div className="data">
                    <p><i className="fa-solid fa-phone"></i> +57 3219090547</p>
                    <p><i className="fa-solid fa-envelope"></i> leoncaminantes@gmail.com</p>
                    <p><i className="fa-solid fa-location-dot"></i> Calle 65 No. 79C - 04 Sur</p>
                </div>

            </div>

            <form className="form-group" onSubmit={AgregarMensaje}>
                <div className="input-box">
                    <input 
                    type="text" 
                    id="nombre_apellido"
                    className="nombre_apellido" 
                    placeholder="Nombre y apellido" 
                    value={nombre_apellido}
                    onChange={(Event) => {setNombre_Apellido(Event.target.value);}}
                    required />
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="input-box">
                    <input 
                    type="email" 
                    id="correo"
                    className="correo" 
                    placeholder="Correo electrónico"
                    value={correo}
                    onChange={(Event) => {setCorreo(Event.target.value);}} 
                    required />
                    <i className="fa-solid fa-envelope"></i>
                </div>

                <div className="input-box">
                    <input 
                    type="text" 
                    id="asunto"
                    className="asunto"
                    value={asunto}
                    onChange={(Event) => {setAsunto(Event.target.value);}}
                    placeholder="Asunto" />
                    <i className="fa-solid fa-pen-to-square"></i>
                </div>
                <div className="input-box">
                    <textarea 
                    id="mensaje"
                    className="mensaje" 
                    placeholder="Escribe tu mensaje..."
                    value={mensaje}
                    onChange={(Event) => {setMensaje(Event.target.value);}}
                    required />
                </div>            
                <div className="input-box">
                    <input 
                    id="fecha" 
                    className="fecha"
                    value={fechaActual}
                    readOnly
                    />
                    <i className="fa-solid fa-calendar"></i>
                </div>
                <button type="submit" onClick={AgregarMensaje}>Enviar mensaje</button>

            </form>
        </div>
        </>
    )
}

