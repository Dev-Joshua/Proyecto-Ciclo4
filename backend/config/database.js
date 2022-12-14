const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "petlost";

exports.mongoConnect = () => {
  const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
  mongoose.connect(mongoStringConnection);

  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on(
    "error",
    console.error.bind(console, "Mongodb connection error")
  );
  console.log("Conectado a la base de datos...");
};

//Me conecto con la base de datos(Todo el proceso para conectar con la BD)
//En pocas palabras se levanta el servicio.(Trabajamos con un servidor a nivel local)
