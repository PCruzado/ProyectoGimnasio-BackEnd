const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const conectarDB = require('./config/db');

dotenv.config();

conectarDB();

const app = express();
const puerto = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());
app.use('/api/usuarios', require('./routes/userRoutes'));

app.get('/', (req, res) => {
    res.status(200).json({
        estado: 'Exitoso',
        mensaje: '¡Servidor del Gimnasio funcionando!'
    });
});


app.listen(puerto, () => {
    console.log(` Servidor corriendo en el puerto ${puerto}`);
});