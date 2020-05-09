import React, { Component } from "react";
import { connect } from 'react-redux';
import TagManager from 'react-gtm-module';
import { Row,Col,Form, Input, Modal, Button, Label,Alert,message,Select,Checkbox } from 'antd';
import RestClient from '../network/restClient';
import actions from '../redux/auth/actions';
import {
  Redirect,
  HashRouter,
  withRouter,
  Link
} from "react-router-dom";

const {login} = actions;

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error:undefined,
      provincias:[],
      uy :false,
      bases:'/Condiciones'
    }

  }
  loadProvincias = () =>{
    let pais = 1;
    if(this.state.uy){
      pais = 2;
    }
    RestClient.getProvincias({pais:pais}).then(response=>{
      this.setState({provincias:response.data.provincias})
    });

  }

  componentDidMount(){
    let p=localStorage.getItem('country')
    if(p=='uy'){
      this.setState({
        uy:true,
        bases:'/Condiciones-uy'
      },()=>{
        this.loadProvincias();
      })
    }else{
      this.loadProvincias();
    }
    const tagManagerArgs = {
      gtmId: 'GTM-TS2LLGT',
      dataLayer:{
        event: 'pageview'
      }
    }
    TagManager.initialize(tagManagerArgs);

  }



  handleSubmit = (e)=>{
    e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            //{ required: true, message: 'Debe ser mayor de 18 años' }
            //{ required: true, message: 'Debe aceptar los términos y condiciones' }

            if(values.mayor!=true){
              Modal.warning({
                title: 'Requerido',
                content: 'Debe ser mayor de 13 años',
              });
              return
            }else if(values.agreement!=true){
              Modal.warning({
                title: 'Requerido',
                content: 'Debe aceptar los términos y condiciones',
              });
              return
            }
            this.setState({loading:true,error:undefined});
            let registroObj = {...values};
            RestClient.register(registroObj).then(usuarioData=>{
              this.setState({loading:false,error:undefined});
              console.log(usuarioData);
              this.props.login(usuarioData.data.user);

            }).catch(error=>{
              this.setState({loading:false,error:error.message});

            })
          }
        });
      }
    })
  }


  render() {
    const Option = Select.Option;
    const { getFieldDecorator } = this.props.form;


    const { token } = this.props.profile?this.props.profile:{};
    if (token) {
      return <Redirect to={'/codigo'} />;
    }


    const validateStrings = (rule, value, callback) => {
      if (!/^[a-zñÑáéíóúÁÉÍÓÚ ]+$/i.test(value)) {
        callback("Sólo letras");
      } else {
        callback();
      }
    };

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

    return (
    <div>
    <Form onSubmit={this.handleSubmit}>
      <div className="container wizard">
        <Row className="filaForm">
            <Col md={12} xs={24} className="formCol">
            <Form.Item label="Nombre:">
             {getFieldDecorator('name', {
               rules: [
                 {required: true, message: 'Por favor ingresa tu nombre'},
                 {validator: validateStrings}
               ],
             })(
               <Input className="success" />
             )}
           </Form.Item>
           </Col>
           <Col md={12} xs={24} className="formCol">
           <Form.Item label="Apellido:">
            {getFieldDecorator('apellido', {
              rules: [
                {required: true, message: 'Por favor ingresa tu apellido'},
                {validator: validateStrings}
              ],
            })(
              <Input className="success"/>
            )}
            </Form.Item>
           </Col>
      </Row>
      <Row className="filaForm">
          <Col md={12} xs={24} className="formCol">

             <Form.Item
                  label="DNI:"
                >
                  {getFieldDecorator('dni', {
                    rules: [
                      {required: true, message: 'Campo obligatorio:'},
                      {validator: validateDNI}
                    ],
                  })(
                    <Input className="success" />
                  )}
             </Form.Item>
          </Col>
          <Col md={12} xs={24} className="formCol">
              <Form.Item label={`${this.state.uy?"Departamento":"Provincia"}`}>
                {getFieldDecorator('provincia', {
                  rules: [{ required: true, message:`${this.state.uy?"Por favor seleccione un departamento":"Por favor selecciona una provincia"}` }],
                })(
                  <Select className="success"
                    placeholder={`${this.state.uy?"Seleccione un departamento":"Seleccione una provincia"}`}
                    onChange={this.handleSelectChange}
                  >
                    {this.state.provincias.map(provincia=>
                      <Option key={`provincia-${provincia.id_provincia}`} value={provincia.id_provincia}>{provincia.provincia}</Option>
                    )}
                  </Select>
                )}
              </Form.Item>
          </Col>
      </Row>
      <Row className="filaForm">

        <Col md={12} xs={24} className="formCol">
          <Form.Item
             label="Mail:"
           >
             {getFieldDecorator('mail', {
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
      <Row>
        <Form.Item className="ch">
            {getFieldDecorator('mayor', {
              valuePropName: 'checked',
              rules: [],
            })(
              <Checkbox>Soy mayor de 13 años</Checkbox>
            )}
          </Form.Item>
          <Form.Item className="ch acepto">
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
              rules: [],
            })(
              <Checkbox>Acepto <Link to={this.state.bases} className="term">términos y condicones</Link></Checkbox>
            )}
          </Form.Item>
      </Row>

      </div>
      <div className="bt-box">
      <Button loading={this.state.loading}
            className="btn animated rubberBand" htmlType="submit">SIGUIENTE</Button>

      </div>
      </Form>
    </div>
    );
  }
}
const RegisterWrapped = Form.create({ name: 'registro' })(Register);
//export default withRouter(RegisterWrapped);
export default connect(
  state => ({
    profile: state.Auth.profile,
  }),
  {login}
)(withRouter(RegisterWrapped));
