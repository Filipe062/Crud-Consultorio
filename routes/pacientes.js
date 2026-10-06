import express from "express";
import pacientes from "../data/pacientes.js";

const router = express.Router();

let proximoId = 3;

router.get('/', (req, res) => {
    res.json(pacientes);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const paciente = pacientes.find(p => p.id === parseInt(id));

    if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }

    res.json(paciente);
});

router.post("/pacientes", (req, res) => {
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

    const novoPaciente = { id: proximoId++, nome, idade };
    pacientes.push(novoPaciente);

    res.status(201).json({
        message: "Paciente criado com sucesso!",
        paciente: novoPaciente
    });

});

router.put('/pacientes/:id', (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;

    const paciente = pacientes.find(p => p.id === parseInt(id));    

    if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }

     if (!nome) {
     return res.status(400).json({ message: "nome é obrigatório" });
    } else if (idade === undefined) {
     return res.status(400).json({ message: "idade é obrigatória" });
    } else if (typeof idade !== 'number') {
     return res.status(400).json({ message: "idade deve ser um número" });
    } else if(idade <= 0) {
        return res.status(400).json({ message: "idade deve ser maior que zero" });
    }

    paciente.nome = nome;
    paciente.idade = idade;

    res.json({
        message: "Paciente atualizado com sucesso!",
        paciente
    });
});


router.delete('/pacientes/:id', (req, res) => {
    const { id } = req.params;
    const index = pacientes.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }

    pacientes.splice(index, 1);

    res.json({
        message: "Paciente excluído com sucesso!"
    });
});


export default router;