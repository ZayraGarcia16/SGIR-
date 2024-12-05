import mongoose from 'mongoose';


const hotelSchema = new mongoose.Schema({
    nombre: {
         type: String, 
         required: true 
    },
    ubicacion: {
         type: String, 
         required: true 
    },
    numeroHabitaciones: {
         type: Number,
         required: true 
    },
    numeroPersonas: {
         type: Number, 
         required: true 
    },
    comida: { 
        type: String, 
        required: true 
    },
    precio: { 
        type: Number, 
        required: true 
    },
    categoria: { 
        type: String, 
        enum: ['baja', 'media'], 
        required: true 
     },
     
}, 

{ collection: 'hoteles' }); 
export default mongoose.model('hoteles', hotelSchema);