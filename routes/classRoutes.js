const express = require('express');
const router = express.Router();
const { 
    obtenerClases, 
    crearClase, 
    obtenerClasePorId, 
    editarClase, 
    borrarClase 
} = require('../controllers/classController');
const { protect, admin } = require('../middleware/authMiddleware'); 


router.route('/')
    .get(obtenerClases) 
    .post(protect, admin, crearClase); 

router.route('/:id')
    .get(obtenerClasePorId)
    .put(protect, admin, editarClase) 
    .delete(protect, admin, borrarClase); 

module.exports = router;