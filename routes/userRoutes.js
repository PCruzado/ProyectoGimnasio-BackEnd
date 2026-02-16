const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario, obtenerUsuarios } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);
router.get('/', protect, admin, obtenerUsuarios);
module.exports = router;