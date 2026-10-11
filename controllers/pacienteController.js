
import pacienteService from '../services/services.js';


const getPacientes = (req, res) => {
    res.json(pacienteService.getAllPacientes());  

}

const getPacienteById = (req, res) => {
    const { id } = req.params;

    const paciente = pacienteService.getPacienteById(id);

    if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }
    res.json(paciente);
}

const createPaciente = (req, res) => {
    const { nome, idade } = req.body;
   
    
    if (!nome) {
        return res.status(400).json({ message: "nome é obrigatório" });
    } else if (idade === undefined) {
        return res.status(400).json({ message: "idade é obrigatória" });
    } else if (typeof idade !== 'number') {
        return res.status(400).json({ message: "idade deve ser um número" });
    } else if(idade <= 0) {
        return res.status(400).json({ message: "idade deve ser maior que zero" });
    }
    const novoPaciente = pacienteService.createPaciente(nome, idade);

    res.status(201).json({
        message: "Paciente criado com sucesso!",
        paciente: novoPaciente
    });
};

const updatePaciente = (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;

    if (!nome) {
        return res.status(400).json({ message: "nome é obrigatório" });
    } else if (idade === undefined) {
        return res.status(400).json({ message: "idade é obrigatória" });
    } else if (typeof idade !== 'number') {
        return res.status(400).json({ message: "idade deve ser um número" });
    } else if(idade <= 0) {
        return res.status(400).json({ message: "idade deve ser maior que zero" });
    }

    const paciente = pacienteService.updatePaciente(id, nome, idade);
    
    if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }

    res.json({
        message: "Paciente atualizado com sucesso!",
        paciente
    });
};

const deletePaciente = (req, res) => {
    const { id } = req.params;
    const deletedPaciente = pacienteService.deletePaciente(id);

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
