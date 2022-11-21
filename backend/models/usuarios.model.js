const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creo la tabla Usuarios para la base de datos
const UsuarioSchema = new Schema({
  // persona_id: { type: String, required: true, max: 60 },
  usuario: { type: String, required: true, max: 60 }, //Manejo atributo usuario y password
  pass: { type: String, required: true, max: 60 },
});

module.exports = mongoose.model("usuarios", UsuarioSchema);
