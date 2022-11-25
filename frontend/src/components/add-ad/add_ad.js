import React from "react";
import Navhome from "../navhome/navhome";
import Loading from "../loading/loading";
import "./add_ad.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { request } from "../helper/helper";

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      loading: false,
      mascota: {
        nombre: "",
        fechaPerdida: "",
        lugarPerdiad: "",
        descripcion: "",
        foto: "",
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
  crearMascota() {
    this.setState({ loading: true });
    request
      .post("/mascotas", this.state.mascota)
      .then((response) => {
        this.setState({ loading: false });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <>
        <Navhome />
        <main className="container-main__add">
          <Loading show={this.state.loading} />
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
                <div className="input-file" id="src-file">
                  <label htmlFor="pics">Foto de tu mascota:</label>
                  <div></div>
                  <input
                    name="foto"
                    accept="image/*"
                    type="file"
                    id="input_image"
                    onChange={(e) => this.setState({ foto: e.target.value })}
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
