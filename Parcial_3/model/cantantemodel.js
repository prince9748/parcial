import mongoose, { Schema } from "mongoose";

const cantanteSchema = new Schema({
    artista: String,
    genero: String,
    pais: String
})

export const modelocantante = new mongoose.model('Cantante', cantanteSchema)