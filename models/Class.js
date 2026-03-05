const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    nombreClase: { 
        type: String, 
        required: [true, 'El nombre de la clase es obligatorio'],
        trim: true 
    },
    profesor: { 
        type: String, 
        required: [true, 'El nombre del profesor es obligatorio'] 
    },
    descripcion: { 
        type: String 
    },
    horario: { 
        type: String, 
        required: [true, 'El horario es obligatorio'] 
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es obligatoria']
    },
    capacidadMax: {
        type: Number,
        default: 20
    },
    usuariosInscriptos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }]
}, {
    timestamps: true 
});

module.exports = mongoose.model('Class', classSchema); 