import React, { Component } from "react";
import { connect } from 'react-redux';
import TagManager from 'react-gtm-module';
import { Row,Col,Form, Input, Modal, Button, Label,Alert,message,Select,Checkbox,DatePicke } from 'antd';
import actions from '../redux/auth/actions';
import {
  Redirect,
  HashRouter,
  Link,
  withRouter
} from "react-router-dom";
import step from '../images/paso1.png';
import step2 from '../images/paso2.png';
import step3 from '../images/paso3.png';
import stepActive from '../images/active1.png';
import active2 from '../images/active2.png';
import active3 from '../images/active3.png';
import guide from '../images/guide.png';


const {logout} = actions;

class Mensaje extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error:undefined,
      loadingCodigo: false,
      vCargarCodigo: true,
      vMessage: false,
      vGanador: false,
      premio: null,
      paso1: step,
      activateStep2: active2,
      activateStep3: step3,
      imagePreviewUrl: '',
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
  }

    handleSubmit = (e)=>{
      e.preventDefault();

      this.props.history.push("/mensaje");

    }

  render() {
    const { vCargarCodigo, vMessage, activateStep2, activateStep3 } = this.state;

    const { token } = this.props.profile?this.props.profile:{};
    if (token==null || token==undefined || token==undefined) {
      return <Redirect to={'/participar'} />;
    }


    return (
    <div>
    <h1 className="titulo">PARTICIPACIÓN</h1>
    <div className="steps clearfix">
          <ul role="tablist">
            <li role="tablist" className="">

                <img id="s1" className="step-img" src={step}/>
                <div className="spacew"></div>
            </li>
            <li role="tablist" className="">

                <img id="s2" className="step-img" src={step2}/>
                <div className="spacew"></div>
            </li>
            <li role="tablist" className="">

                <img id="s3" className="step-img" src={active3}/>

            </li>
          </ul>
      </div>
      <div className="container wizard mensaje">

          {/* <div className="msg">
          ¡ya completaste tus datos,
          ahora comunicate con nosotros al
          <div className="bigNumber">
          011 5789 7132
          </div>
          para coordinar la entrega de tu premio!
          </div> */}

          <div className="msg">
          ¡Esta vez no se dio, pero si seguís participando tenés más chances de ganar!
          </div>

      </div>
      <div className="bt-box">
     <span>
            <Button loading={this.state.loading}
            className="btn animated rubberBand" htmlType="submit">
              <Link className="respLink" to={"/participar"} onClick={this.props.logout}>
              IR AL INICIO</Link>
            </Button>
            <Button loading={this.state.loading}
            className="btn nLote animated rubberBand" htmlType="submit">
              <Link className="respLink" to={"/codigo"}>
             CARGAR UN NUEVO LOTE</Link>
             </Button>

      </span>
      </div>

    </div>
    );
  }
}
export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {logout}
)(withRouter(Mensaje));
