import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();


const port = process.env.PORT || 7707;

const clientOptions={
    serverApi:{
      version:"1",
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
    console.error(`Ocurrió el siguiente error al conectarse: ${error.message}`);
  });

  export default port;