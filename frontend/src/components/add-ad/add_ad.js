import React, { useState, useEffect } from "react";
import Navhome from "../navhome/navhome";
import "./add_ad.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      mascota: {
        nombre: "",
        fechaPerdida: "",
        lugarPerdiad: "",
        descripcion: "",
        photo: "",
      },
    };
  }

  setValue(home, value) {
    this.setState({
      mascota: {
        ...this.state.mascota,
        [home]: value,
      },
    });
  }
  // crearMascota() {
  //   this.setState({ loading: true });
  //   //
  //   axios
  //     .post(`${APIHOST}/mascotas`, {
  //       nombre: this.state.nombre,
  //       fechaPerdida: this.state.fechaPerdida,
  //       lugarPerdida: this.state.lugarPerdida,
  //       descripcion: this.state.descripcion,
  //       photo: this.state.photo,
  //     })
  //     .then((response) => {

  //       this.setState({ loading: false });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       this.setState({ loading: false });
  //     });
  // }

  render() {
    return (
      <>
        <Navhome />
        <main className="container-main__add">
          <section className="section-container">
            <section className="container-form">
              <div className="icon-closed__add">
                <a href="../login">
                  <FontAwesomeIcon icon={faCircleXmark} />
                </a>
              </div>
              <div className="title">
                <h2>Nuevo anuncio</h2>
              </div>
              <form className="formulario">
                <label htmlFor="name">Nombre mascota:</label>
                <input
                  type="text"
                  name="nombre"
                  onChange={(e) => this.setState({ nombre: e.target.value })}
                />
                <label htmlFor="location">Fecha de perdida:</label>
                <input
                  type="date"
                  name="fechaPerdida"
                  onChange={(e) =>
                    this.setState({ fechaPerdida: e.target.value })
                  }
                />
                <label htmlFor="location">Lugar de perdida:</label>
                <input
                  type="text"
                  name="lugarPerdida"
                  onChange={(e) =>
                    this.setState({ lugarPerdida: e.target.value })
                  }
                />
                {/* <div className="form-select">
                  <input type="radio" id="cat" name="pets" value="cat" />
                  <label htmlFor="cat">Gato</label>
                  <br />
                  <input
                    type="radio"
                    id="dog"
                    name="pets"
                    value="dog"
                    checked
                  />
                  <label htmlFor="dog">Perro</label>
                </div> */}

                <label htmlFor="descripcion">Descripción del anuncio:</label>
                <textarea
                  type="text"
                  name="descripcion"
                  id="details"
                  rows="4"
                  cols="50"
                  placeholder="Hora de perdida, rasgos de tu mascota, visto por ultima vez...etc"
                  onChange={(e) =>
                    this.setState({ descripcion: e.target.value })
                  }
                ></textarea>
                <div class="input-file" id="src-file">
                  <label htmlFor="pics">Foto de tu mascota:</label>
                  <div></div>
                  <input
                    name="photo"
                    accept="image/*"
                    type="text"
                    id="input_image"
                    onChange={(e) => this.setState({ photo: e.target.value })}
                  />
                </div>
                <button type="submit" onClick={() => console.log(this.state)}>
                  Crear Anuncio
                </button>
              </form>
            </section>
          </section>
        </main>
      </>
    );
  }
}
