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
      <nav className="nav">
        <a href="../beginning">
          <img src={Logo} alt="logo" />
        </a>
        <input type="checkbox" id="menu-check" />
        <label id="menu" htmlFor="menu-check">
          <span id="menu-abrir">&#9776;</span>
          <span id="menu-cerrar">X</span>
        </label>
        <div className="container-list">
          <ul>
            <li>
              <a href="./home.html">Inicio</a>
            </li>
            <li>
              <a href="./info.html">Informacion</a>
            </li>
          </ul>
        </div>
        <div className="container-account">
          <div className="profile-image">
            <img src={ProfileIcon} alt="icon-profile" />
          </div>
          <ul className="profile-list">
            <span className="profile-name" type="text">
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
