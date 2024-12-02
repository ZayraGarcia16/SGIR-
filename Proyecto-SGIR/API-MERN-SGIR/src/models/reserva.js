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
  },
  hoteles: [{ type: Schema.Types.ObjectId, ref: 'hoteles', required: true }] ,
  paquetes: [{ type: Schema.Types.ObjectId, ref: 'Paquete', required: true }],
  
}, 
{ collection: 'reservas' });

export default mongoose.model('reservas', reservaSchema);
