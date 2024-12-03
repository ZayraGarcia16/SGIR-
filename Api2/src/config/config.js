import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); 

const port = process.env.PORT || 9002;

const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

mongoose
  .connect(process.env.MONGODB_URI, clientOptions)
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.error(`Error al conectarse a MongoDB: ${error.message}`);
  });

export default port;