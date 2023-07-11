import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/categorias", categoriasRouter);

const PORT = process.env.PORT

conectarDB();

app.listen(PORT, ()=>{
    console.log(`El server esta corriendo en el puerto ${PORT}`);
});

