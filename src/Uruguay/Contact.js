import React, { Component } from "react";
import TagManager from 'react-gtm-module'
import { Row, Col } from 'antd';

class Contact extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <div className="containerContact">
        <div>
          <h1 className="titulo">CONTACTO</h1>
        </div>
      <div className="nubesContainer">
        <div className="nube contact animated fadeInRight">
          <div className="contactxt">
            Para cualquier información aclaración referente <br></br>
            a LA PROMO, mandar un correo electrónico a
          </div>
          <div className="correo">
            consumidores.uy@mdlz.com
          </div>
          <div className="contactxt">
          con asunto <span className="orange">"Promoción SUPER PROMO TANG"
          </span>
          </div>
          <div className="triangleFaq uyfaq"></div>
        </div>
        <div className="nube contact phone contactUy animated fadeInLeft">
          <div className="contactxt">
            TAMBIÉN PODÉS COMUNICARTE:
          </div>
          <Row className="rowTelefonos">
            <Col md={10} xs={10}>
                <span className="contactxt tagUy">AL TELÉFONO</span>

            </Col>
            <Col md={2} xs={1}>
            </Col>
            <Col md={10} xs={10}>

                <span className="contactxt tagUy">AL CELULAR</span>

            </Col>
          </Row>
          <Row className="rowTelefonos">
            <Col md={10} xs={10}>
              <div className="correo numUy">
                    26828259
              </div>
            </Col>
            <Col md={2} xs={1}>
              <div className="orange slash">/</div>
            </Col>
            <Col md={10} xs={10}>
              <div className="correo numUy">
                 099566869
              </div>
            </Col>
          </Row>

          <div className="triangle phone uyt"></div>
        </div>
      </div>
      </div>
    );
  }
}

export default Contact;
