const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true,
        trim: true,
        lowercase: true
    },
    contrasena: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    telefono: {
        type: String,
        trim: true
    },
    planContratado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan', 
        default: null 
    }, 
    rol: {
        type: String,
        enum: ['usuario', 'entrenador', 'administrador', 'super-administrador'],
        default: 'usuario' 
    }
}, {
    timestamps: true
});


usuarioSchema.pre('save', async function(next) {
    if (!this.isModified('contrasena')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.contrasena = await bcrypt.hash(this.contrasena, salt);
    next();
});


usuarioSchema.methods.compararContrasena = async function(contrasenaIngresada) {
    return await bcrypt.compare(contrasenaIngresada, this.contrasena);
};

module.exports = mongoose.model('Usuario', usuarioSchema);