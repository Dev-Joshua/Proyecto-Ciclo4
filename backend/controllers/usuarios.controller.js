//Antes de colocar el controlador a funcionar instalo por consola el jsonwebtoken
const Usuario = require("../models/usuarios.model"); //El require llama al modelo de usuarios
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

//Hago un proceso de autenticacion
exports.login = function (req, res, next) {
  //El encriptamiento que le voy a entregar a traves del body(que estara en el password(pass)) va a ser un encriptamiento a traves del "sha512"
  let hashedpass = crypto
    .createHash("sha512")
    .update(req.body.pass)
    .digest("hex");

  //Para poder ingresar necesito encontrar(findOne) un usuario que coincida(usuario, contraseñá) para que genere el token
  Usuario.findOne(
    { usuario: req.body.usuario, pass: hashedpass },
    function (err, usuario) {
      //Si! no coincide el usuario y password o no existe se geenera un token nulo
      let response = {
        token: null,
      };

      //Si! el usuario y contraseña coincide genera un token que se acaba cuando cierra sesion
      if (usuario !== null) {
        response.token = jwt.sign(
          {
            id: usuario._id,
            usuario: usuario.usuario,
          },
          "__recret__",
          { expiresIn: "12h" }
        );
      }
      res.json(response); //Null si no ocinciden
    }
  );
};
