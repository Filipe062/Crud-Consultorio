import express from 'express';

const consultorio = express();

consultorio.use(express.json());

const pacientes = [
    {
        id: 1,
        nome: "João Silva",
        idade: 35
    },
    {
        id: 2,
        nome: "Maria Souza",
        idade: 28
    }
];

let proximoId = 3;

consultorio.get("/", (req, res) => {
    res.send("API do Consultório Médico funcionando!");
});

consultorio.get("/pacientes", (req, res) => {
    res.json(pacientes);
});

consultorio.get('/pacientes/:id', (req, res) => {
    const { id } = req.params;
    const paciente = pacientes.find(p => p.id === parseInt(id));

    if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }

    res.json(paciente);
});

consultorio.post("/pacientes", (req, res) => {
    const { nome, idade } = req.body;

  if (!nome) {
    return res.status(400).json({ message: "nome é obrigatório" });
} else if (idade === undefined) {
    return res.status(400).json({ message: "idade é obrigatória" });
} else if (typeof idade !== 'number') {
    return res.status(400).json({ message: "idade deve ser um número" });
}

    const novoPaciente = { id: proximoId++, nome, idade };
    pacientes.push(novoPaciente);

    res.status(201).json({
        message: "Paciente criado com sucesso!",
        paciente: novoPaciente
    });
});


consultorio.put('/pacientes/:id', (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;

    const paciente = pacientes.find(p => p.id === parseInt(id));    

    if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
    }

    if (!nome || typeof idade !== 'number' || idade <= 0) { 
        return res.status(400).json({ message: "nome e idade são obrigatórios" });
    }

    paciente.nome = nome;
    paciente.idade = idade;

    res.json({
        message: "Paciente atualizado com sucesso!",
        paciente
    });
});


consultorio.delete('/pacientes/:id', (req, res) => {
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

consultorio.listen(3000, () => {
    console.log("Server is running on port 3000");
});