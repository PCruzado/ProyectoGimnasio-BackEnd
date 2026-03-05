const Class = require('../models/Class');

const obtenerClases = async (req, res) => {
    try {
        const clases = await Class.find({}).populate('usuariosInscriptos', 'nombre email');
        res.status(200).json(clases);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las clases', error: error.message });
    }
};

const obtenerClasePorId = async (req, res) => {
    try {
        const clase = await Class.findById(req.params.id).populate('usuariosInscriptos', 'nombre email');
        if (!clase) {
            return res.status(404).json({ mensaje: 'Clase no encontrada' });
        }
        res.status(200).json(clase);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la clase', error: error.message });
    }
};

const crearClase = async (req, res) => {
    try {
        const nuevaClase = await Class.create(req.body);
        res.status(201).json(nuevaClase);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear la clase', error: error.message });
    }
};

const editarClase = async (req, res) => {
    try {
        const claseActualizada = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!claseActualizada) {
            return res.status(404).json({ mensaje: 'Clase no encontrada' });
        }
        res.status(200).json(claseActualizada);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar la clase', error: error.message });
    }
};

const borrarClase = async (req, res) => {
    try {
        const claseBorrada = await Class.findByIdAndDelete(req.params.id);
        if (!claseBorrada) {
            return res.status(404).json({ mensaje: 'Clase no encontrada' });
        }
        res.status(200).json({ mensaje: 'Clase eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la clase', error: error.message });
    }
};

const inscribirUsuario = async (req, res) => {
    try {
        const clase = await Class.findById(req.params.id);
        if (!clase) {
            return res.status(404).json({ mensaje: 'Clase no encontrada' });
        }

        // Verificar si ya está inscripto
        if (clase.usuariosInscriptos.includes(req.user._id)) {
            return res.status(400).json({ mensaje: 'Ya estás inscripto en esta clase' });
        }

        // Verificar capacidad
        if (clase.usuariosInscriptos.length >= clase.capacidadMax) {
            return res.status(400).json({ mensaje: 'La clase está llena' });
        }

        clase.usuariosInscriptos.push(req.user._id);
        await clase.save();

        res.status(200).json({ mensaje: 'Inscripción exitosa', clase });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al inscribirse', error: error.message });
    }
};

module.exports = {
    obtenerClases,
    obtenerClasePorId,
    crearClase,
    editarClase,
    borrarClase,
    inscribirUsuario
};
