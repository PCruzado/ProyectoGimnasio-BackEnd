const { validationResult } = require('express-validator');

const validateHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Si hay errores, devolver un código de estado 400 y los errores
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateHandler };
