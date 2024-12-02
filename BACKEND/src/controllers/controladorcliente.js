
import clienteSchema from "../models/cliente.js";
import { validatorHandler } from "../midleware/validator.handler.js";
import {
    createClienteSchema, updateClienteSchema, getClienteSchema, deleteClienteSchema
  } from "../validators/clientesValidatorsDTO.js";
  

export const crearcliente = [
    validatorHandler(createClienteSchema, "body"),
    async (req, res) => {
      const cliente = new clienteSchema(req.body);
      await cliente
        .save()
        .then((data) => res.status(201).json(data)) // Cambio el código de estado a 201 para indicar que se creó un nuevo recurso
        .catch((error) => res.status(500).json({ message: error.message })); // Asegúrate de enviar `error.message` para obtener un mensaje más claro
    },
  ];

export const obtenercliente = (req, resp) => {
    clienteSchema
    .find()
    .then((data) => resp.json(data))
    .catch((error) => resp.json({ message: error.message }));  // Corregido: enviar 'error.message'
};



export const consultarcliente = [
    validatorHandler(clienteSchema, "params"),
    async (req, resp) => {
      const { id } = req.params;
      try {
        const cliente = await clienteSchema.findById(id); //Metodo usado para buscar un documento de una coleccion
        if (!cliente) {
          return resp.status(404).json({
            message: "cliente no encontrado",
          });
        }
        resp.json(cliente);
      } catch (error) {
        resp.status(500).json({
          message: error.message,
        });
      }
    },
  ];


  
  export const actualizarcliente = [
    validatorHandler(getClienteSchema, "params"),
    validatorHandler(updateClienteSchema, "body"),
    async (req, resp) => {
      const { id } = req.params;
      const { nombre, apellido, correo, usuario, contrasena,  } = req.body;
  
      try {
        // Obtener el cliente actual
        const obtenercliente = await clienteSchema.findById(id);
        if (!obtenercliente) {
          return resp.status(404).json({ message: "Cliente no encontrado" });
        }
  
        // Actualizar el cliente
        const actualizarcliente = await clienteSchema.updateOne(
          { _id: id },
          { $set: { nombre, apellido, correo, usuario, contrasena, } }
        );
  
        if (actualizarcliente.matchedCount === 0) {
          return resp.status(404).json({ message: "Cliente no encontrado" });
        }
  
        if (actualizarcliente.modifiedCount === 0) {
          return resp.status(400).json({ message: "No se realizaron cambios en el cliente" });
        }
  
        resp.status(200).json({ message: "Cliente actualizado correctamente" });
      } catch (error) {
        resp.status(500).json({ message: error.message });
      }
    },
  ];
  




  export const borrarcliente = [
    validatorHandler(deleteClienteSchema, "params"), // Valida los parámetros (id)
    async (req, resp) => {
      const { id } = req.params; // Extrae el id de los parámetros
      try {
        const result = await clienteSchema.deleteOne({ _id: id }); // Elimina el cliente con el id proporcionado
        if (result.deletedCount === 0) { // Verifica si se eliminó un documento
          return resp.status(404).json({ message: "Cliente no encontrado" }); // Cliente no encontrado
        }
        resp.status(200).json({ message: "Cliente eliminado correctamente" }); // Cliente eliminado
      } catch (error) {
        resp.status(500).json({ message: error.message }); // Manejo de errores
      }
    },
  ];
  