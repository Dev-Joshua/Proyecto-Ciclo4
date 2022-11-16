import React from "react";
import Navbar from "../navbar/navbar";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
export default class register extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <main>
          <section class="container-main">
            <section class="register">
              <div class="icon-closed">
                {/* <a href="../index.html">
                  <img src={Closed} width="40px" height="40px" alt="cerrar">
                </a> */}
                {/* <FontAwesomeIcon icon={faCircleXmark} /> */}
              </div>
              <div class="register-container">
                <div class="title">
                  <h2>Crear cuenta</h2>
                </div>
                <form onsubmit="registerUser(event)">
                  <div class="contact-details">
                    <div>
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
                    </div>
                    <div>
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
                    </div>
                  </div>
                  <div class="second-details">
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
                  <button type="submit">
                    <a onclick="registerUser()">Registrarse</a>
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
