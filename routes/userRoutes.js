const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario, obtenerUsuarios, obtenerPerfil, actualizarRolUsuario } = require('../controllers/userController');
const { protect, admin, superAdmin } = require('../middleware/authMiddleware');

router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);
router.get('/', protect, admin, obtenerUsuarios);
router.put('/:id/rol', protect, superAdmin, actualizarRolUsuario);
module.exports = router;