import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Home from "./Home";
import Participar from './Participar';
import ParticiparUy from './Uruguay/ParticiparUy';
import ComoParticipar from './ComoParticipar';
import ComoParticiparUy from './Uruguay/ComoParticipar';
import ContactUy from './Uruguay/Contact';
import Premios from './Premios';
import WizardWrapped from './wizard/Wizard';
import Exito from './wizard/Exito';
import PremiosUy from './Uruguay/Premios';
import Faq from './Faq';
import CargarCodigo from './wizard/CargarCodigo';
import Premio from './wizard/Premio';
import Mensaje from './wizard/Mensaje';
import FaqUy from './Uruguay/Faq';
import Condiciones from './Condiciones';
import CondicionesUy from './Uruguay/Condiciones'
import Productos from './Productos';
import Contact from './Contact';
import { Form, Input, Modal, Button,Alert,message } from 'antd';
import { slide as Menu } from 'react-burger-menu'
import Footer from './Footer';
import actions from './redux/auth/actions';
import toyStoryLogo from './images/toystory_logo.png';
import woody from './images/woody.png';
import trio from './images/trio.png';
import char from './images/characters-36.png';
import buzz from './images/buzz.png';
import bo from './images/bo.png';
import copyts from './images/copyts.png';
import logoPromo from './images/logo_promo.png';
import footerMobileImage from './images/mobilefooter.png';


const {logout} = actions;

class Main extends Component {

  constructor(props) {
  super(props);
    this.state = {
    vHeader:true,
    image: woody,
    marg:false,
    isOpen:false,
    uy:false,
    footerTxt1:'Promoción sin obligación de compra desde el 1/6/19 al 31/8/19. Consulte territorio, premios, bases y demás condiciones EN www.promo-tang.com',
    footerTxt2:'Polvo para preparar bebida analcohólica artificial dietética de bajas calorías fortificada con vitamina C. Libre de gluten. Sin TACC.'
    }
  }

  handlerWoddy = () => {
    this.setState({image:woody, isOpen:false});
  }
  handlerBo = () => {
    this.setState({image:bo, isOpen:false});
  }
  handlerTrio = () => {
    this.setState({image:char, isOpen:false});
  }
  handlerBuzz = () => {
    this.setState({image:buzz, isOpen:false});
  }

  componentDidMount(){
  let w = window.location.pathname;

  if(w=='/'){
    this.setState({vHeader:false,marg:true,
      footerTxt1:'Promoción sin obligación de compra desde el 1/6/19 al 31/8/19 / URUGUAY: desde el 1/6/19 al 15/9/19. Consulte territorio, premios, bases y demás condiciones en www.promo-tang.com',
      footerTxt2: 'Polvo para preparar bebida analcohólica artificial dietética de bajas calorías fortificada con vitamina C. Libre de gluten. Sin TACC. / URUGUAY: ADICIONADA con vitamina C. Libre de gluten. Sin TACC.'

    });
    this.handlerTrio();
  }

  let p=localStorage.getItem('country')
  if(p=='uy' && w!='/'){
    this.setState({
      uy:true,
      footerTxt1:'Promoción sin obligación de compra desde el  1/6/19 al 15/9/19. Consulte territorio, premios, bases y demás condiciones en www.promo-tang.com',
      footerTxt2:'Polvo para preparar bebida analcohólica artificial dietética de bajas calorías adicionado con vitamina C sabor a Naranja. Libre de gluten. Sin TACC.'
    })
  }
  }

  handleStateChange (state) {
    this.setState({isOpen: state.isOpen})
  }

  render() {
    const ScrollToTop = () => {
      window.scrollTo(0, 0);
      return null;
    };
    const { getFieldDecorator } = this.props.form;
    const { vHeader,isOpen,uy } = this.state;
    return (
      <BrowserRouter>
        <div className="container">
          <Row type="flex">
            <Col xs={24} md={vHeader==false?14:16} className="mainContainer">
            <div className="rwd" style={{display: this.state.vHeader ? 'block' : 'none' }}>
              <a href={"/"}><img className="responsiveLogo" src={logoPromo}/></a>
              {this.state.uy ?
              <Menu isOpen={isOpen} onStateChange={(state) => this.handleStateChange(state)} className="responsiveMenu">
                <li className="menuItem"><Link className="respLink" to={"/participar-uy"} onClick={this.handlerWoddy}>PARTICIPAR</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/comoParticipar-uy"} onClick={this.handlerBo}>CÓMO PARTICIPAR</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/premios-uy"} onClick={this.handlerBuzz}>PREMIOS</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/faq-uy"} onClick={this.handlerBo}>FAQS</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/Condiciones-uy"} onClick={this.handlerBuzz}>BASES Y CONDICIONES</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/productos"} onClick={this.handlerWoddy}>PRODUCTOS</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/contacto-uy"} onClick={this.handlerWoddy}>CONTACTO</Link></li>
              </Menu> :
              <Menu isOpen={isOpen} onStateChange={(state) => this.handleStateChange(state)} className="responsiveMenu">
                <li className="menuItem"><Link className="respLink" to={"/participar"} onClick={this.handlerWoddy}>PARTICIPAR</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/comoParticipar"} onClick={this.handlerBo}>CÓMO PARTICIPAR</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/Premios"} onClick={this.handlerBuzz}>PREMIOS</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/faq"} onClick={this.handlerBo}>FAQS</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/Condiciones"} onClick={this.handlerBuzz}>BASES Y CONDICIONES</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/productos"} onClick={this.handlerWoddy}>PRODUCTOS</Link></li>
                <li className="menuItem"><Link className="respLink" to={"/contacto"} onClick={this.handlerWoddy}>CONTACTO</Link></li>
              </Menu>}

            </div>
              <div className="menuDesktop" style={{display: this.state.vHeader ? 'block' : 'none' }}>
                <div className="logoHeader">
                  <a href={"/"} onClick={this.handlerTrio}><img src={logoPromo}/></a>
                </div>
                {this.state.uy ?
                  <div className="menuOpciones">
                    <ul className="menuSuperior">
                      <li className="menuItem"><Link to={"/faq-uy"} onClick={this.handlerBo}>FAQS</Link></li>
                      <li className="menuItem"><Link to={"/Condiciones-uy"} onClick={this.handlerBuzz}>BASES Y CONDICIONES</Link></li>
                      <li className="menuItem"><Link to={"/productos"} onClick={this.handlerWoddy}>PRODUCTOS</Link></li>
                      <li className="menuItem"><Link to={"/contacto-uy"} onClick={this.handlerWoddy}>CONTACTO</Link></li>
                    </ul>
                    <ul className="menuBarraAzul">
                      <li className="menuItem"><Link to={"/participar-uy"} onClick={this.handlerWoddy}>PARTICIPAR</Link></li>
                      <li className="menuItem"><Link to={"/comoParticipar-uy"} onClick={this.handlerBo}>CÓMO PARTICIPAR</Link></li>
                      <li className="menuItem"><Link to={"/premios-uy"} onClick={this.handlerBuzz}>PREMIOS</Link></li>
                    </ul>
                  </div> :
                  <div className="menuOpciones">
                    <ul className="menuSuperior">
                      <li className="menuItem"><Link to={"/faq"} onClick={this.handlerBo}>FAQS</Link></li>
                      <li className="menuItem"><Link to={"/Condiciones"} onClick={this.handlerBuzz}>BASES Y CONDICIONES</Link></li>
                      <li className="menuItem"><Link to={"/productos"} onClick={this.handlerWoddy}>PRODUCTOS</Link></li>
                      <li className="menuItem"><Link to={"/contacto"} onClick={this.handlerWoddy}>CONTACTO</Link></li>
                    </ul>
                    <ul className="menuBarraAzul">
                      <li className="menuItem"><Link to={"/participar"} onClick={this.handlerWoddy}>PARTICIPAR</Link></li>
                      <li className="menuItem"><Link to={"/comoParticipar"} onClick={this.handlerBo}>CÓMO PARTICIPAR</Link></li>
                      <li className="menuItem"><Link to={"/Premios"} onClick={this.handlerBuzz}>PREMIOS</Link></li>
                    </ul>
                  </div>
                }

              </div>
              <div className="routesContainer">
                <Route component={ScrollToTop} />
                <Route exact path="/" component={Home}/>
                <Route exact path="/participar" component={Participar}/>
                <Route exact path="/comoParticipar" component={ComoParticipar}/>
                <Route exact path="/Premios" component={Premios}/>
                <Route exact path="/Condiciones" component={Condiciones}/>
                <Route exact path="/Condiciones-uy" component={CondicionesUy}/>
                <Route exact path="/productos" component={Productos}/>
                <Route exact path="/faq" component={Faq}/>
                <Route exact path="/faq-uy" component={FaqUy}/>
                <Route exact path="/contacto" component={Contact}/>
                <Route exact path="/contacto-uy" component={ContactUy}/>
                <Route exact path="/participar-uy" component={ParticiparUy}/>
                <Route exact path="/comoParticipar-uy" component={ComoParticiparUy}/>
                <Route exact path="/premios-uy" component={PremiosUy}/>
                <Route exact path="/participacion" component={WizardWrapped}/>
                <Route exact path="/codigo" component={CargarCodigo}/>
                <Route exact path="/mensaje" component={Mensaje}/>
                <Route exact path="/ganador" component={Premio}/>
                <Route exact path="/final" component={Exito}/>

              </div>
            </Col>
            <Col xs={24} md={vHeader==false?10:8} className="siderView">
              <div className={`siderContainer ${(this.state.vHeader==false?'siderContainerHome':'')}`} >
                <div className="desktopFooter">
                  <div className="toystoyLogo animated rubberBand"><img src={toyStoryLogo}/></div>
                  <div className="personajeContainer animated zoomIn"><img src={this.state.image} style={{marginTop: this.state.marg ? '60px' : 'unset' }}/></div>
                </div>
                <div className="mobileFooter">
                  <Row>
                    <Col xs={8}><img src={toyStoryLogo}/></Col>
                    <Col xs={16}><img src={footerMobileImage}/></Col>
                  </Row>
                </div>
                <img className="copyts" src={copyts}/>
              </div>
            </Col>
          </Row>
          <Footer txt={this.state.footerTxt1} txt2={this.state.footerTxt2} redes={this.state.vHeader}/>
        </div>
      </BrowserRouter>
    );
  }
}
// <a className="forgot-ses" onClick={this.showModal2}>
// Olvidé mi contraseña</a>
const WrappedMain = Form.create({ name: 'home' })(Main);

export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {logout}
)(WrappedMain);
