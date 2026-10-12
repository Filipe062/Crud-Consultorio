import express from 'express';
import pacientesRouetes from './routes/pacientes.js';
import connectDB from './config/database.js';

const consultorio = express();

consultorio.use(express.json());

consultorio.use('/pacientes', pacientesRouetes);

consultorio.get("/", (req, res) => {
    res.send("API do Consultório Médico funcionando!");
});

const iniciarServidor = async () => {
    await connectDB();

    consultorio.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
};

iniciarServidor();