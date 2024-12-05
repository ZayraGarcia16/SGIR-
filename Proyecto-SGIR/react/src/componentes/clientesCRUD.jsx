import { useState, useEffect } from "react";
import axios from "axios";
import "../paginas/css/crud.css";

function ClientesCRUD() {
  const [clientes, setClientes] = useState([]);
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    usuario: "",
    contrasena: ""
  });
  const [clienteEditando, setClienteEditando] = useState(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get("http://localhost:7700/api/clientes");
        setClientes(response.data);
      } catch (error) {
        console.error("Error al obtener clientes:", error);
      }
    };
    fetchClientes();
  }, []);

  const agregarCliente = async () => {
    try {
      if (Object.values(nuevoCliente).some(field => field === "")) {
        alert("Todos los campos son obligatorios.");
        return;
      }

      const response = await axios.post("http://localhost:7700/api/clientes", nuevoCliente);
      setClientes([...clientes, response.data]);
      setNuevoCliente({ nombre: "", apellido: "", correo: "", usuario: "", contrasena: "" });
      alert("Cliente agregado correctamente");
    } catch (error) {
      console.error("Error al agregar cliente:", error);
      alert(`Error al agregar cliente: ${error.response?.data?.message || error.message}`);
    }
  };

  const eliminarCliente = async (id) => {
    try {
      await axios.delete(`http://localhost:7700/api/clientes/${id}`);
      setClientes(clientes.filter((cliente) => cliente._id !== id));
      alert("Cliente eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
      alert(`Error al eliminar cliente: ${error.response?.data?.message || error.message}`);
    }
  };

  const guardarEdicion = async () => {
    if (!clienteEditando) return;

    const { _id, ...datosActualizar } = clienteEditando;

    try {
      const response = await axios.put(`http://localhost:7700/api/clientes/${_id}`, datosActualizar);
      setClientes(clientes.map((cliente) => (cliente._id === _id ? response.data : cliente)));
      setClienteEditando(null);
      alert("Cliente actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar cliente:", error.response?.data || error.message);
      alert(`Error: ${error.response?.data?.message || "No se pudo actualizar el cliente."}`);
    }
  };

  const editarCliente = (cliente) => {
    setClienteEditando(cliente);
  };

  const cancelarEdicion = () => {
    setClienteEditando(null);
  };

  return (
    <div>
      <h1>Gestión de Clientes</h1>

      <div className="form-container">
        <h3>{clienteEditando ? "Editar Cliente" : "Agregar Cliente"}</h3>
        <input
          placeholder="Nombre"
          value={clienteEditando ? clienteEditando.nombre : nuevoCliente.nombre}
          onChange={(e) =>
            clienteEditando
              ? setClienteEditando({ ...clienteEditando, nombre: e.target.value })
              : setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })
          }
        />
        <input
          placeholder="Apellido"
          value={clienteEditando ? clienteEditando.apellido : nuevoCliente.apellido}
          onChange={(e) =>
            clienteEditando
              ? setClienteEditando({ ...clienteEditando, apellido: e.target.value })
              : setNuevoCliente({ ...nuevoCliente, apellido: e.target.value })
          }
        />
        <input
          placeholder="Correo"
          value={clienteEditando ? clienteEditando.correo : nuevoCliente.correo}
          onChange={(e) =>
            clienteEditando
              ? setClienteEditando({ ...clienteEditando, correo: e.target.value })
              : setNuevoCliente({ ...nuevoCliente, correo: e.target.value })
          }
        />
        <input
          placeholder="Usuario"
          value={clienteEditando ? clienteEditando.usuario : nuevoCliente.usuario}
          onChange={(e) =>
            clienteEditando
              ? setClienteEditando({ ...clienteEditando, usuario: e.target.value })
              : setNuevoCliente({ ...nuevoCliente, usuario: e.target.value })
          }
        />
        <input
          placeholder="Contraseña"
          type="password"
          value={clienteEditando ? clienteEditando.contrasena : nuevoCliente.contrasena}
          onChange={(e) =>
            clienteEditando
              ? setClienteEditando({ ...clienteEditando, contrasena: e.target.value })
              : setNuevoCliente({ ...nuevoCliente, contrasena: e.target.value })
          }
        />

        {clienteEditando ? (
          <>
            <button onClick={guardarEdicion}>Guardar Cambios</button>
            <button onClick={cancelarEdicion}>Cancelar</button>
          </>
        ) : (
          <button onClick={agregarCliente}>Agregar</button>
        )}
      </div>

      <h3>Lista de Clientes</h3>
      <ul className="clientes-lista">
        {clientes.map((cliente) => (
          <li key={cliente._id} className="cliente-item">
            {cliente.nombre} {cliente.apellido} - {cliente.correo} ({cliente.usuario})
            <button onClick={() => editarCliente(cliente)} className="btn-editar">
              Editar
            </button>
            <button onClick={() => eliminarCliente(cliente._id)} className="btn-eliminar">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientesCRUD;
