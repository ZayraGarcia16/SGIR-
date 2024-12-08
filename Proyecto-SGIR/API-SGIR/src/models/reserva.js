import mongoose, { Schema } from 'mongoose';

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
  cliente: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente", 
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
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel" 
  },
  paquete: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paquete"
  },
  excursion: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Excursion"
  },
  numeroContacto: {
    type: String,
    required: true
  },
  cantidadPersonas: {
    type: Number,
    default: 1
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
    enum: ['Confirmada', 'Cancelada', 'Reprogramada', 'Reembolsada', 'Pendiente', 'No Presentado'],
    required: true
  }
}, 
{ collection: 'reservas' });

export default mongoose.model('Reserva', reservaSchema);