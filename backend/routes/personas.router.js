//Creo el router. Le digo que trabajaremos con express
const express = require("express");
const router = express.Router();
const personasController = require("../controllers/personas.controller");

//Metodos para las peticiones
router.post("/", personasController.create); //CREAR
router.get("/", personasController.find); //ENCONTRAR(find)
router.get("/:id", personasController.findOne); //ENCONTRAR UNO
router.put("/:id", personasController.update); //ACTUALIZAR
router.delete("/:id", personasController.remove); //ELIMINAR

module.exports = router;

//El Router llama a personasController(Es quien me hace el proceso de guardar los datos en el modelo->Persona.model)
