import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  nombreCompleto: 
  { type: String, 
    required: true 
  },
  correo: { 
    type: String,
     required: true,
      unique: true 
    },
  nit: {
     type: String,
      required: true, 
      unique: true 
    },
  contraseña: {
    type: String,
     required: true 
    },
},
{ versionKey: false  }
)

export default mongoose.model("Admin", AdminSchema);
