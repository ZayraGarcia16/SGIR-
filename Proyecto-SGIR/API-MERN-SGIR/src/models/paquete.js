

import mongoose from "mongoose";

const PaqueteSchema = new mongoose.Schema({

  destino: { 
    type: String, 
    required: true 
  },
  actividad: { 
     type: String,
     required: true
     },
  numeroPersonas: {
     type: Number, 
     required: true 
    },
  categoria: { 
    type: String, 
    enum: ['paquete1', 'paquete2', 'paquete3'],
    required: true
   },
  precio: { 
    type: Number,
     required: true
     },
  transporte:
   { type: String, 
    required: true 
  },
  comida: 
  { type: String,
     required: true 
    },
});

export default mongoose.model("Paquete", PaqueteSchema);
