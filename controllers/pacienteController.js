
import pacienteService from '../services/services.js';


const getPacientes = async (req, res) => {
    const pacientes = await pacienteService.getAllPacientes();
    res.json(pacientes);
};

const getPacienteById = async (req, res) => {
    const { id } = req.params;
    

    const paciente = await pacienteService.getPacienteById(id);

    if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }
    res.json(paciente);
}

const createPaciente = async (req, res) => {
    const { nome, idade } = req.body;
   
    
    const novoPaciente = await pacienteService.createPaciente(nome, idade);

    res.status(201).json({
        message: "Paciente criado com sucesso!",
        paciente: novoPaciente
    });
};

const updatePaciente = async (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;


    const paciente = await pacienteService.updatePaciente(id, nome, idade);
    
    if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }

    res.json({
        message: "Paciente atualizado com sucesso!",
        paciente
    });
};

const deletePaciente = async (req, res) => {
    const { id } = req.params;
    const deletedPaciente = await pacienteService.deletePaciente(id);

    if (!deletedPaciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }

    res.json({
        message: "Paciente excluído com sucesso!"
    });
}

export default {
    getPacientes,
    getPacienteById,
    createPaciente,
    updatePaciente,
    deletePaciente
};
