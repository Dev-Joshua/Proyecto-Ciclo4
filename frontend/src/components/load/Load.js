import React, { Component } from "react";
import Datos from "../Datos.json";
import Card from "../card/Card";
import { request } from "../helper/helper";

class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // nombre: "",
      // fechaPerdida: "",
      // lugarPerdida: "",
      // descripcion: "",
      // foto: "",
      card: [],
    };
    console.log(this.state.card.length); //El tamaño del estado son la cantidad de cards en el json
  }
  // componentDidMount() {
  //   this.getData();
  // }
  // getData() {
  //   request
  //     .get(this.props.url)
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({ card: response.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  render() {
    //Aplico la funcion  por cada uno de los objetos de Datos.json(con map recorro el array)
    // let mostrar = this.state.card.map((dato) => {
    return (
      <Card
        url="/mascotas"
        key={this.state.card._id}
        nombre={this.state.card.nombre}
        fechaPerdida={this.state.card.fechaPerdida}
        lugarPerdida={this.state.card.lugarPerdida}
        descripcion={this.state.card.descripcion}
        foto={this.state.card.foto}
      />
    );
    // });
    // return (
    //   <div className="cards-ads" id="cards-ads">
    //     {mostrar}
    //     {/* <span>{this.state.Datos.length}</span> */}
    //   </div>
    // );
  }
}

export default Load;

//Leo los objetos de Datos.json y los muestro con el Load en pantalla
//Este componente Load toma la informacion de Datos.json y se la pasa al componente Card
