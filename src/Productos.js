import React, { Component } from "react";
import TagManager from 'react-gtm-module'
import pack from './images/newProducts.png';
import packArgentina from './images/productosArgentina.png';
import pack2 from './images/packsmovil-15.png';


class Productos extends Component {

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
          <h1 className="titulo prod">Productos<br></br>Participantes</h1>
        </div>
        <div className="packsBox"><img className="packs animated rubberBand" src={packArgentina}/></div>
        <div className="packsMovil"><img className="miniPack" src={packArgentina}/></div>


        <p className="productosNuevos">*EXCEPTUANDO LOS DENOMINADOS TANG FRESH</p>
          </div>
    );
  }
}

export default Productos;
