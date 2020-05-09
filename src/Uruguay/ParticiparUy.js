import React, { Component } from "react";
import {
  NavLink,
  HashRouter,
  Link,
  BrowserRouter,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import { Form, Input, Modal, Button, Label,Alert,message,Row,Col } from 'antd';
import TagManager from 'react-gtm-module'
import tang from '../images/tang.png';
import premios from '../images/premiosuy.png';
import btang from '../images/btang.png';
import RestClient from '../network/restClient';
import bweb from '../images/bweb.png';
import web from '../images/web.png';
import whats from '../images/whats.png';
import left from '../images/left.png';
import right from '../images/right.png';
import line from '../images/line.png';


class ParticiparUy extends Component {

  constructor(props) {
    super(props);

  }
  componentDidMount(){
    const tagManagerArgs = {
      gtmId: '',
      dataLayer:{
        event: 'pageview'
      }
    }
    TagManager.initialize(tagManagerArgs)
    localStorage.setItem('country','uy');
  }

   handlerClick = () =>{
         let pais=localStorage.getItem('country')
         RestClient.saveClic({pais:pais}).then(response=>{
         });
   }



  render() {

    return (
    <div>
      <div>
        <h1 className="titulo">Participar</h1>
      </div>
 
      <Row className="filaProductos">
        <Col md={11} xs={24} className="webCol">
          <img className="arrow" src={left}/>
          <div className="partArgText">
            Participa aquí en la <span className="titulo miniTit">web</span>
          </div>
          <div className="nube part arg animated bounceInLeft">
            <Link className="linkNube" to={"/participacion"}>
            cargá tus <br></br> <span className="orange">
            <img className="bMedia" src={web}/>
            datos aquí</span>
            <div className="triangle"></div>
            </Link>
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
        </Col>
        <Col md={2} xs={24}>
          <img className="iline" src={line}/>
          <div className="dashLine participar"></div>
        </Col>
        <Col md={11} xs={24}>
          <img className="arrow" src={right}/>
          <div className="partArgText">
            Participa con<span className="titulo miniTit"> whatsapp</span>
          </div>
          <div className="nube part arg whatsapp animated bounceInRight">
            <a className="linkNube" href="https://wa.me/59896700148" target="_blank" onClick={this.handlerClick}>
              escribi <span className="orange">"quiero mas"</span> al <br></br>
              <span className="number arg"><img className="bMedia2" src={whats}/>096-700-148</span>
              <div className="triangle"></div>
            </a>
          </div>
          <div className="productos">
            <div className="tangBox">
            <span>
            <a href="https://wa.me/59896700148" target="_blank" onClick={this.handlerClick}>
              <img className="btang bpart animated bounceIn" src={btang}/></a>
            </span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="sRow">
        <div className="sBox">
          <img className="iSobres" src={tang}/>
        </div>
      </Row>


      <Row className="premiosRow">
        <div className="premioBox animated bounceInUp"><img className="premios" src={premios}/></div>
      </Row>
    </div>
);
  }
}
export default withRouter(ParticiparUy);
