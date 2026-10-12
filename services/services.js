import Paciente from "../models/pacientes.js";

async function getAllPacientes() {
    return await Paciente.find();
}

async function getPacienteById(id) {
    return await Paciente.findById(id);
}

async function createPaciente(nome, idade) {
    const novoPaciente = new Paciente({ nome, idade });
    return await novoPaciente.save();
}

async function updatePaciente(id, nome, idade) {
    return await Paciente.findByIdAndUpdate(
        id,
        { nome, idade },
        { new: true, runValidators: true }
    );
}

async function deletePaciente(id) {
    return await Paciente.findByIdAndDelete(id);
}

export default {
    getAllPacientes,
    getPacienteById,
    createPaciente,
    updatePaciente,
    deletePaciente
};