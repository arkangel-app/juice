import React, { Component } from "react";
import { connect } from 'react-redux';
import TagManager from 'react-gtm-module';
import { Row,Col,Form, Input, Modal, Button, Label,Alert,message,Select,Checkbox,DatePicke } from 'antd';
import RestClient from '../network/restClient';
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

class CargarCodigo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error:undefined,
      loadingCodigo: false,
      codigoIngresado:false,
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
      this.props.form.validateFields(['codigo'],(err, values) => {
        if (!err) {
          this.setState({loadingCodigo:true,error:undefined});
          RestClient.ingresarCodigo({codigo:values.codigo}).then(ingresado=>{
          let premio=null;
            if(ingresado.data.premio!=null){
              premio= ingresado.data.premio;
            }
            this.setState({loadingCodigo:false, codigoIngresado:true,premio:premio});
          }).catch(error=>{
            console.log(error)
            this.setState({loadingCodigo:false,error:error.message});
          })
        }
      })
  }

  render() {
    const Option = Select.Option;
    const { getFieldDecorator } = this.props.form;
    const { vMessage, activateStep2, activateStep3 } = this.state;

    const { token } = this.props.profile?this.props.profile:{};
    if (token==null || token==undefined || token==undefined) {
      return <Redirect to={'/participar'} />;
    }
    if ((this.state.codigoIngresado==true) && (this.state.premio==null)) {
      return <Redirect to={{
        pathname: '/mensaje'
      }}/>;
  } else if ((this.state.codigoIngresado==true) && (this.state.premio!=null)) {
        return <Redirect to={{
          pathname: '/ganador',
          state: { premio: this.state.premio }
        }}/>;
      }

    //this.props.history.push("/mensaje");

    const validateNumbers = (rule, value, callback) => {
      if (!/^[0-9]*$/i.test(value)) {
        callback("Sólo números");
      } else {
        callback();
      }
    };

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

                <img id="s2" className="step-img" src={this.state.activateStep2}/>
                <div className="spacew"></div>
            </li>
            <li role="tablist" className="">

                <img id="s3" className="step-img" src={this.state.activateStep3}/>

            </li>
          </ul>
      </div>
    <Form onSubmit={this.handleSubmit}>
      <div className="container wizard codigo">
        <p className="profilenameCodigo">{this.props.profile.fullname}</p>

      {this.state.error && <Alert message={this.state.error} type="error" />}

      <Form.Item
         label="Cargá el lote de tu pack:" className="lote"
       >
         {getFieldDecorator('codigo', {
           rules: [
             {required: true, message: 'Por favor ingresa el lote de tu pack'},
             {len: 7, message: 'El código es inválido'},
             {validator: validateNumbers}
           ],
         })(
           <Input className="success"  />
         )}
       </Form.Item>

       <Row className="detalle">
          <Col md={12} sm={12} xs={24} className="colText">
          <div className="txtDetalleY">
          encontrá el LOTE en el<br></br>
          dorso del pack.
          </div>
          <div className="txtDetalleW">
          los LOTES están compuestos<br></br>
          de siete dígitos siguientes<br></br>
          a partir de la letra L
          </div>
          </Col>
          <Col md={12} sm={12} xs={24}>
          <div className="guideBox">
            <img className="guide" src={guide}/>
          </div>
          </Col>
       </Row>

      </div>
      <div className="bt-box">
      <Button loading={this.state.loadingCodigo}
            className="btn animated rubberBand" htmlType="submit">SIGUIENTE</Button>

      </div>
      </Form>

    </div>
    );
  }
}
const CodigoWrapped = Form.create({ name: 'codigo' })(CargarCodigo);
export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {logout}
)(withRouter(CodigoWrapped));
