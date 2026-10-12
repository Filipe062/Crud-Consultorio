function validatePaciente(req, res, next) {
    const { nome, idade } = req.body;

    if (!nome) {
        return res.status(400).json({ message: "nome é obrigatório" });
    } else if (idade === undefined) {
        return res.status(400).json({ message: "idade é obrigatória" });
    } else if (typeof idade !== 'number') {
        return res.status(400).json({ message: "idade deve ser um número" });
    } else if (idade <= 0) {
        return res.status(400).json({ message: "idade deve ser maior que zero" });
    }

    next();
}

export default validatePaciente;