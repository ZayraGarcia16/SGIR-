import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido:{
        type: String,
        required: true,
    },
   correo:{
      type: String,
      required: true,
   },
   usuario:{
    type: String,
    required: true,
   },
   contrasena:{
    type: String,
    required: true,
   },
   token:{
    type: String,
    required: true,
   }

});

export default mongoose.model("clientes", clienteSchema);
