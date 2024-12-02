import Joi from "joi";

// Creamos las validaciones para cada campo del cliente
const nombre = Joi.string()
  .min(3)
  .max(180)
  .required()
  .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/)
  .messages({
    "string.base": "El nombre debe ser un texto.",
    "string.empty": "El nombre no puede estar vacío.",
    "string.min": "El nombre debe tener al menos 3 caracteres.",
    "string.max": "El nombre no puede exceder los 180 caracteres.",
    "string.pattern.base": "El nombre solo puede contener letras y espacios.",
    "any.required": "El nombre es un campo requerido.",
  });

const apellido = Joi.string()
  .min(3)
  .max(180)
  .required()
  .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/)
  .messages({
    "string.base": "El apellido debe ser un texto.",
    "string.empty": "El apellido no puede estar vacío.",
    "string.min": "El apellido debe tener al menos 3 caracteres.",
    "string.max": "El apellido no puede exceder los 180 caracteres.",
    "string.pattern.base": "El apellido solo puede contener letras y espacios.",
    "any.required": "El apellido es un campo requerido.",
  });

const correo = Joi.string()
  .email()
  .required()
  .messages({
    "string.base": "El correo debe ser un texto.",
    "string.empty": "El correo no puede estar vacío.",
    "string.email": "El correo debe tener un formato válido.",
    "any.required": "El correo es un campo requerido.",
  });

const usuario = Joi.string()
  .min(3)
  .max(100)
  .required()
  .messages({
    "string.base": "El usuario debe ser un texto.",
    "string.empty": "El usuario no puede estar vacío.",
    "string.min": "El usuario debe tener al menos 3 caracteres.",
    "string.max": "El usuario no puede exceder los 100 caracteres.",
    "any.required": "El usuario es un campo requerido.",
  });

const contrasena = Joi.string()
  .min(6)
  .required()
  .messages({
    "string.base": "La contraseña debe ser un texto.",
    "string.empty": "La contraseña no puede estar vacía.",
    "string.min": "La contraseña debe tener al menos 6 caracteres.",
    "any.required": "La contraseña es un campo requerido.",
  });

// Esquemas de validación
const createClienteSchema = Joi.object({
  nombre: nombre,
  apellido: apellido,
  correo: correo,
  usuario: usuario,
  contrasena: contrasena,
}).unknown(); // Permite campos desconocidos como __v.

const updateClienteSchema = Joi.object({
  nombre: nombre,
  apellido: apellido,
  correo: correo,
  usuario: usuario,
  contrasena: contrasena,
}).unknown(); // Permite campos desconocidos como __v.

const getClienteSchema = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "string.pattern.base": "El campo ID debe ser un ObjectId válido de 24 caracteres hexadecimales.",
      "any.required": "El campo ID es requerido.",
    }),
}).unknown();

const deleteClienteSchema = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "string.pattern.base": "El campo ID debe ser un ObjectId válido de 24 caracteres hexadecimales.",
      "any.required": "El campo ID es requerido.",
    }),
}).unknown();

export {
  createClienteSchema,
  updateClienteSchema,
  getClienteSchema,
  deleteClienteSchema,
};

