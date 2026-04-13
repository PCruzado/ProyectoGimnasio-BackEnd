const express = require('express');
const router = express.Router();
const { 
    obtenerClases, 
    crearClase, 
    obtenerClasePorId, 
    editarClase, 
    borrarClase,
    inscribirUsuario
} = require('../controllers/classController');
const { protect, admin } = require('../middleware/authMiddleware'); 
const { validateClass } = require('../validations/classValidation');
const { validateHandler } = require('../middleware/validateHandler');

router.route('/')
    .get(obtenerClases) 
    .post(protect, admin, validateClass, validateHandler, crearClase); 

router.post('/:id/inscribir', protect, inscribirUsuario);

router.route('/:id')
    .get(obtenerClasePorId)
    .put(protect, admin, validateClass, validateHandler, editarClase) 
    .delete(protect, admin, borrarClase); 

module.exports = router;