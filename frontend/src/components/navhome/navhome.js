import React from "react";
import "./navhome.css";
import Logo from "../../assets/logos/logo2.png";
import ProfileIcon from "../../assets/icon/profile-image color.png";

export default class nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav class="nav">
        <a href="../beginning">
          <img src={Logo} alt="logo" />
        </a>
        <input type="checkbox" id="menu-check" />
        <label id="menu" for="menu-check">
          <span id="menu-abrir">&#9776;</span>
          <span id="menu-cerrar">X</span>
        </label>
        <div class="container-list">
          <ul>
            <li>
              <a href="./home.html">Inicio</a>
            </li>
            <li>
              <a href="./info.html">Informacion</a>
            </li>
          </ul>
        </div>
        <div class="container-account">
          <div class="profile-image">
            <img src={ProfileIcon} alt="icon-profile" />
          </div>
          <ul class="profile-list">
            <span class="profile-name" type="text">
              Nombre
            </span>
            <li>
              <a href="./profile.html">Perfil</a>
            </li>
            <li>
              <a href="./publishing_user.html">Anuncios</a>
            </li>
            <li>
              <a href="../index.html">Cerrar sesión</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
