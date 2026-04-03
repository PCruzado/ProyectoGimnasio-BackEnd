const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: [0, 'El precio no puede ser negativo']
    },
    categoria: {
        type: String,
        enum: ['Suplementos', 'Indumentaria', 'Accesorios', 'Equipamiento'], 
        default: 'Accesorios'
    },
    stock: {
        type: Number,
        default: 0
    },
    imagenUrl: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productoSchema);