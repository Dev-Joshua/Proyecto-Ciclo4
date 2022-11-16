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
          <section class="container-main">
            <section class="register">
              <div class="icon-closed">
                <a href="../login">
                  <FontAwesomeIcon icon={faCircleXmark} />
                </a>
              </div>
              <div class="register-container">
                <div class="title">
                  <h2>Crear cuenta</h2>
                </div>
                <form onsubmit="registerUser(event)">
                  <div class="second-details">
                    <label for="">Nombre</label>
                    <input
                      id="name_input"
                      type="text"
                      placeholder=""
                      required
                      autofocus
                    />
                    <label class="city" for="">
                      Ciudad
                    </label>
                    <input
                      id="city_input"
                      type="text"
                      placeholder=""
                      required
                    />

                    <label class="last-name" for="">
                      Apellido
                    </label>
                    <input
                      id="lastname_input"
                      type="text"
                      placeholder=""
                      required
                    />
                    <label for="" type="tel">
                      Teléfono
                    </label>
                    <input
                      id="phone_input"
                      type="text"
                      placeholder=""
                      required
                    />
                    <label for="">Dirección</label>
                    <input
                      id="address_input"
                      class="second-input"
                      type="text"
                      placeholder=""
                      required
                    />
                    <label for="">Email</label>
                    <input
                      id="email_input"
                      class="second-input"
                      type="email"
                      placeholder=""
                      required
                    />
                    <label for="">Contraseña</label>
                    <input
                      id="pass_input"
                      class="second-input"
                      type="password"
                      placeholder="*********"
                      required
                    />
                    <label for="">Confirmar contraseña</label>
                    <input
                      id="repeat_pass_input"
                      class="second-input"
                      type="password"
                      placeholder="*********"
                      required
                    />
                  </div>
                  <button style={{ marginTop: 50 }} type="submit">
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
