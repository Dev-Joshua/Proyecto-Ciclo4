//Creo el router. Sirve para decirle que trabajaremos con express
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
