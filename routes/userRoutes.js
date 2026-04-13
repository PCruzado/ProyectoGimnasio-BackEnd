const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario, obtenerUsuarios, actualizarRolUsuario } = require('../controllers/userController');
const { protect, admin, superAdmin } = require('../middleware/authMiddleware');
const { validateRegister, validateLogin } = require('../validations/userValidation');
const { validateHandler } = require('../middleware/validateHandler');

router.post('/registro', validateRegister, validateHandler, registrarUsuario);
router.post('/login', validateLogin, validateHandler, loginUsuario);
router.get('/', protect, admin, obtenerUsuarios);
router.put('/:id/rol', protect, superAdmin, actualizarRolUsuario);
module.exports = router;