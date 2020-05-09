import React, { Component } from "react";
import {
  NavLink,
  HashRouter,
  Link,
  BrowserRouter,
  withRouter
} from "react-router-dom";

import { Row, Col } from 'antd';
import TagManager from 'react-gtm-module'
import packhome from './images/newPacksHome.png';
import ur from './images/ur.png';
import uruguay from './images/uruguay.png';
import ar from './images/ar.png';
import argentina from './images/argentina.png';
import logo from './images/logo_promo.png';


class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      pais:'ar'
    }
    this.setCountryUy = this.setCountryUy.bind(this);
    this.setCountryAr = this.setCountryAr.bind(this);
  }
  componentDidMount(){
    const tagManagerArgs = {
      gtmId: 'GTM-TS2LLGT',
      dataLayer:{
        event: 'pageview'
      }
    }
    TagManager.initialize(tagManagerArgs)

    localStorage.clear();

  }


  setCountryUy(e) {
    e.preventDefault();
    localStorage.setItem('country','uy');
    //this.props.history.push('/participar-uy');
    window.location = '/participar-uy';
  }

  setCountryAr(e) {
    e.preventDefault();
    localStorage.setItem('country','ar');
    //this.props.history.push('/participar');
    window.location = '/participar';
  }


  render() {
    return (
      <div className="container">
        <div className="containerHome">
          <div className="line"></div>
          <div className="logoBox">
            <img className="logoHome" src={logo}/>
          </div>
        </div>
        <div>
          <h1 className="titulo home">ELIGE TU PAÍS</h1>
        </div>
        <div className="containerHomeRow">
          <Row className="homeRow">
            <Col md={12} xs={12}><a onClick={this.setCountryAr.bind(this)}><img className="country  animated fadeIn" src={ar}/>
            <div><img className="countryArg animated fadeInRight" src={argentina}/></div></a>
          </Col>
            <Col md={12} xs={12}><a onClick={this.setCountryUy.bind(this)}><img className="country  animated fadeIn" src={ur}/>
            <div><img className="countryName animated fadeInLeft" src={uruguay}/></div></a>
            </Col>
          </Row>
        </div>
        <Row>
          <div className="sobresBox">
              <img className="packhome animated slideInUp" src={packhome}/>
          </div>
        </Row>
      </div>
    );
  }
}


export default withRouter(Home);
