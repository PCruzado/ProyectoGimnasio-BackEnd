const jwt = require("jsonwebtoken");
const Usuario = require("../models/User");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Usuario.findById(decoded.id).select("-contrasena");
      next(); 
    } catch (error) {
      res
        .status(401)
        .json({ mensaje: "No autorizado, token inválido o expirado" });
    }
  }
  if (!token) {
    res
      .status(401)
      .json({ mensaje: "No autorizado, no se envió ningún token" });
  }
};

const admin = (req, res, next) => {
  if (
    req.user &&
    (req.user.rol === "administrador" || req.user.rol === "super-administrador")
  ) {
    next();
  } else {
    res
      .status(403)
      .json({
        mensaje: "Acceso denegado. Se requieren permisos de administrador",
      });
  }
};
module.exports = { protect, admin };
