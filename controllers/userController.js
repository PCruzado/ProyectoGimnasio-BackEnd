const Usuario = require('../models/User');
const jwt = require('jsonwebtoken');


const generarToken = (id, rol) => {

    return jwt.sign({ id, rol }, process.env.JWT_SECRET, {
        expiresIn: '30d', 
    });
};


const registrarUsuario = async (req, res) => {
    try {
        const { nombre, apellido, email, contrasena, telefono, planContratado, rol } = req.body;

        if (!nombre || !apellido || !email || !contrasena) {
            return res.status(400).json({ mensaje: 'Por favor, completa todos los campos obligatorios' });
        }


        const usuarioExiste = await Usuario.findOne({ email });
        if (usuarioExiste) {
            return res.status(400).json({ mensaje: 'El usuario ya está registrado con ese email' });
        }


        const usuario = await Usuario.create({
            nombre,
            apellido,
            email,
            contrasena,
            telefono,
            planContratado,
            rol 
        });

        if (usuario) {
            res.status(201).json({
                _id: usuario._id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol,
                token: generarToken(usuario._id, usuario.rol)
            });
        } else {
            res.status(400).json({ mensaje: 'Datos de usuario inválidos' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
    }
};


const obtenerUsuarios = async (req, res) => {
    try {
        let filtro = {};
        
        if (req.user.rol !== 'super-administrador') {
            filtro = { rol: { $ne: 'super-administrador' } }; 
        }
        const usuarios = await Usuario.find(filtro).select('-contrasena');
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los usuarios', error: error.message });
    }
};


const loginUsuario = async (req, res) => {
    try {
        const { email, contrasena } = req.body;

        const usuario = await Usuario.findOne({ email });

        if (usuario && (await usuario.compararContrasena(contrasena))) {
            res.json({
                _id: usuario._id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol,
                token: generarToken(usuario._id, usuario.rol)
            });
        } else {
            res.status(401).json({ mensaje: 'Email o contraseña incorrectos' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
    }
};

const actualizarRolUsuario = async (req, res) => {
    try {
        const { nuevoRol } = req.body;

        const rolesPermitidos = ['usuario', 'entrenador', 'administrador', 'super-administrador'];
        if (!rolesPermitidos.includes(nuevoRol)) {
            return res.status(400).json({ mensaje: 'Rol no válido' });
        }

        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            { rol: nuevoRol },
            { new: true }
        ).select('-contrasena'); 

        if (!usuarioActualizado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.status(200).json({
            mensaje: `El rol del usuario ha sido actualizado a ${nuevoRol}`,
            usuario: usuarioActualizado
        });

    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el rol', error: error.message });
    }
};

module.exports = {
    registrarUsuario,
    loginUsuario,
    obtenerUsuarios,
    actualizarRolUsuario
};

