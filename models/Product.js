const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
        trim: true
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: 0
    },
    categoria: {
        type: String,
        required: [true, 'La categoría es obligatoria'],
        trim: true
    },
    
    imagen: {
        type: String,
        default: 'https://via.placeholder.com/150'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);