import { required, string } from "joi";
import mongoose from "mongoose";

export const rolSchema = new mongoose.Schema({
    nombre: {
        type: string,
        required: true,
        unique: true,
    },
});

export default mongoose.model("Rol", rolSchema);