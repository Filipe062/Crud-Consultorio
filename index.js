import express from 'express';
import pacientesRouetes from './routes/pacientes.js';


const consultorio = express();

consultorio.use('/pacientes', pacientesRouetes);

consultorio.use(express.json());


consultorio.get("/", (req, res) => {
    res.send("API do Consultório Médico funcionando!");
});

consultorio.get("/pacientes", (req, res) => {
    res.json(pacientes);
});

consultorio.listen(3000, () => {
    console.log("Server is running on port 3000");
});