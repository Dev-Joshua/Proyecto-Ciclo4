import React from "react";
import Navhome from "../navhome/navhome";
import "./publishing.css";

export default class publishing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navhome />
        <main className="container-main__publishing ">
          <section className="publishing-user">
            <h2>
              ¡Revisa tus publicaciones, elimina o<br /> registra un nuevo
              anuncio!
            </h2>
            <button className="edit">
              <a href="./add_ad.html">Crear anuncio</a>
            </button>
            <div className="cards-ads" id="cards-ads">
              <article className="card" id="">
                <h4>Brandom Tercero</h4>
                <table align="center">
                  <tbody>
                    <tr>
                      <td>Perdido en el CC Cable Plaza</td>
                    </tr>
                    <tr>
                      <td>Fecha de perdida:12/24/36</td>
                    </tr>
                    <tr>
                      <td>
                        Descripción: Tiene collar con el nombre, lleva ropa de
                        superman, es muy tranquilo.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input type="button" value="Eliminar" onclick="deleteAdd()" />
              </article>
            </div>
          </section>
        </main>
      </>
    );
  }
}
