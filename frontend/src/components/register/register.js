import React from "react";
import Navbar from "../navbar/navbar";
import "./register.css";
import Background from "../../assets/img/foto_fondo2.jpg";

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
        <Navbar />
        <main style={{ backgroundImage: `url(${Background})` }}>
          <section className="container-main">
            <section className="register">
              <div className="icon-closed">
                <a href="../login">
                  <FontAwesomeIcon icon={faCircleXmark} />
                </a>
              </div>
              <div className="register-container">
                <div className="title">
                  <h2>Crear cuenta</h2>
                </div>
                <form style={{ marginTop: 30 }} onSubmit="registerUser(event)">
                  <div className="second-details">
                    <label>Nombre</label>
                    <input
                      id="name_input"
                      type="text"
                      placeholder=""
                      required
                    />
                    <label className="city">Ciudad</label>
                    <input
                      id="city_input"
                      type="text"
                      placeholder=""
                      required
                    />

                    <label className="last-name">Apellido</label>
                    <input
                      id="lastname_input"
                      type="text"
                      placeholder=""
                      required
                    />
                    <label type="tel">Teléfono</label>
                    <input
                      id="phone_input"
                      type="text"
                      placeholder=""
                      required
                    />
                    <label>Dirección</label>
                    <input
                      id="address_input"
                      className="second-input"
                      type="text"
                      placeholder=""
                      required
                    />
                    <label>Email</label>
                    <input
                      id="email_input"
                      className="second-input"
                      type="email"
                      placeholder=""
                      required
                    />
                    <label>Contraseña</label>
                    <input
                      id="pass_input"
                      className="second-input"
                      type="password"
                      placeholder="*********"
                      required
                    />
                    <label>Confirmar contraseña</label>
                    <input
                      id="repeat_pass_input"
                      className="second-input"
                      type="password"
                      placeholder="*********"
                      required
                    />
                  </div>
                  <button
                    className="button"
                    style={{ marginTop: 30 }}
                    type="submit"
                  >
                    <a href="../register/register.js">Registrarse</a>
                  </button>
                </form>
              </div>
            </section>
          </section>
        </main>
      </>
    );
  }
}
