import Joi from "joi";

// Validación para el campo "id"
const id = Joi.string()
  .pattern(/^[0-9a-fA-F]{24}$/)
  .required()
  .messages({
    "string.pattern.base":
      "El campo ID debe ser un ObjectId válido de 24 caracteres hexadecimales.",
    "any.required": "El campo ID es requerido.",
  });

// Validación para "nombre" y "apellido"
const nombre = Joi.string()
  .min(3)
  .max(90)
  .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/)
  .required()
  .messages({
    "string.base": "El nombre debe ser un texto.",
    "string.empty": "El nombre no puede estar vacío.",
    "string.min": "El nombre debe tener al menos 3 caracteres.",
    "string.max": "El nombre no puede exceder los 90 caracteres.",
    "string.pattern.base": "El nombre solo puede contener letras y espacios.",
    "any.required": "El nombre es un campo requerido.",
  });

const apellido = Joi.string()
  .min(3)
  .max(90)
  .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/)
  .required()
  .messages({
    "string.base": "El apellido debe ser un texto.",
    "string.empty": "El apellido no puede estar vacío.",
    "string.min": "El apellido debe tener al menos 3 caracteres.",
    "string.max": "El apellido no puede exceder los 90 caracteres.",
    "string.pattern.base": "El apellido solo puede contener letras y espacios.",
    "any.required": "El apellido es un campo requerido.",
  });

// Validación para "correo"
const correo = Joi.string()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    "string.email": "Debe ser un correo electrónico válido.",
    "any.required": "El correo es un campo requerido.",
  });

// Validación para "usuario"
const usuario = Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required()
  .messages({
    "string.base": "El usuario debe ser un texto.",
    "string.empty": "El usuario no puede estar vacío.",
    "string.alphanum": "El usuario solo puede contener letras y números.",
    "string.min": "El usuario debe tener al menos 3 caracteres.",
    "string.max": "El usuario no puede exceder los 30 caracteres.",
    "any.required": "El usuario es un campo requerido.",
  });

// Validación para "contrasena"
const contrasena = Joi.string()
  .min(8)
  .required()
  .messages({
    "string.base": "La contraseña debe ser un texto.",
    "string.empty": "La contraseña no puede estar vacía.",
    "string.min": "La contraseña debe tener al menos 8 caracteres.",
    "any.required": "La contraseña es un campo requerido.",
  });

// Validación para "token"
const token = Joi.string()
  .required()
  .messages({
    "string.base": "El token debe ser un texto.",
    "string.empty": "El token no puede estar vacío.",
    "any.required": "El token es un campo requerido.",
  });

// Schemas de validación
const createClienteSchema = Joi.object({
  nombre,
  apellido,
  correo,
  usuario,
  contrasena,
  token,
});

const updateClienteSchema = Joi.object({
  nombre: nombre.optional(),
  apellido: apellido.optional(),
  correo: correo.optional(),
  usuario: usuario.optional(),
  contrasena: contrasena.optional(),
  token: token.optional(),
});

const getClienteSchema = Joi.object({
  id,
});

const deleteClienteSchema = Joi.object({
  id,
});

export { createClienteSchema, updateClienteSchema, getClienteSchema, deleteClienteSchema };
