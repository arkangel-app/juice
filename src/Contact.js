import React, { Component } from "react";
import TagManager from 'react-gtm-module'


class Contact extends Component {
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
      <div className="containerContact">
        <div>
          <h1 className="titulo">CONTACTO</h1>
        </div>
      <div className="nubesContainer">
        <div className="nube contact animated fadeInRight">
          <div className="contactxt">
            Para cualquier información aclaración referente <br></br>
            a LA PROMO, mandar un correo electrónico a
          </div>
          <div className="correo">
            consultas.ar@mdlz.com
          </div>
          <div className="contactxt">
          con asunto <span className="orange">"Promoción SUPER PROMO TANG"
          </span>
          </div>
          <div className="triangleFaq"></div>
        </div>
        <div className="nube contact phone animated fadeInLeft">
          <div className="contactxt">
            TAMBIÉN PODÉS COMUNICARTE VÍA TELEFÓNICA AL
          </div>
          <div className="correo">
            011 5789 7132
          </div>
          <div className="triangle phone"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default Contact;
