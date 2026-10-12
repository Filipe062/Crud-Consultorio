import express from "express";
import pacienteController from "../controllers/pacienteController.js";
import validatePaciente from "../validators/pacienteValidator.js";

const router = express.Router();

router.get('/', pacienteController.getPacientes);

router.get('/:id', pacienteController.getPacienteById);

router.post("/", validatePaciente, pacienteController.createPaciente);

router.put('/:id', validatePaciente, pacienteController.updatePaciente);

router.delete('/:id', pacienteController.deletePaciente);

export default router;