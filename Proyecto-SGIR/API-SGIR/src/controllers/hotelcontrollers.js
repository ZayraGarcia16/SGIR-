import Hotel from "../models/hotel.js";
import{ validatorHandler} from "../middleware/validator.handler.js"
import {createHotelSchema,updateHotelSchema,getHotelSchema,deleteHotelSchema} from "../validators/hotelvalidatorDTO.js";

export const createHotel = [
    validatorHandler(createHotelSchema, "body"),
    async (req, res) => {
     const hotel = new Hotel(req.body); 
     await hotel
        .save()
        .then((data) => res.status(201).json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
},
];

export const getHotels = (req, resp) => {
    Hotel
        .find()
        .then((data) => resp.json(data))
        .catch((error) => resp.json({ message: error.message }));
};

export const getHotelById = [
    validatorHandler(getHotelSchema, "params"),
    async(req, resp)=>{
        const { id } = req.params;
        try{
            const hotel = await Hotel.findById(id);
            if(!hotel){
                return resp.status(404).json({
                    message: "usuario no encontrado",
                });
            }
            resp.json(hotel);
        }catch (error) {
            resp.status(500).json({
                message: error.message,
            });
        }
   }
];

;
  

 export const updateHotel =[
        validatorHandler(getHotelSchema, "params"),
        validatorHandler(updateHotelSchema, "body"),
        async(req, resp) => {
            const { id } = req.params;
            const { nombre, ubicacion, numeroHabitaciones, numeroPersonas, comida, precio, categoria } = req.body; 
            try{
                const hotelUpdate = await Hotel.updateOne(
                    { _id: id },
                    { $set: { nombre, ubicacion, numeroHabitaciones, numeroPersonas, comida, precio, categoria } }
                );
                if (hotelUpdate.matchedCount === 0) {
                    return resp.status(404).json({ message: "Usuario no encontrado" });
                }
                if (hotelUpdate.modifiedCount === 0) {
                    return resp.status(400).json({ message: "No se realizaron cambios" });
                }
                resp.status(200).json({ message: "Usuario actualizado correctamente" });
                } catch (error) {
                resp.status(500).json({ message: error.message });
            }
        },
    ];
    


export const deleteHotel = [
    validatorHandler(deleteHotelSchema, "params"),
    async (req, resp) => {
        const { id } = req.params;
        try {
            const result = Hotel.deleteOne({ _id: id });
            if (result.deletedCount === 0) {
              resp.status(404).json({ message: "Usuario no encontrado" });
            }
            resp.status(200).json({ message: "Usuario eliminado correctamente" });
          } catch (error) {
            resp.status(500).json({ message: error.message });
        }
    },
];
