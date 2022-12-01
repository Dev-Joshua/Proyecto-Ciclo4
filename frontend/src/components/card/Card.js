import React from "react";
import { request } from "../helper/helper";

import "./card.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mascota: {
        nombre: "",
        fecha_Perdida: "",
        lugar_Perdida: "",
        descripcion: "",
        foto: "",
      },
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    request
      .get("/mascotas", this.state.mascota)
      .then((response) => {
        this.setState({ mascota: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <article className="card-pet">
          <img src={process.env.PUBLIC_URL + this.props.foto} alt="img" />
          <div className="card-body">
            <h1>Leido</h1>
            <h3>nombre{this.props.nombre}</h3>
            <table>
              <tbody>
                <tr>
                  <td>{this.props.fecha_Perdida}</td>
                </tr>
                <tr>
                  <td>{this.props.lugar_Perdida}</td>
                </tr>
                <tr>
                  <td>{this.props.descripcion}</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <div className="container-ul">
              <div className="button-container">
                <button className="contactar" id="contactar">
                  Contactar
                </button>
                <div id="modal-container" className="modal-container">
                  <div className="modal">
                    <div id="close" className="icon-closed">
                      <img
                        src="../../assets/icon/closed - color.png"
                        width="20px"
                        height="20px"
                        alt="cerrar"
                      />
                    </div>
                    {/* <ul>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-whatsapp"></i>
                            </a>
                          </li>
                        </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }
}
