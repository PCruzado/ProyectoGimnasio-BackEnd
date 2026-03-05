const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        const conexion = await mongoose.connect(process.env.MONGO_URI);
        console.log(` Conexion exitosa: ${conexion.connection.host}`);
    } catch (error) {
        console.error(`Error al conectar con la base de datos: ${error.message}`);
        process.exit(1);
    }
};

module.exports = conectarDB;