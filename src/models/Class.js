import mongoose, { Schema } from "mongoose";

const classSchema = new Schema({
    DetalleDeLaClase:{},
    Profesor:{},
    Fecha:{},
    Hora:{}
})

const Classes = mongoose.model('class', classSchema)

export default Classes