import mongoose from "mongoose";
const { Schema, model } = mongoose;

const instrumentoSchema = new Schema({

    serieProducto: {
        type: String,
        required: true,

    },
    marca: {
        
        type: String,
        required: true,

    },
    codigo: {
        
        type: String,
        required: true,

    },
    nombre: {
        type: String,
        required: true,

    },
    serie: {
        type: Array,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
    
});

export const Instrumento = model('Instrumento', instrumentoSchema);