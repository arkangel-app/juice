import React, { Component } from "react";
import {
  NavLink,
  HashRouter,
  Link,
  BrowserRouter,
  withRouter
} from "react-router-dom";
import {Row,Col } from 'antd';
import phoneTxt from '../images/comoparticiparuy.png';
import zoom from '../images/zoom.png';
import productos from '../images/packsComo-12.png';
import premios from '../images/premiosuy.png';
import tang from '../images/tang.png';
import btang from '../images/btang.png';


import bweb from '../images/bweb.png';
import web from '../images/web.png';
import whats from '../images/whats.png';
import left from '../images/left.png';
import right from '../images/right.png';
import line from '../images/line.png';
import paso1 from '../images/paso1.png';
import paso2 from '../images/paso2.png';
import paso3 from '../images/paso3.png';
import phoneComo from '../images/phoneComo.png';
import movilComo from '../images/movilComo.png';
import RestClient from '../network/restClient';


class ComoParticiparUy extends Component {
  componentDidMount(){
           localStorage.setItem('country','uy');
  }

    handlerClick = () =>{
       let pais=localStorage.getItem('country')
       RestClient.saveClic({pais:pais}).then(response=>{
       });
    }

  render() {
    return (
      <div className="container">
        

        <div>
          <h1 className="titulo part">Cómo<br className="space espacioBases"></br> participar</h1>
        </div>

        <Row className="filaProductos">
          <Col md={11} sm={11} xs={24} className="webCol">
            <img className="arrow" src={left}/>
            <div className="partArgText como">
              Participa aquí en la <span className="titulo miniTit">web</span>
            </div>
            <div className="productos">
              <div className="tangBox">
              <span>
               <Link className="respLink" to={"/participacion"}>
                <img className="btang bpart animated bounceIn" src={bweb}/>
                </Link>
              </span>
              </div>
            </div>
            <div className="nubeComoP animated fadeInLeft">
              <img className="step" src={paso1}/>
              <div className="frontText">
              ingresá a <br></br> <span className="orange">
              <img className="bMedia" src={web}/>
              www.promo-tang.com</span>
              </div>
              <div className="triangle tleft"></div>
            </div>
            <div className="nubeComoP pt h2 datos animated fadeInLeft delay-1s">
              <img className="step" src={paso2}/>
              <div className="frontText">
              cargá tus <span className="orange">
                datos </span>
                </div>
              <div className="triangle tright"></div>
            </div>
            <div className="nubeComoP pt lote  animated fadeInLeft delay-2s">
              <img className="step" src={paso3}/>
              <div className="frontText">
               <span className="orange">
                cargá el lote </span><br></br>
                de tu pack
                </div>
              <div className="triangle tleft"></div>
            </div>
          </Col>
          <Col md={2} sm={2} xs={0}>
            <img className="iline2" src={line}/>
          </Col>
          <Col md={11} sm={11} xs={24}>
            <img className="arrow" src={right}/>
            <div className="partArgText como">
              Participa con<span className="titulo miniTit"> whatsapp</span>
            </div>
            <div className="productos">
              <div className="tangBox">
              <span>
              <a href="https://wa.me/59896700148" target="_blank" onClick={this.handlerClick}>
                <img className="btang bpart animated bounceIn" src={btang}/></a>
              </span>
              </div>
            </div>
          <div className="nubesRight">
            <div className="nubeComoP animated fadeInRight">
            <img className="step" src={paso1}/>
              <div className="frontText">
              escribi <span className="orange">"quiero mas"</span> al <br></br>
              <span className="number arg como"><img className="bMedia2 como" src={whats}/>096-700-148</span>
              </div>
              <div className="triangle tleft"></div>
            </div>
            <div className="nubeComoP pt h2 preguntas animated fadeInRight delay-1s">
              <img className="step" src={paso2}/>
              <div className="frontText">
              respondé <span className="orange">
                las preguntas </span><br></br>
              </div>
              <div className="triangle tright"></div>
            </div>
            <div className="nubeComoP pt lote2 animated fadeInRight delay-2s">
              <img className="step" src={paso3}/>
                <div className="frontText">
               <span className="orange">
                cargá el lote </span><br></br>
                de tu pack
              </div>
              <div className="triangle tleft"></div>
            </div>
          </div>
          </Col>
        </Row>


        <div className="phoneComo arg animated bounceInUp delay-1s">
          <img className="imgPhoneComo" src={phoneComo}/>
        </div>
        <div className="movilComo">
          <img className="imgMovilComo" src={movilComo}/>
        </div>
        <div className="productosBox animated rubberBand delay-2s">
            <img className="imgProductos como" src={productos}/>
        </div>
        <div className="premiosBx animated flipInX delay-2s">
            <img className="imgProductos" src={premios}/>
        </div>
      </div>
    );
  }
}

export default withRouter(ComoParticiparUy);
