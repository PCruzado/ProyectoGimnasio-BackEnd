const { body } = require('express-validator');

const validateProduct = [
  body('nombre')
    .isString().withMessage('El nombre debe ser una cadena de texto')
    .isLength({ min: 3, max: 50 }).withMessage('El nombre debe tener entre 3 y 50 caracteres'),
  body('precio')
    .isNumeric().withMessage('El precio debe ser un número')
    .isFloat({ gt: 0 }).withMessage('El precio debe ser un número positivo'),
  body('categoria').isString().notEmpty().withMessage('La categoría es obligatoria'),
  body('imagen').isString().notEmpty().withMessage('La imagen es obligatoria'),
  body('descripcion')
    .isString().withMessage('La descripción debe ser una cadena de texto')
    .isLength({ min: 10, max: 500 }).withMessage('La descripción debe tener entre 10 y 500 caracteres')
];

module.exports = {
  validateProduct
};
