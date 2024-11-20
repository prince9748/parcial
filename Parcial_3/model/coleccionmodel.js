import mongoose, { Schema } from "mongoose";

const coleccionSchema = new Schema({
    album: String,
    artista: String,
    año: String
})

export const coleccioncantante = new mongoose.model('Coleccion', coleccionSchema)