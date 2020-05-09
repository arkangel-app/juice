import React, { Component } from "react";
import tab from '../images/tab.png';
import speak from '../images/speak.png';
import led from '../images/led.png';
import watch from '../images/watch.png';
import phone from '../images/phone.png';
import head from '../images/head.png';
import { Row, Col } from 'antd';

class Premios extends Component {

  componentDidMount(){

  }


  render() {
    return (
    <div className="container premios">
      <div>
        <h1 className="titulo">Premios</h1>
      </div>
      <Row className="primerRow">
        <Col  md={2} sm={0} xs={0}>
        </Col>
        <Col  md={11} sm={24} xs={24}>
          <img className="premioTv animated pulse" src={led}/>
        </Col>
        <Col  md={10} xs={24} sm={24} className="dobleCol">
          <Row>
            <Col md={24} xs={12} className="animated bounceInDown">
                <img className="tab award" src={tab}/>
            </Col>
            <Col md={24} xs={12} className="animated bounceInUp">
                <img className="speak award" src={speak}/>
            </Col>
          </Row>
        </Col>
        <Col  md={2} sm={0} xs={0}>
        </Col>
      </Row>
      <Row className="lastRow animated bounceInUp">
        <Col md={8} xs={12}>
            <img className="phone award" src={phone}/>
        </Col>
        <Col md={6} xs={12}>
            <img className="watch award" src={watch}/>
        </Col>
        <Col md={8} xs={24}>
            <img className="award" src={head}/>
        </Col>
        <Col  md={2} sm={0} xs={0}>
        </Col>
      </Row>


        <div>
          <p className="miniText">
            imágenes no contractuales a solo efecto ilustrativo
          </p>
        </div>
    </div>


    );
  }
}

export default Premios;
