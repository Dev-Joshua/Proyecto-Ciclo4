import React from "react";
import UserIcon from "../../assets/icon/profile-image color.png";
import Navhome from "../navhome/navhome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import "./profile.css";

export default class profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navhome />
        <main className="container-main__profile">
          <section className="card-info">
            <div className="data-user">
              <div className="icon-closed__add">
                <a href="../home">
                  <FontAwesomeIcon icon={faCircleXmark} />
                </a>
              </div>
              <div className="icon-user">
                <img src={UserIcon} alt="user" />
                <h2>Perfil</h2>
              </div>
              <div className="contact-details">
                <label className="labelPf" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Sara "
                  required
                  autofocus
                  id="name"
                />

                <label className="labelPf" htmlFor="apellido">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder="Martinez"
                  required
                  id="lastname"
                />

                <label className="labelPf" htmlFor="ciudad">
                  Ciudad
                </label>
                <input type="text" placeholder="Medellin" required id="city" />

                <label className="labelPf" htmlFor="telefono">
                  Telefono
                </label>
                <input
                  type="text"
                  placeholder="3245566779"
                  required
                  id="phone"
                />

                <label className="labelPf" htmlFor="direcci??n">
                  Direccion
                </label>
                <input
                  type="text"
                  placeholder="Cra 123 #45-12 Sabaneta"
                  required
                  id="address"
                />

                <label className="labelPf" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="sarita@exampple.com"
                  required
                  id="email"
                />

                <label className="labelPf" htmlFor="clave">
                  Contrase??a
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  required
                  id="password"
                />
              </div>
              <button>
                <a className="edit" href="../profile">
                  Editar Cuenta
                </a>
              </button>
            </div>
          </section>
        </main>
      </>
    );
  }
}
