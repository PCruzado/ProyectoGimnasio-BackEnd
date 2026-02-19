const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
        trim: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: 0
    },
    categoria: {
        type: String,
        required: [true, 'La categoría es obligatoria'],
        enum: ['Musculación', 'Clases', 'Ropa', 'Suplementos']
    },
    stock: {
        type: Number,
        default: 0
    },
    imagen: {
        type: String,
        default: 'https://via.placeholder.com/150'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);