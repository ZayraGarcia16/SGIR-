import mongoose from "mongoose";

const port = process.env.PORT || 7700;

import dotenv from "dotenv";
dotenv.config();

mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log(`Conectado a MONGODB.`);
})
.catch((error) => {
    console.log(`Ocurrio un error al conectarse: ${error.message}.`);
    
});

export default port;