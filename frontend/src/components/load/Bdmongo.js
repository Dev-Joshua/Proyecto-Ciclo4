import { useState } from "react";
import Card from "../card/Card";

const Bdmongo = () => {
  const [todo, settodo] = useState([]);
  const var_datos = () => {
    fetch("http://localhost:3001/mascotas")
      .then((res) => res.json())
      .then((datos2) => settodo(datos2));
  };

  var_datos();
  let mostrar = todo.map((dato) => {
    return (
      <Card
        nombre={dato.nombre}
        fecha_Perdida={dato.fecha_Perdida}
        lugar_Perdida={dato.lugar_Perdida}
        descripcion={dato.descripcion}
        foto={dato.foto}
      />
    );
  });

  return <>{mostrar}</>;
};

export default Bdmongo;
