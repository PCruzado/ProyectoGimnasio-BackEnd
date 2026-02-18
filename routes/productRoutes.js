const express = require('express');
const router = express.Router();
const {
    obtenerProductos,
    crearProducto,
    obtenerProductoPorId,
    editarProducto,
    borrarProducto
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .get(obtenerProductos)
    .post(protect, admin, crearProducto);

router.route('/:id')
    .get(obtenerProductoPorId)
    .put(protect, admin, editarProducto)
    .delete(protect, admin, borrarProducto);

module.exports = router;
