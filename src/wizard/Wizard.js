import React, { Component } from "react";
import TagManager from 'react-gtm-module';
import { Row,Col,Form, Input, Modal, Button, Label,Alert,message,Select,Checkbox,DatePicke } from 'antd';
import Register from './Register'
import step from '../images/paso1.png';
import step2 from '../images/paso2.png';
import step3 from '../images/paso3.png';
import stepActive from '../images/active1.png';
import active2 from '../images/active2.png';
import active3 from '../images/active3.png';

class Wizard extends Component {

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
      activateStep2: step2,
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

  render() {
    const { vCargarCodigo, vMessage, activateStep2, activateStep3 } = this.state;

    return (
  <div className="container">
    <h1 className="titulo">PARTICIPACIÓN</h1>
    <div className="steps clearfix">
          <ul role="tablist">
            <li role="tablist" className="">

                <img id="s1" className="step-img" src={stepActive}/>
                <div className="spacew"></div>
            </li>
            <li role="tablist" className="">

                <img id="s2" className="step-img" src={this.state.activateStep2}/>
                <div className="spacew"></div>
            </li>
            <li role="tablist" className="">

                <img id="s3" className="step-img" src={this.state.activateStep3}/>

            </li>
          </ul>
      </div>
      <div className="container">
        <Register/>
      </div>
  </div>
        );
      }
    }
const WizardWrapped = Form.create({ name: 'registro' })(Wizard);
export default WizardWrapped;
