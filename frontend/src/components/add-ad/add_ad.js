import React from "react";
import Navhome from "../navhome/navhome";
import "./add_ad.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
export default class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
              <form className="formulario" onsubmit="createPet(event)">
                <label htmlFor="name">Nombre mascota:</label>
                <input type="varchar" name="name" />
                <label htmlFor="location">Fecha de perdida:</label>
                <input type="date" name="dateLost" />
                <label htmlFor="location">Lugar de perdida:</label>
                <input type="varchar" name="placeLost" />
                <div className="form-select">
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
                </div>

                <label htmlFor="descripcion">Descripción del anuncio:</label>

                <textarea
                  type="text"
                  name="text"
                  id="details"
                  rows="4"
                  cols="50"
                  placeholder="Hora de perdida, rasgos de tu mascota, visto por ultima vez...etc"
                ></textarea>
                <div class="input-file" id="src-file">
                  <label htmlFor="pics">Foto de tu mascota:</label>
                  <div></div>
                  <input
                    name="photo"
                    accept="image/*"
                    type="file"
                    id="input_image"
                  />
                </div>
                <button type="submit">Crear Anuncio</button>
              </form>
            </section>
          </section>
        </main>
      </>
    );
  }
}
