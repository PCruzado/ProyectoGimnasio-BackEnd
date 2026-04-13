const { body } = require('express-validator');

const validateRegister = [
  body('nombre').isString().notEmpty().withMessage('El nombre es obligatorio'),
  body('apellido').isString().notEmpty().withMessage('El apellido es obligatorio'),
  body('email').isEmail().withMessage('Ingresa un correo electrónico válido'),
  body('contrasena')
    .isString()
    .isLength({ min: 8, max: 30 }).withMessage('La contraseña debe tener entre 8 y 30 caracteres')
    .matches(/\d/).withMessage('La contraseña debe contener al menos un número')
    .matches(/[A-Z]/).withMessage('La contraseña debe contener al menos una letra mayúscula')
];

const validateLogin = [
  body('email').isEmail().withMessage('Ingresa un correo electrónico válido'),
  body('contrasena').notEmpty().withMessage('La contraseña es obligatoria')
];

module.exports = {
  validateRegister,
  validateLogin
};
