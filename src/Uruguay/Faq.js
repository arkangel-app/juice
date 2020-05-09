import React, { Component } from "react";
import lotetang from '../images/lotetang.png';
import piramide from '../images/piramide_uy.jpg';
import TagManager from 'react-gtm-module'
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter,
  Link
} from "react-router-dom";

class Faq extends Component {
  componentDidMount(){
    const tagManagerArgs = {
      gtmId: 'GTM-TS2LLGT',
      dataLayer:{
        event: 'pageview'
      }
    }
    TagManager.initialize(tagManagerArgs)
  }
  render() {
    return (
      <div className="container">

        <div>
          <h1 className="titulo">FAQS</h1>
        </div>
      <div className="nubesContainer">
        <div className="nube nubeFaq">
          <span className="orange">1.</span> ¿Cómo participo en la “SUPER PROMO TANG”? <br></br>
          <span className="resp">
          Para participar de la “SUPER PROMO TANG” tenés que tener 13 años o más y  enviar el mensaje “QUIERO MAS” por WhatsApp al número 096 -700-148. Luego informar a la línea de los datos que te pidan, aceptar las bases y demás condiciones de la promoción y por último, ingresar los 7 primeros números del lote impreso en cualquiera de los productos “Tang”, a partir de la letra L.
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">2.</span> ¿Cómo tengo que agendar el número de WhatsApp para poder participar?<br></br>
          <span className="resp">
          Para poder participar tenés que agendar el número con la siguiente característica: <br/>
          +598  y luego el resto del número: 96 700 148

          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">3.</span> ¿Puedo participar desde WhatsApp Web? <br></br>
          <span className="resp">
            Si, podes ingresar desde tu computadora al siguiente link que te llevara directo a WhatsApp Web para participar:  <a href="https://wa.me/59896700148" target="_blank">Link a conversación de Whatsapp Web</a>
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">4.</span> ¿Dónde encuentro el número de lote?<br></br>
          <span className="resp">
          El número de Lote lo podes encontrar al dorso del paquete en la franja verde superior. Debes ingresar los 7 números luego de la letra L.
          </span>
          <div style={{textAlign:'center'}}><img style={{margin:'auto',width:'150px'}} src={lotetang}/></div>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">5.</span> ¿Cuándo empieza la “SUPER PROMO TANG” y cuando finaliza? <br></br>
          <span className="resp">
            La promoción comienza el 1 de Junio de 2019 y finaliza el 15 de Septiembre de 2019.
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">6.</span> ¿Cuáles son los premios? <br></br>
          <span className="resp">
            <div style={{textAlign:'center',marginTop:10}}><img style={{width:'80%',margin:'auto',maxWidth:'650px'}} src={piramide}/></div>
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">7.</span> ¿Qué packs participan en la promoción?<br></br>
          <span className="resp">
              Podés ver todos los packs participantes en la sección productos. <Link className="linkFaq" to={"/productos"}>Ver productos participantes</Link>
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">8.</span> ¿Quiénes pueden participar de la promoción? <br></br>
          <span className="resp">
          Podes participar de la promoción si tenés 13 años o más,  residís en la República Oriental del Uruguay. Si tenés menos de 13 años podes decirle a un adulto que te ayude a cargar el lote de tu pack!
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">9.</span> No puedo agendar el número en WhatsApp para iniciar la conversación con la Promo Tang. ¿Cómo puedo hacer? <br></br>
          <span className="resp">
          Si no te aparece el contacto de la Promo Tang, podes ingresar al siguiente Link que te llevara directo a la conversación para cargar tu número de lote: <a href="https://wa.me/59896700148" target="_blank">Link a conversación de Whatsapp Web</a>
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">10.</span> El botón no me redirige a la conversación. ¿Qué hago? <br></br>
          <span className="resp">
          Por cualquier consulta podes comunicarte al teléfono 26828259 o al teléfono Celular: 099566869. De lunes a viernes, en días hábiles, de 12:00 a 17:00 horas
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">11.</span> Se interrumpió mi conversación. ¿Cuánto tiempo tengo hasta que vuelva a comenzar la conversación? <br></br>
          <span className="resp">
          Si se interrumpió tu conversación, tenés 6 horas para que la puedas retomar antes de que la conversación vuelva a empezar.
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">12.</span> ¿Cómo me entero si gané uno de los premios de la promoción? <br></br>
          <span className="resp">
          Los potenciales ganadores serán notificados mediante un mensaje de WhatsApp. Es muy importante enviar todos los datos que te pidan para poder completar el proceso y poder reclamar el premio.

          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">13.</span> ¿Cómo y cuándo puedo canjear mi premio? <br></br>
          <span className="resp">
          Los potenciales ganadores serán notificados mediante un mensaje de WhatsApp. Es muy importante enviar todos los datos que te pidan para poder completar el proceso y poder reclamar el premio.
            <br/>
            Los potenciales ganadores serán notificados mediante un mensaje de WhatsApp. Es muy importante enviar todos los datos que te pidan para poder completar el proceso y poder reclamar el premio.
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">14.</span> ¿Soy del interior del país como puedo canjear mi premio? <br></br>
          <span className="resp">
          Los Potenciales Ganadores que residan a más de setenta (70) kilómetros de la Ciudad de Montevideo se les enviara el premio por correo.
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">15.</span> ¿Qué debo presentar para canjear mi premio? <br></br>
          <span className="resp">
          Los Potenciales Ganadores que residan a más de setenta (70) kilómetros de la Ciudad de Montevideo se les enviara el premio por correo.
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">16.</span> Se interrumpió mi conversación y soy potencial ganador de un premio. ¿Cómo puedo hacer? <br></br>
          <span className="resp">
          Los datos de los potenciales ganadores quedan registrados en una base de datos, por lo que si no te comunicaste, nos comunicaremos con vos para coordinar la entrega del premio.
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">17.</span> No gane, ¿Puedo seguir participando? <br></br>
          <span className="resp">
          Los datos de los potenciales ganadores quedan registrados en una base de datos, por lo que si no te comunicaste, nos comunicaremos con vos para coordinar la entrega del premio.
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">18.</span> ¿Cuántos premios puedo ganar? <br></br>
          <span className="resp">
          Solo podrás ganar 1 premio durante el plazo de vigencia de la promoción.
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">19.</span> Tengo varios números de lote iguales. ¿Puedo cargar todos? <br></br>
          <span className="resp">
          Los participantes podrán ingresar un mismo número de lote hasta diez (10) veces en un mismo día y hasta un máximo de veinte (20) veces durante el plazo de vigencia de la promoción
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">20.</span> Mi número de Lote fue usado/es inválido <br></br>
          <span className="resp">
          Envíanos un correo a  consumidores.uy@mdlz.com con la imagen del empaque que muestre el código para poder ayudarte y tus datos: nombre, apellido, documento, teléfono, correo electrónico y código del empaque
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">21.</span> Mi pack no tiene número de lote <br></br>
          <span className="resp">
          Envíanos un correo a consumidores.uy@mdlz.com  con la imagen del empaque que muestre que no aparece el número para poder ayudarte y tus datos: nombre, apellido, documento, teléfono y correo electrónico.
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">22.</span> ¿Cómo hago para participar sin obligación de compra? <br></br>
          <span className="resp">
          Para participar sin obligación de compra tenés que tener 13 años o más, residir en el Territorio, y enviar por mail, dentro del plazo de vigencia de la promoción, un dibujo simple, hecho a mano y coloreado del logo de cualquiera de los productos participantes a la dirección de correo electrónico consumidores.uy@mdlz.com con el Asunto: Promoción “SUPER PROMO TANG”, se les enviara, por el mismo medio, un Código que les permitirá participar de la Promoción. Se enviará, como máximo, un (1) Código por día, por persona.
          </span>
          <div className="triangleFaq"></div>
        </div>

        <div className="nube nubeFaq">
          <span className="orange">23.</span> ¿Dónde puedo hacer una queja sobre el producto? <br></br>
          <span className="resp">
          Si tienes algún comentario o sugerencia te invitamos a comunicarte con nosotros a través del 0 800 333 3333 o enviándonos un correo a consumidores.uy@mdlz.com.
          </span>
          <div className="triangleFaq"></div>
        </div>
      </div>  
      </div>
    );
  }
}

export default Faq;
