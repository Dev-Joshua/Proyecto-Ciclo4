import React from "react";
import Navbar from "../navbar/navbar";
// import { Button, Form, Container } from "react-bootstrap";
import "./login.css";
// import Logo from "../../assets/logos/logo2.png";

export default class login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <Navbar />
        <main>
          <section className="container-main">
            <section className="texto-login">
              <img src="./logo2.png" alt="" />
              <h1 className="texto-login-ani">Bienvenidos</h1>
              <p>WEB dedicada a encontrar su mascota perdida.</p>
            </section>
            <section className="login">
              <form id="form">
                <label>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="yourUser@example.com"
                  required
                />
                <label>Contraseña</label>
                <input
                  name="password"
                  type="password"
                  placeholder="*************"
                  id="password"
                  required
                />
                <div id="toggle"></div>
                <button type="submit">
                  <a href="../../components/login/login.js">Iniciar sesión</a>
                </button>
                <h3>¿Aún no tienes cuenta?</h3>
                <button>
                  <a href="./html/register.html">Regístrate</a>
                </button>
              </form>
            </section>
          </section>
        </main>
      </>
    );
  }
}
