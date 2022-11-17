import React from "react";
import Navbar from "../navbar/navbar";
// import { Button, Form, Container } from "react-bootstrap";
import "./login.css";
import Background from "../../assets/img/principal.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import Logo from "../../assets/logos/logo2.png";

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showHide() {
    const password = document.getElementById("password");
    const toggle = document.getElementById("toggle");
    if (password.type === "password") {
      password.setAttribute("type", "text");
      toggle.classList.add("hide");
    } else {
      password.setAttribute("type", "password");
      toggle.classList.remove("hide");
    }
  }
  render() {
    return (
      <>
        <Navbar />
        <main style={{ backgroundImage: `url(${Background})` }}>
          <section className="container-main">
            <section className="texto-login">
              <h1 className="texto-login-ani">Bienvenidos</h1>
              <p>WEB dedicada a encontrar su mascota perdida.</p>
            </section>
            <section className="login">
              <form id="form">
                <label className="labelLogin">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="yourUser@example.com"
                  required
                />
                <label className="labelLogin">Contraseña</label>
                <input
                  name="password"
                  type="password"
                  placeholder="*************"
                  id="password"
                  required
                />
                <div
                  id="toggle"
                  onClick={() => {
                    this.showHide();
                  }}
                >
                  <FontAwesomeIcon icon={faEyeSlash} />
                </div>
                <button className="button" type="submit">
                  <a href="../beginning">Iniciar sesión</a>
                </button>
                <h3>¿Aún no tienes cuenta?</h3>
                <button className="button">
                  <a href="../register">Regístrate</a>
                </button>
              </form>
            </section>
          </section>
        </main>
      </>
    );
  }
}
