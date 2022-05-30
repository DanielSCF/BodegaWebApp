import React from "react";
import "../styles/Home.css";

export default function HomePage() {
  return (
    <>
      <header
        className="w3-display-container w3-content w3-wide"
        style={{ maxWidth: 1300, minWidth: 500 }}
        id="home"
      >
        <img
          className="w3-image"
          src="https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg"
          alt="Eduale"
          width="1600"
          height="500"
        />
        <div className="w3-display-bottomleft w3-padding-large w3-opacity">
          <h1 className="w3-xxlarge">EDUALE</h1>
        </div>
      </header>

      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <div className="w3-row w3-padding-64" id="about">
          <div className="w3-col m6 w3-padding-large w3-hide-small">
            <img
              src="https://megaemprendedor.com/wp-content/uploads/2019/09/abrir-una-bodega.jpg"
              className="w3-round w3-image w3-opacity-min"
              alt="Table Setting"
              width="600"
              height="750"
            />
          </div>
          <div className="w3-col m6 w3-padding-large">
            <h1 className="w3-center">Acerca de Eduale</h1>
            <br />
            <p className="w3-large">
              La bodega multiservicios "EDUALE" se encuentra ubicada en la
              ciudad de Jaén. Brinda una buena atención al publico, con los
              productos que necesitas en tu hogar, oficina o de cualquier labor
              que este a su alcance.
            </p>
          </div>
        </div>

        <hr />
        <div className="w3-row w3-padding-64" id="menu">
          <div className="w3-col l6 w3-padding-large">
            <h1 className="w3-center">Misión y visión</h1>
            <br />
            <h4>Misión</h4>
            <p className="w3-text-grey">
              Dentro del sector ser la bodega de mayor confianza, seguir siendo
              un opción segura para nuestros clientes en un mercado atomizado
              con infinidad de marcas. Destacando por ser un negocio eficiente y
              llegar a ser reconocidp a nivel nacional.
            </p>
            <br />

            <h4>Visión</h4>
            <p className="w3-text-grey">
              Garantizar la continuidad del negocio familiar manteniendo los
              principios y valores de la familia, respetando la tradición y
              aplicando el conocimiento, la innovación y la tecnología para
              ofrecer vinos de calidad a nuestros clientes.
            </p>
            <br />
          </div>

          <div className="w3-col l6 w3-padding-large">
            <img
              src="https://www.udep.edu.pe/hoy/wp-content/uploads/sites/49/2020/07/Bodega.jpg"
              className="w3-round w3-image w3-opacity-min"
              alt="Menu"
              style={{ width: 600 }}
            />
          </div>
        </div>

        <hr />
        <div className="w3-container w3-padding-64" id="contact">
          <h1>Contacto</h1>
          <br />
          <p>
            Si deseas saber dónde encontrar nuestros productos, obtener
            información acerca de dicho producto , o si tienes alguna
            sugerencia, comentarios o preguntas acerca de promociones ,servicios
            ,etc … estamos más que encantados de ayudarte .
          </p>
          <p className="w3-text-blue-grey w3-large">
            <b>
              Lugar de Tremoedo, 46 36628 – Vilanova de Arousa Jaén (Cajamarca)
            </b>
          </p>
          <p>
            Puedes ponerte en contacto con nosotros escribiendo un correo
            electrónico a bodegaeduale@gmail.com o dirigirte a nuestra
            instalación del negocio.
          </p>
        </div>
      </div>
    </>
  );
}
