import React, { Component } from "react";
import TagManager from 'react-gtm-module'
import tab from './images/tab.png';
import speak from './images/speak.png';
import led from './images/led.png';
import gift from './images/gift.png';
import watch from './images/watch.png';
import phone from './images/phone.png';
import head from './images/head.png';
import coupon from './images/coupon.png';
import wal from './images/wal.png';
import { Row, Col } from 'antd';

class Premios extends Component {

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
    <div className="container premios">
      <div>
        <h1 className="titulo">Premios</h1>
      </div>
      <Row className="primerRow">
        <Col  md={12} sm={24} xs={24}>
          <img className="premioTv animated pulse" src={led}/>
        </Col>
        <Col  md={12} xs={24} sm={24} className="dobleCol">
          <Row className="animated bounceInDown">
            <Col md={12} xs={12}>
                <img className="tab award" src={tab}/>
            </Col>
            <Col md={12} xs={12}>
                <img className="phone award" src={phone}/>
            </Col>

          </Row>
          <Row className="animated bounceInUp">
            <Col md={12} xs={12}>
                <img className="watch award" src={watch}/>
            </Col>
            <Col md={12} xs={12}>
                <img className="speak award" src={speak}/>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="lastRow">
        <Col md={6} xs={12}>
            <img className="gift award animated slideInRight" src={gift}/>
        </Col>
        <Col md={6} xs={12}>
            <img className="wal award animated slideInRigh" src={wal}/>
        </Col>
        <Col md={6} xs={12}>
            <img className="coupon award animated slideInLeft" src={coupon}/>
        </Col>
        <Col md={6} xs={12}>
            <img className="head award animated slideInLeft" src={head}/>
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
