const Mascota = require("../models/mascotas.model");
//Si no hay conexion envia un falso(no pudo traerme el dato de empleados.model)
let response = {
  msg: "",
  exito: false,
};

//Crear una Mascota
exports.create = function (req, res) {
  let mascota = new Mascota({
    mascota_id: req.body.mascota_id,
    nombre: req.body.nombre,
    foto: req.body.foto,
    fecha_perdida: req.body.fecha_perdida,
    lugar_perdida: req.body.lugar_perdida,
    descripcion: req.body.descripcion,
  });

  //Cuando capture los dato: SI! son capturados incorrectamente manda un error
  mascota.save(function (err) {
    if (err) {
      console.error(err);
      response.exito = false;
      response.msg = "Error al guardar la mascota";
      res.json(response);
      return;
    }
    //Sino, si! se capturan correctamente
    response.exito = true;
    response.msg = "La mascota se guardo correctamente";
    res.json(response);
  });
};

exports.find = function (req, res) {
  Mascota.find(function (err, mascotas) {
    res.json(mascotas);
  });
};

exports.findOne = function (req, res) {
  Mascota.findOne({ _id: req.params.id }, function (err, mascota) {
    res.json(mascota);
  });
};

//Creo la funcion(request and response) para el metodo actualizar
exports.update = function (req, res) {
  let mascota = {
    mascota_id: req.body.mascota_id,
    nombre: req.body.nombre,
    edad: req.body.edad,
    tipo_mascota: req.body.tipo_mascota,
    lugar_perdida: req.body.lugar_perdida,
    descripcion: req.body.descripcion,
  };
  //Filtro x el id, dado el caso que encuentre el id va a poner el dato en el id
  Mascota.findByIdAndUpdate(req.params.id, { $set: mascota }, function (err) {
    //Si hay un error poniendo el dato muestra este codigo
    if (err) {
      console.error(err);
      response.exito = false;
      response.msg = "Error al modificar la mascota";
      res.json(response);
      return;
    }
    //Si pone el nuevo dato en el id mostrara correctamente modificado
    response.exito = true;
    response.msg = "La mascota se modifico correctamente";
    res.json(response);
  });
};

//Funcion para eliminar una mascota
exports.remove = function (req, res) {
  Mascota.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err);
      response.exito = false;
      response.msg = "Error al eliminar la mascota";
      res.json(response);
      return;
    }
    response.exito = true;
    response.msg = "La mascota se elimino correctamente";
    res.json(response);
  });
};
