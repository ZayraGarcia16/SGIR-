import mongoose from 'mongoose';

const reservaSchema = new mongoose.Schema({
    tipoDocumento: {
        type: String,
        enum: ['Tarjeta de Identidad', 'Cédula de Ciudadanía', 'Cédula de Extranjería', 'Pasaporte'],
        required: true
      },
      numeroDocumento: {
        type: Number,
        required: true
      },
      nombreCliente: {
        type: String,
        required: true
      },
      fechaSalida: {
        type: Date,
        required: true
      },
      fechaRegreso: {
        type: Date,
        required: true
      },
      destino: {
        type: String,
        required: true
      },
      numeroContacto: {
        type: String, // Asumiendo que es un número de teléfono
        required: true
      },
      correoElectronico: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ // Validación básica para correo electrónico
      },
      cantidadPersonas: {
        type: Number,
        default: 1 // El valor predeterminado es 1
      },
      alojamiento: {
        type: String,
        required: true
      },
      transporte: {
        type: String,
        required: true
      },
      precioTotal: {
        type: Number,
        required: true
      },
    estado: { 
        type: String, 
        enum: ['Confirmada', 'Cancelada','Reprogramada','Reembolsada',' Pendiente','No Presentado'], 
        required: true 
    },
}, 

{ collection: 'reservas' }); 
export default mongoose.model('reservas', reservaSchema);