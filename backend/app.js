var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//Declaro una variable con mi base de datos
var database = require("./config/database");
//Trabajo con estas dependencias
var auth = require("./auth/main_auth"); //Con auth valido el token del usuario al iniciar sesion
var cors = require("cors"); //Con cors me va a reconocer las peticiones que vienen desde el frontend

//En app llamo a router
var personasRouter = require("./routes/personas.router");
var mascotasRouter = require("./routes/mascotas.router");
var usuariosRouter = require("./routes/usuarios.router");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//Mongo connection
database.mongoConnect();
//Verificar usuario/contraseñá
app.use("/usuarios", usuariosRouter);
//Luego hace la autenticacion.(Si es correcta me deja usar las otras paginas)
app.use(auth);

//Routers
app.use("/personas", personasRouter);
app.use("/mascotas", mascotasRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
