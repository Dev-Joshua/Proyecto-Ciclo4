//Declaro el uso de mongoose como dependencia para la conexion a la BD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonasSchema = new Schema({
  nombres: { type: String, required: true, max: 120 },
  apellidos: { type: String, required: true, max: 120 },
  direccion: { type: String, required: true, max: 60 },
  celular: { type: String, required: true, max: 20 },
  ciudad: { type: String, required: true, max: 70 },
  // mail: { type: String, required: true, max: 70 },
  // direccion: { type: String, required: true, max: 60 },
});

module.exports = mongoose.model("personas", PersonasSchema);

//Trabajo mongoose como un esquema(Schema). Dentro de este esqema creo una nueva tabla llamada PersonasSchema.
//Declaro los atrbituos para Personas
