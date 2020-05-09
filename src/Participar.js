import React, { Component } from "react";
import {
  Link,Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import { Form, Input, Modal, Button, Label,Alert,message,Row,Col } from 'antd';
import TagManager from 'react-gtm-module'
import tang from './images/tang.png';
import btang from './images/btang.png';
import bweb from './images/bweb.png';
import web from './images/web.png';
import whats from './images/whats.png';
import premios from './images/premios.png';
import left from './images/left.png';
import right from './images/right.png';
import line from './images/line.png';
import RestClient from './network/restClient';

class Participar extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }

  }
  componentDidMount(){
    const tagManagerArgs = {
      gtmId: 'GTM-TS2LLGT',
      dataLayer:{
        event: 'pageview'
      }
    }
    TagManager.initialize(tagManagerArgs)
    localStorage.setItem('country','ar');
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
        <h1 className="titulo part">Participar</h1>
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
            <a className="linkNube" href="https://wa.me/5491160346668" target="_blank" onClick={this.handlerClick}>
            escribi <span className="orange">"quiero mas"</span> al <br></br>
            <span className="number arg"><img className="bMedia2" src={whats}/>11-6034-6668</span>
            <div className="triangle"></div>
            </a>
          </div>
          <div className="productos">
            <div className="tangBox">
            <span>
            <a href="https://wa.me/5491160346668" target="_blank" onClick={this.handlerClick}>
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
      <Row className="premiosRow animated bounceInUp">
        <div className="premioBox"><img className="premios" src={premios}/></div>
      </Row>
    </div>
);
  }
}
const WrappedParticipar = Form.create({ name: 'recover_pass' })(Participar);
export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {}
)(WrappedParticipar);
