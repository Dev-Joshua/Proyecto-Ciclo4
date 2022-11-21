import React from "react";
import axios from "axios";
import Navbar from "../navbar/navbar";
// import { Button, Form, Container } from "react-bootstrap";
import "./login.css";
import app from "../../app.json";
import Background from "../../assets/img/principal.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { isNull } from "util";
import { calcularExpirarSesion } from "../helper/helper";

import Cookies from "universal-cookie";
import Loading from "../loading/loading";

const { APIHOST } = app;
const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
    //El loading se va a activar cuando se ejeecute esta funcion(inicie sesion)
    this.setState({ loading: true });
    axios
      .post(`${APIHOST}/usuarios/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
      })
      .then((response) => {
        if (isNull(response.data.token)) {
          alert("Usuario y/o contrasena inválidos");
        } else {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: calcularExpirarSesion(),
          });
          //Si! su usuario y contraseñá coinciden lo diriga a esta ruta
          this.props.history.push(window.open("/home"));
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
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
          <Loading show={this.state.loading} />
          <section className="container-main__login">
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
                  placeholder="yourUser@example.com"
                  onChange={(e) => this.setState({ usuario: e.target.value })}
                />
                <label className="labelLogin">Contraseña</label>
                <input
                  name="password"
                  type="password"
                  placeholder="*************"
                  id="password"
                  onChange={(e) => this.setState({ pass: e.target.value })}
                />
                <div
                  id="toggle"
                  onClick={() => {
                    this.showHide();
                  }}
                >
                  <FontAwesomeIcon icon={faEyeSlash} />
                </div>
                <button
                  className="button"
                  onClick={() => {
                    this.iniciarSesion();
                  }}
                >
                  Iniciar sesión
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
