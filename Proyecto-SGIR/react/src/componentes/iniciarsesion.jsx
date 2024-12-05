import React, { useState } from 'react';
import axios from 'axios';
import "../paginas/css/registro.css"
const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    usuario: '',
    contrasena: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9001/clientes', credentials);
      setSuccess(response.data.message);
      setError('');
    } catch (err) {
      setError('Credenciales inválidas. Inténtalo de nuevo.');
      setSuccess('');
    }
  };

  return (
    <main>
      <div className="form-container">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          {/* Usuario */}
          <label htmlFor="usuario" className="sr-only">Usuario</label>
          <input
            type="text"
            name="usuario"
            id="usuario"
            placeholder="Nombre de usuario"
            value={credentials.usuario}
            onChange={handleChange}
            required
          />

          {/* Contraseña */}
          <label htmlFor="contrasena" className="sr-only">Contraseña</label>
          <input
            type="password"
            name="contrasena"
            id="contrasena"
            placeholder="Contraseña"
            value={credentials.contrasena}
            onChange={handleChange}
            required
          />

          <button type="submit">Iniciar Sesión</button>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </main>
  );
};

export default LoginForm;
