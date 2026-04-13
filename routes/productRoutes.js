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
const { validateProduct } = require('../validations/productValidation');
const { validateHandler } = require('../middleware/validateHandler');

router.route('/')
    .get(obtenerProductos)
    .post(protect, admin, validateProduct, validateHandler, crearProducto);

router.route('/:id')
    .get(obtenerProductoPorId)
    .put(protect, admin, validateProduct, validateHandler, editarProducto)
    .delete(protect, admin, borrarProducto);

module.exports = router;
