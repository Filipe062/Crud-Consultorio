import pacientes from "../data/pacientes.js";

let proximoId = 3;

function getAllPacientes() {
    return pacientes;
}

function getPacienteById(id) {
    return pacientes.find(p => p.id === parseInt(id));
}

function createPaciente(nome, idade) {
    const novoPaciente = { id: proximoId++, nome, idade };
    pacientes.push(novoPaciente);
    return novoPaciente;
}

function updatePaciente(id, nome, idade) {
    const paciente = getPacienteById(id);
    if (paciente) {
        paciente.nome = nome;
        paciente.idade = idade;
    }
    return paciente;
}

function deletePaciente(id) {
    const index = pacientes.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        return pacientes.splice(index, 1)[0];
    }
    return null;
}

export default {
    getAllPacientes,
    getPacienteById,
    createPaciente,
    updatePaciente,
    deletePaciente
};
