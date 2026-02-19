const Product = require('../models/Product');

const obtenerProductos = async (req, res) => {
    try {
        const productos = await Product.find({});
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener productos', error: error.message });
    }
};

const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await Product.create(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear el producto', error: error.message });
    }
};

const editarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const productoActualizado = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!productoActualizado) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.status(200).json(productoActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el producto', error: error.message });
    }
};

const borrarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const productoBorrado = await Product.findByIdAndDelete(id);

        if (!productoBorrado) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.status(200).json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el producto', error: error.message });
    }
};

module.exports = {
    obtenerProductos,
    crearProducto,
    editarProducto,
    borrarProducto
};