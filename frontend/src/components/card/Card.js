import React from "react";
import { request } from "../helper/helper";

import "./card.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { card: [] };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    request
      .get(this.props.url)
      .then((response) => {
        console.log(response.data);
        this.setState({ card: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <article className="card-pet" data={this.state.card}>
          <img src={process.env.PUBLIC_URL + this.props.foto} alt="img" />
          <div className="card-body">
            <h3>{this.props.nombre}</h3>
            <table data={this.state.card}>
              <tbody>
                <tr>
                  <td>{this.props.fechaPerdida}</td>
                </tr>
                <tr>
                  <td>
                    {this.props.lugarPerdida}
                    {/* <br />
                      Ultima vez visto: Por fundadores */}
                  </td>
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
