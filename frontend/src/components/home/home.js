import React from "react";
import Navhome from "../navhome/navhome";
import "./home.css";
import AddIcon from "../../assets/icon/add-anuncio - color.png";
// import CardImg from "../../assets/img/4.jpg";
import Background from "../../assets/img/home.jpg";
// import { request } from "../helper/helper";
// import Load from "../load/Load";
import Card from "../card/Card";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() {
  //   request
  //     .get(this.props.url)
  //     .then((response) => {
  //       this.setState({ card: response.data });
  //       // console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <>
        <Navhome />
        <main
          style={{
            backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${Background})`,
          }}
        >
          <section className="container-body">
            <section className="filtro-add">
              <div className="order-container">
                <label htmlFor="order">Ordenar:</label>
                <select name="orderList" id="select">
                  <option value="perros">Perros</option>
                  <option value="gatos">Gatos</option>
                </select>
              </div>
              <div className="ad-container">
                <a href="../add_ad">
                  <label htmlFor="ad">Crear anuncio</label>
                  <img src={AddIcon} width="25px" height="25px" alt="add" />
                </a>
              </div>
            </section>
            {/* Cards */}
            <section className="cards-ads" id="cards-ads">
              {}
              <Card
              // url="/mascotas"
              // key={this.mascota._id}
              // nombre={this.props.nombre}
              // fecha_Perdida={this.props.fechaPerdida}
              // lugar_Perdida={this.props.lugarPerdida}
              // descripcion={this.props.descripcion}
              // foto={this.props.foto}
              />

              {/* <article className="card-pet">
                <img src={CardImg} alt="img"></img>
                <div className="card-body">
                  <h3>Brandom Tercero</h3>
                  <table>
                    <tbody>
                      <tr>
                        <td>Perdido en el CC Cable Plaza</td>
                      </tr>
                      <tr>
                        <td>
                          Fecha de perdida:12/24/36
                          <br />
                          Ultima vez visto: Por fundadores
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Descripción:Tiene collar con el nombre, Lleva ropa de
                          superman, Es muy tranquilo.
                        </td>
                      </tr>
                      <hr />
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
                          <ul>
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
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article> */}
            </section>
          </section>
        </main>
      </>
    );
  }
}
