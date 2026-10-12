import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true,
        min: 1
    }
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

export default Paciente;