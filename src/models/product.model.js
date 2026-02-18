const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    categoria: {
        type: String,
        enum: ['Suplementos', 'Ropa', 'Accesorios']
    },
    stock: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Product', productoSchema);
