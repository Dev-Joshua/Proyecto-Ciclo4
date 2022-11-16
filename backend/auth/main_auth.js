const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "__recret__");
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(401);
    res.json({ code: 4, msg: "No tiene permiso para acceder" });
  }
};

module.exports = auth;

//El jwt permite generar un token
//Para hacer un proceso de autorizacion necesito colocarlo en el headers para poder abrir lo que necesito
//Hasta que no tenga el token no podre acceder y ver la informacion de mi bd
