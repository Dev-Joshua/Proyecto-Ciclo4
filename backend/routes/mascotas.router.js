//Creo el router. Sirve para decirle que trabajaremos con express
const express = require("express");
const router = express.Router();
const mascotasController = require("../controllers/mascotas.controller");

//Metodos para las peticiones
router.post("/", mascotasController.create); //CREAR
router.get("/", mascotasController.find); //ENCONTRAR(find)
router.get("/:id", mascotasController.findOne); //ENCONTRAR UNO
router.put("/:id", mascotasController.update); //ACTUALIZAR
router.delete("/:id", mascotasController.remove); //ELIMINAR

module.exports = router;
