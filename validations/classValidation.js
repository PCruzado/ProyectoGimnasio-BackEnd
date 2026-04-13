const { body } = require('express-validator');

const validateClass = [
  body('nombreClase')
    .optional()
    .isString().withMessage('El nombre de la clase debe ser texto')
    .isLength({ min: 3, max: 50 }).withMessage('El nombre de la clase debe tener entre 3 y 50 caracteres'),
  body('nombre')
    .optional()
    .isString().withMessage('El nombre de la clase debe ser texto')
    .isLength({ min: 3, max: 50 }).withMessage('El nombre de la clase debe tener entre 3 y 50 caracteres'),
  body('profesor').isString().notEmpty().withMessage('El profesor es obligatorio'),
  body('fecha')
    .notEmpty().withMessage('La fecha es obligatoria')
    .custom((value) => {
      if (!value.match(/^\d{4}-\d{2}-\d{2}$/) && isNaN(Date.parse(value))) {
        throw new Error('La fecha debe tener un formato válido');
      }
      return true;
    }),
  body('horario').isString().notEmpty().withMessage('El horario es obligatorio')
];

module.exports = {
  validateClass
};
