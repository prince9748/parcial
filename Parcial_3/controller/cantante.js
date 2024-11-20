import { cantantemodel } from "../model/cantantemodel.js";

export const obtenerDatos = async (peticion, respuesta) => {
    try {
        let cantante = await cantantemodel.find()
        respuesta.status(200).render("index", { cantante })
    } catch (error) {
        console.log(error);
    }
}
export const crearDatos = async (peticion, respuesta) => {
    try {
        let data = peticion.body

        await cantante.create(data)

        let cantante = await cantantemodel.find()
        respuesta.status(200).render("index", {cantante})
    } catch (error) {
        console.log(error);
    }
}