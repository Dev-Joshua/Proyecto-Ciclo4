import React from "react";
import Navhome from "../navhome/navhome";
import "./home.css";
import AddIcon from "../../assets/icon/add-anuncio - color.png";
import CardImg from "../../assets/img/4.jpg";
import Background from "../../assets/img/home.jpg";

export default class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};
  render() {
    return (
      <>
        <Navhome />
        <main
          style={{
            backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${Background})`,
          }}
        >
          <section class="filtro-add">
            <div class="order-container">
              <label for="order">Ordenar:</label>
              <select name="orderList" id="select">
                <option value="perros">Perros</option>
                <option value="gatos">Gatos</option>
              </select>
            </div>
            <div class="ad-container">
              <a href="../html/add_ad.html">
                <label for="ad">Crear anuncio</label>
                <img src={AddIcon} width="40px" height="40px" alt="add" />
              </a>
            </div>
          </section>
          {/* Cards */}
          <section class="cards-ads" id="cards-ads">
            <article class="card-pet">
              <img src={CardImg} alt="img" />
              <div class="card-body">
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
                <div class="container-ul">
                  <div class="button-container">
                    <button class="contactar" id="contactar">
                      Contactar
                    </button>
                    <div id="modal-container" class="modal-container">
                      <div class="modal">
                        <div id="close" class="icon-closed">
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
                              <i class="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i class="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i class="fab fa-whatsapp"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article class="card-pet">
              <img src={CardImg} alt="img"></img>
              <div class="card-body">
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
                <div class="container-ul">
                  <div class="button-container">
                    <button class="contactar" id="contactar">
                      Contactar
                    </button>
                    <div id="modal-container" class="modal-container">
                      <div class="modal">
                        <div id="close" class="icon-closed">
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
                              <i class="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i class="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i class="fab fa-whatsapp"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            {/* <article class="card-pet">
        <img src="https://revista.weepec.com/wp-content/uploads/2019/07/chihuahua-in-studio-BVACJ8D.jpg" alt="">
        <div class="card-body">
          <h3>Brandom Tercero</h3>
          <table>
            <tbody>
              <tr>
                <td>Perdido en el CC Cable Plaza</td>
              </tr>
              <tr>
                <td>Fecha de perdida:12/24/36<br>Ultima vez visto:
                  Por fundadores</td>
              </tr>
              <tr>
                <td>Descripción:Tiene collar con el nombre, Lleva ropa de superman, Es muy tranquilo.</td>
              </tr>
              <hr />
            </tbody>
          </table>
          <hr>
          <div class="container-ul">
            <div class="button-container">
              <button class="contactar" id="contactar">Contactar</button>
              <div id="modal-container" class="modal-container">
                <div class="modal">
                  <div id="close" class="icon-closed">
                    <img src="../assets/icon/closed - color.png" width="20px" height="20px" alt="cerrar">
                  </div>
                  <ul>
                    <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article> */}
          </section>
        </main>
      </>
    );
  }
}
