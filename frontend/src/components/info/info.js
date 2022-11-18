import React from "react";
import Navhome from "../navhome/navhome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import "./info.css";
export default class info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navhome />
        <main class="container-main__info">
          <section class="container-informacion">
            <div>
              <article class="text-info">
                <div className="icon-closed__info">
                  <a href="../login">
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </a>
                </div>
                <h1>Sobre PetLost</h1>
                <p>
                  Para muchas personas, sus mascotas son su compañía.
                  Proporcionan amor y compañía a las personas que lo necesitan.
                  Por desgracia, no todas las mascotas encuentran un hogar
                  cariñoso. La mayoría de las personas que han perdido a su
                  mascota le dirán que encontrarla es una experiencia
                  increíblemente emotiva. Incluso si te alegras de tener a tu
                  mascota de vuelta, encontrarla puede ser desgarrador.
                </p>
                <p>
                  Al mirar un mapa, puede resultarle difícil encontrar su casa.
                  Sin su mascota, caminar puede ser agotador y desalentador.
                  También puede tener problemas para llamar a su mascota por su
                  nombre y hacer ruidos fuertes. Si tu mascota se ha perdido,
                  tendrás que pedir ayuda a otras fuentes. Por ejemplo, puedes
                  llamar al refugio de animales local o a la policía. Habla con
                  claridad y sinceridad cuando lo hagas; un animal angustiado
                  puede malinterpretar tus palabras y actuar precipitadamente.
                </p>
                <p>
                  Encontrar una mascota perdida puede llevar tiempo y paciencia.
                  Debe buscar a fondo en su casa y en las zonas circundantes.
                  También debe preguntar a sus familiares y amigos si tienen
                  alguna información sobre el paradero de su mascota. Es posible
                  que también tenga que buscar a su mascota en Internet: es una
                  buena forma de comprobar si hay mascotas perdidas en su zona.
                  También es una buena manera de ponerse en contacto con los
                  servicios de rescate de animales si su perro o gato se ha
                  escapado de casa. Por último, puede llamar a varias oficinas
                  veterinarias y preguntar por animales que puedan haberse
                  perdido en su vecindario.
                </p>
                <p>
                  Si has perdido a tu mascota, hay varias cosas que debes hacer
                  si quieres que vuelva sana y salva. ¿Recuerdas que pediste
                  ayuda cuando buscabas a tu mascota? Eso es importante ahora:
                  mientras busca a su mascota, mantenga la calma y hable
                  despacio y con claridad para evitar que el animal se estrese o
                  se lastime. Es probable que su mascota actúe de forma
                  diferente a la habitual y que se esconda o muestre signos de
                  angustia al separarse de sus dueños. Si esto ocurre, mantenga
                  la calma y tranquilícelo con palabras suaves y afecto.
                </p>
                <p>
                  Encontrar una mascota perdida puede ser una experiencia
                  emotiva para cualquiera que la tenga. A la gente le resulta
                  especialmente difícil cuando su mascota se ha perdido, pero
                  saber cómo abordar la tarea la hace más fácil. Encontrará a su
                  mascota perdida más rápidamente si pide ayuda a otras fuentes
                  y busca a fondo mientras la busca. La aplicación de estos
                  pasos casi le garantizará encontrar a sus mascotas perdidas
                  sanas y salvas.
                </p>
              </article>
            </div>
          </section>
        </main>
      </>
    );
  }
}
