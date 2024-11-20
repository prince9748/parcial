import { coleccion } from "../model/coleccionmodel.js";

export const obtenerDatos = async (peticion, respuesta) => {
    try {
        let coleccion = await coleccion.find()
        respuesta.status(200).render("index", { coleccion })
    } catch (error) {
        console.log(error);
    }
}
export const crearDatos = async (peticion, respuesta) => {
    try {
        let data = peticion.body

        await coleccion.create(data)

        let coleccion = await coleccion.find()
        respuesta.status(200).render("index", {cantante})
    } catch (error) {
        console.log(error);
    }
}


app.delete("/album/artista:", async (req, res) => {
    try {
        const { album } = req.params; 
        const albumEliminado = await album.findalbumAndDelete(album); 
        if (!albumEliminado) {
            return res.status(404).json({ error: "album no encontrado" });
        }

        res.status(200).json({ message: "album eliminado", data: cantanteEliminado });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar album" });
    }
});


  app.put("/coleciion/:artista", async (req, res) => {
    try {
        const { artista } = req.params; 
        const artistaActualizado = await artista.findByartistaAndUpdate(artista, req.body, { new: true });

        if (!artistaActualizado) {
            return res.status(404).json({ error: "artista no encontrado" });
        }

        res.status(200).json({ message: "artista actualizado", data: artistaActualizado });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el artista" });
    }
});