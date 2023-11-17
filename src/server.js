import express from "express";
import { juegosRouter } from "./routes/videojuegos.ruta.js";
import { usuariosRouter } from "./routes/usuarios.ruta.js";

const port = 8080;
const app = express();

//MIDDLEWARES
app.use(express.json());

app.listen(port, () => console.log("Servidor Fucionando"));

app.use("/api/videojuegos", juegosRouter);
app.use("/api/usuario", usuariosRouter);

//CADA CAPA VA A ESTAR REPRESENTADA POR LOS NOMBRES DE LAS CARPETAS DENTRO DE SRC (codigo fuente)
//CARPETA DAO = CARPETA PERSISTENCE
