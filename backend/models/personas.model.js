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
