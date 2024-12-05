import React, { useState } from 'react';
import axios from 'axios';
import "../paginas/css/registro.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    usuario: '',
    contrasena: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7700/api/clientes', formData);
      if (response.status === 201) {
        alert('Registro exitoso');
        setFormData({
          nombre: '',
          apellido: '',
          correo: '',
          usuario: '',
          contrasena: '',
        });
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        setError(`Error ${err.response.status}: ${err.response.data.message || 'Error al registrarse'}`);
      } else if (err.request) {
        setError('No se recibió respuesta del servidor.');
      } else {
        setError('Error al registrar. Inténtalo de nuevo.');
      }
    }
  };

  return (
    <main>
      <div className="form-container">
        <h1>Crear cuenta</h1>
        <form id="register-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre" className="sr-only">Nombre</label>
          <input type="text" name="nombre" id="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />

          <label htmlFor="apellido" className="sr-only">Apellido</label>
          <input type="text" name="apellido" id="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />

          <label htmlFor="correo" className="sr-only">Correo</label>
          <input type="email" name="correo" id="correo" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} required />

          <label htmlFor="usuario" className="sr-only">Usuario</label>
          <input type="text" name="usuario" id="usuario" placeholder="Nombre de usuario" value={formData.usuario} onChange={handleChange} required />

          <label htmlFor="contrasena" className="sr-only">Contraseña</label>
          <input type="password" name="contrasena" id="contrasena" placeholder="Contraseña" value={formData.contrasena} onChange={handleChange} required />

          <button type="submit">Registrarse</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p>¿Ya estás registrado? - <a href="/">Iniciar sesión</a></p>
      </div>
    </main>
  );
};

export default RegisterForm;
