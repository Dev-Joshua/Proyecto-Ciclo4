const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MascotasSchema = new Schema({
  mascota_id: { type: String, required: true, max: 60 },
  // persona_id: { type: String, required: true, max: 60 },
  nombre: { type: String, required: true, max: 60 },
  foto: { type: String, required: false, max: 500 },
  fecha_perdida: { type: String, required: true, max: 20 },
  lugar_perdida: { type: String, required: true, max: 70 },
  descripcion: { type: String, required: true, max: 500 },
});

module.exports = mongoose.model("mascotas", MascotasSchema);
