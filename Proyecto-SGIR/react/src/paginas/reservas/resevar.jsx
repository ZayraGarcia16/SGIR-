import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservaCrud = () => {
  // Estado para manejar los datos del formulario y las reservas
  const [reservas, setReservas] = useState([]);
  const [formData, setFormData] = useState({
    tipoDocumento: '',
    numeroDocumento: '',
    cliente: '',
    fechaSalida: '',
    fechaRegreso: '',
    destino: '',
    hotel: '',
    paquete: '',
    excursion: '',
    numeroContacto: '',
    cantidadPersonas: 1,
    alojamiento: '',
    transporte: '',
    precioTotal: '',
    estado: 'Pendiente',
  });

  const [editingReserva, setEditingReserva] = useState(null); // Para editar una reserva existente

  // Obtener todas las reservas
  const fetchReservas = async () => {
    try {
      const response = await axios.get('http://localhost:7700/api/reservas'); // Ajusta la URL a tu API
      setReservas(response.data);
    } catch (error) {
      console.error('Error al obtener las reservas:', error);
    }
  };

  // Función para manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar la creación o actualización de la reserva
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingReserva) {
        // Si estamos editando una reserva, actualizamos
        await axios.put(`http://localhost:7700/api/reservas/${editingReserva._id}`, formData);
        alert('Reserva actualizada con éxito');
      } else {
        // Si no estamos editando, creamos una nueva reserva
        await axios.post('http://localhost:7700/api/reservas', formData);  // Este es el POST para crear una nueva reserva
        alert('Reserva creada con éxito');
      }
      // Limpiar formulario y recargar la lista
      setFormData({
        tipoDocumento: '',
        numeroDocumento: '',
        cliente: '',
        fechaSalida: '',
        fechaRegreso: '',
        destino: '',
        hotel: '',
        paquete: '',
        excursion: '',
        numeroContacto: '',
        cantidadPersonas: 1,
        alojamiento: '',
        transporte: '',
        precioTotal: '',
        estado: 'Pendiente',
      });
      setEditingReserva(null);
      fetchReservas(); // Recargar las reservas
    } catch (error) {
      console.error('Error al guardar la reserva:', error);
    }
  };

  // Función para manejar la eliminación de una reserva
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7700/api/reservas/${id}`);
      alert('Reserva eliminada');
      fetchReservas(); // Recargar las reservas
    } catch (error) {
      console.error('Error al eliminar la reserva:', error);
    }
  };

  // Función para manejar la edición de una reserva
  const handleEdit = (reserva) => {
    setFormData(reserva);
    setEditingReserva(reserva);
  };

  // Cargar las reservas cuando el componente se monte
  useEffect(() => {
    fetchReservas();
  }, []);

  return (
    <div>
      <h1>Formulario y CRUD de Reservas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="tipoDocumento"
          placeholder="Tipo de Documento"
          value={formData.tipoDocumento}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="numeroDocumento"
          placeholder="Número de Documento"
          value={formData.numeroDocumento}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cliente"
          placeholder="ID del Cliente"
          value={formData.cliente}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="fechaSalida"
          value={formData.fechaSalida}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="fechaRegreso"
          value={formData.fechaRegreso}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="destino"
          placeholder="Destino"
          value={formData.destino}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="hotel"
          placeholder="ID del Hotel"
          value={formData.hotel}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="paquete"
          placeholder="ID del Paquete"
          value={formData.paquete}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="excursion"
          placeholder="ID de la Excursión"
          value={formData.excursion}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="numeroContacto"
          placeholder="Número de Contacto"
          value={formData.numeroContacto}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="cantidadPersonas"
          placeholder="Cantidad de Personas"
          value={formData.cantidadPersonas}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="alojamiento"
          placeholder="Alojamiento"
          value={formData.alojamiento}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="transporte"
          placeholder="Transporte"
          value={formData.transporte}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="precioTotal"
          placeholder="Precio Total"
          value={formData.precioTotal}
          onChange={handleChange}
          required
        />
        <select
          name="estado"
          value={formData.estado}
          onChange={handleChange}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Confirmada">Confirmada</option>
          <option value="Cancelada">Cancelada</option>
          <option value="Reprogramada">Reprogramada</option>
          <option value="Reembolsada">Reembolsada</option>
          <option value="No Presentado">No Presentado</option>
        </select>
        <button type="submit">{editingReserva ? 'Actualizar Reserva' : 'Crear Reserva'}</button>
      </form>

      <h2>Lista de Reservas</h2>
      <ul>
        {reservas.map((reserva) => (
          <li key={reserva._id}>
            <p>{reserva.destino} - {reserva.fechaSalida}</p>
            <button onClick={() => handleEdit(reserva)}>Editar</button>
            <button onClick={() => handleDelete(reserva._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservaCrud;
