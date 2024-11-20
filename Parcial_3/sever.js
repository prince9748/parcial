import { config } from "dotenv";
import express from "express";
import { connectDatabase } from "./config/database.js";
import userRoutes from "./routes/cantanterutas.js";
import { cantantemodel } from "./model/cantantemodel.js";
import { coleccionmodel } from "./model/coleccionmodel.js";



config();


connectDatabase()
  .then(() => {
    console.log("Conexión Base de Datos Exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar a la Base de Datos:", error);
    process.exit(1);
  });


const server = express();
const PORT = process.env.PORT || 3000;
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));


server.use(express.json());


server.get("/", async (req, res) => {
  try {
    const artista = await cantantemodel.find(); 
    res.render("index", { artista }); 
  } catch (error) {
    console.error("Error al obtener los artista:", error);
    res.status(500).send("Error al obtener los artista");
  }
});

server.use(cantanterutas);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));