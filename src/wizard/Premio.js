import React, { Component } from "react";
import TagManager from 'react-gtm-module';
import { Row,Col,Form, Input, Modal, Button, Label,Alert,message,Select,Checkbox,DatePicke } from 'antd';
import RestClient from '../network/restClient';
import {
  NavLink,
  HashRouter,
  Redirect,
  Link,
  withRouter
} from "react-router-dom";
import step from '../images/paso1.png';
import step2 from '../images/paso2.png';
import step3 from '../images/paso3.png';
import stepActive from '../images/active1.png';
import active2 from '../images/active2.png';
import active3 from '../images/active3.png';
import phone from '../images/phone.png';
import tablet from '../images/tab.png';


class Premio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error:undefined,
      loadingCodigo: false,
      phone: null,
      award: null,
      paso1: step,
      activateStep2: active2,
      activateStep3: step3,
      image: '',
      show: false
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
       this.props.form.validateFields((err, values) => {
          if (!err) {
            e.preventDefault();
            this.setState({loading:true,error:undefined});
            let registroObj = {...values};
            RestClient.updateUser(registroObj).then(usuarioData=>{
              this.setState({loading:false,error:undefined});
              console.log(usuarioData);
                this.props.history.push("/final");  
            }).catch(error=>{
              this.setState({loading:false,error:error.message});

            })

          }
      });
    }

  render() {
    const Option = Select.Option;
    const { getFieldDecorator } = this.props.form;
    const validateNumbers = (rule, value, callback) => {
      if (!/^[0-9]*$/i.test(value)) {
        callback("Sólo números");
      } else {
        callback();
      }
    };
    const validateDNI = (rule, value, callback) => {
      if ((!/^[0-9]*$/i.test(value))||(value.length!=8)) {
        callback("El DNI es inválido");
      } else {
        callback();
      }
    };
    if (!this.props.location.state){
      return <Redirect to={{
        pathname: '/participacion'
      }}/>
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
  <Form onSubmit={this.handleSubmit}>
    <div className="container wizard codigo">

    <Row className="formPremio">
      <Col md={8} sm={8} xs={24} className="colText">
        <img id="premioImg" src={this.props.location.state?this.props.location.state.premio.image:""}/>
      </Col>
      <Col md={16} sm={16} xs={24} className="colText">
      <div className="msg premio">
        ¡Felicitaciones! Sos el potencial<br></br>
      ganador {this.props.location.state?this.props.location.state.premio.premio:""}!
      </div>
      <div className="lightTxt premio">
        Conservá el envase con el código que escribiste,<br></br>
        vas a tener que presentarlo para obtener tu premio
      </div>
      </Col>
    </Row>

    <div className="dashLine"></div>

    <div className="orange txtPremio">
      COMPLETÁ LOS SIGUIENTES DATOS PARA VALIDAR
      TU PARTICIPACIÓN
    </div>


    {this.state.error && <Alert message={this.state.error} type="error" />}
    <Row className="formPremio">
      <Col md={12} sm={12} xs={24} className="colInput">
        <Form.Item
             label="Celular:"
           >
             {getFieldDecorator('telefono', {
               rules: [
                 {required: true, message: 'Por favor ingresa tu teléfono'},
                 {validator: validateNumbers}
               ],
             })(
               <Input className="success" />
             )}
           </Form.Item>
       </Col>
       <Col md={12} sm={12} xs={24} className="colInput">
         <Form.Item
             label="Mail:"
           >
             {getFieldDecorator('email', {
               rules: [
                 {type: 'email', message: 'El correo no es válido',},
                 {required: true, message: 'Por favor ingresa tu correo',}
               ],
             })(
               <Input className="success"/>
             )}
          </Form.Item>
        </Col>
      </Row>
          <Row className="formPremio">
            <Col md={12} sm={12} xs={24} className="colInput">
              <Form.Item
                   label="Calle / Número:"
                 >
                   {getFieldDecorator('direccion', {
                     rules: [
                       {required: true, message: 'Campo obligatorio:'}
                     ],
                   })(
                     <Input className="success" />
                   )}
              </Form.Item>
             </Col>
             <Col md={12} sm={12} xs={24} className="colInput">
               <Form.Item
                    label="Localidad:"
                  >
                    {getFieldDecorator('localidad', {
                      rules: [
                        {required: true, message: 'Campo obligatorio:'}
                      ],
                    })(
                      <Input className="success" />
                    )}
               </Form.Item>
       </Col>
      </Row>
      <Row className="formPremio">
        <Col md={12} sm={12} xs={24} className="colInput">
          <Form.Item
               label="CP:"
             >
               {getFieldDecorator('cp', {
                 rules: [
                   {required: true, message: 'Campo obligatorio:'}
                 ],
               })(
                 <Input className="success" />
               )}
          </Form.Item>
        </Col>
      </Row>


      </div>
      <div className="bt-box">
      <Button loading={this.state.loading}
            className="btn animated rubberBand" htmlType="submit">SIGUIENTE</Button>

      </div>
      </Form>
    </div>
  )
  }
}
const PremioWrapped = Form.create({ name: 'premio' })(Premio);
export default withRouter(PremioWrapped);
