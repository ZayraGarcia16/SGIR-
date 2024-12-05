import { useState, useEffect } from "react";
import axios from "axios";
import "../paginas/css/crud.css";

function ComentariosCRUD() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState({
    nombreCompleto: "",
    valoracion: "",
    opinion: "",
  });
  const [comentarioEditando, setComentarioEditando] = useState(null);

  // Cargar comentarios al montar el componente
  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await axios.get("http://localhost:7700/api/comentarios");
        setComentarios(response.data);
      } catch (error) {
        console.error("Error al obtener comentarios:", error);
      }
    };
    fetchComentarios();
  }, []);

  // Agregar un nuevo comentario
  const agregarComentario = async () => {
    try {
      if (Object.values(nuevoComentario).some((field) => field === "")) {
        alert("Todos los campos son obligatorios.");
        return;
      }

      const response = await axios.post(
        "http://localhost:7700/api/comentarios",
        nuevoComentario
      );
      setComentarios([...comentarios, response.data]);
      setNuevoComentario({ nombreCompleto: "", valoracion: "", opinion: "" });
      alert("Comentario agregado correctamente");
    } catch (error) {
      console.error("Error al agregar comentario:", error);
      alert(`Error al agregar comentario: ${error.response?.data?.message || error.message}`);
    }
  };

  // Eliminar un comentario
  const eliminarComentario = async (id) => {
    try {
      await axios.delete(`http://localhost:7700/api/comentarios/${id}`);
      setComentarios(comentarios.filter((comentario) => comentario._id !== id));
      alert("Comentario eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar comentario:", error);
      alert(`Error al eliminar comentario: ${error.response?.data?.message || error.message}`);
    }
  };

  // Guardar cambios en la edición de un comentario
  const guardarEdicion = async () => {
    if (!comentarioEditando) return;

    const { _id, ...datosActualizar } = comentarioEditando; // Excluye _id

    try {
      const response = await axios.put(
        `http://localhost:7700/api/comentarios/${_id}`,
        datosActualizar
      );
      setComentarios(
        comentarios.map((comentario) =>
          comentario._id === _id ? response.data : comentario
        )
      );
      setComentarioEditando(null);
      alert("Comentario actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar comentario:", error);
      alert(`Error: ${error.response?.data?.message || "No se pudo actualizar el comentario."}`);
    }
  };

  // Iniciar la edición de un comentario
  const editarComentario = (comentario) => {
    setComentarioEditando(comentario);
  };

  // Cancelar la edición
  const cancelarEdicion = () => {
    setComentarioEditando(null);
  };

  return (
    <div>
      <h1>Gestión de Comentarios</h1>

      <div>
        <h3>{comentarioEditando ? "Editar Comentario" : "Agregar Comentario"}</h3>
        <input
          placeholder="Nombre Completo"
          value={comentarioEditando ? comentarioEditando.nombreCompleto : nuevoComentario.nombreCompleto}
          onChange={(e) =>
            comentarioEditando
              ? setComentarioEditando({ ...comentarioEditando, nombreCompleto: e.target.value })
              : setNuevoComentario({ ...nuevoComentario, nombreCompleto: e.target.value })
          }
        />
        <input
          placeholder="Valoración"
          type="number"
          value={comentarioEditando ? comentarioEditando.valoracion : nuevoComentario.valoracion}
          onChange={(e) =>
            comentarioEditando
              ? setComentarioEditando({ ...comentarioEditando, valoracion: e.target.value })
              : setNuevoComentario({ ...nuevoComentario, valoracion: e.target.value })
          }
        />
        <input
          placeholder="Opinión"
          value={comentarioEditando ? comentarioEditando.opinion : nuevoComentario.opinion}
          onChange={(e) =>
            comentarioEditando
              ? setComentarioEditando({ ...comentarioEditando, opinion: e.target.value })
              : setNuevoComentario({ ...nuevoComentario, opinion: e.target.value })
          }
        />

        {comentarioEditando ? (
          <>
            <button onClick={guardarEdicion}>Guardar Cambios</button>
            <button onClick={cancelarEdicion}>Cancelar</button>
          </>
        ) : (
          <button onClick={agregarComentario}>Agregar</button>
        )}
      </div>

      <h3 className="lista">Lista de Comentarios</h3>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario._id}>
            {comentario.nombreCompleto} - Valoración: {comentario.valoracion} - {comentario.opinion}
            <button onClick={() => editarComentario(comentario)}>Editar</button>
            <button onClick={() => eliminarComentario(comentario._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComentariosCRUD;

