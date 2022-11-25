import React, { Component } from "react";
import Datos from "../Datos.json";
import Card from "../card/Card";

class Load extends Component {
  constructor() {
    super();
    this.state = { Datos };
    // console.log(this.state.Datos.length); //El tamaño del estado son la cantidad de cards en el json
  }
  render() {
    //Aplico la funcion  por cada uno de los objetos de Datos.json(con map recorro el array)
    let mostrar = this.state.Datos.map((dato) => {
      return (
        <Card
          key={dato}
          nombre={dato.nombre}
          fechaPerdida={dato.fechaPerdida}
          lugarPerdida={dato.lugarPerdida}
          descripcion={dato.descripcion}
          foto={dato.foto}
        />
      );
    });
    return (
      <div className="cards-ads" id="cards-ads">
        {mostrar}
      </div>
    );
  }
}

export default Load;

//Leo los objetos de Datos.json y los muestro con el Load en pantalla
//Este componente Load toma la informacion de Datos.json y se la pasa al componente Card
