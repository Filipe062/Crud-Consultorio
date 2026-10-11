import express from 'express';
import pacientesRouetes from './routes/pacientes.js';


const consultorio = express();

consultorio.use(express.json());

consultorio.use('/pacientes', pacientesRouetes);


consultorio.get("/", (req, res) => {
    res.send("API do Consultório Médico funcionando!");
});


consultorio.listen(3000, () => {
    console.log("Server is running on port 3000");
});