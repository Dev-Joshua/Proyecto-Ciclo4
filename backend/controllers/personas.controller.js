//Importo el modelo y lo guardo en Persona
const Persona = require("../models/personas.model");
//Si no hay conexion envia un falso(no pudo traerme el dato de personas.model)
let response = {
  msg: "",
  exito: false,
};

//Funcion que me permite crear una nueva persona(captura datos nombre, apellido, telefono etc)
exports.create = function (req, res) {
  let persona = new Persona({
    nombres: req.body.nombres, //Como requerimiento lo debo hacer a traves de un body(en postman)
    apellidos: req.body.apellidos,
    direccion: req.body.direccion,
    celular: req.body.celular,
    ciudad: req.body.ciudad,
  });

  //Cuando capture los dato: SI! son capturados incorrectamente manda un error
  persona.save(function (err) {
    if (err) {
      console.error(err);
      response.exito = false;
      response.msg = "Error al guardar la persona";
      res.json(response);
      return;
    }
    //Sino, si! se capturan correctamente
    response.exito = true;
    response.msg = "La persona se guardo correctamente";
    res.json(response);
  });
};

//Encontrar(Es como un SELECT que me trae todos los datos )
exports.find = function (req, res) {
  Persona.find(function (err, personas) {
    res.json(personas);
  });
};

exports.findOne = function (req, res) {
  Persona.findOne({ _id: req.params.id }, function (err, persona) {
    res.json(persona);
  });
};

//Creo la funcion(request and response) para el metodo actualizar
exports.update = function (req, res) {
  let persona = {
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    direccion: req.body.direccion,
    celular: req.body.celular,
    ciudad: req.body.ciudad,
  };
  //Filtro x el id, dado el caso que encuentre el id va a poner el dato en el id
  Persona.findByIdAndUpdate(req.params.id, { $set: persona }, function (err) {
    //Si hay un error poniendo el dato muestra este codigo
    if (err) {
      console.error(err);
      response.exito = false;
      response.msg = "Error al modificar el usuario";
      res.json(response);
      return;
    }
    //Si pone el nuevo dato en el id mostrara correctamente modificado
    response.exito = true;
    response.msg = "El usuario se modifico correctamente";
    res.json(response);
  });
};

//Funcion para eliminar un usuario(Persona)
exports.remove = function (req, res) {
  Persona.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err);
      response.exito = false;
      response.msg = "Error al eliminar el usuario";
      res.json(response);
      return;
    }
    response.exito = true;
    response.msg = "El usuario se elimino correctamente";
    res.json(response);
  });
};
