import React, { Component } from "react";
import {
  NavLink,
  HashRouter,
  Link,
  BrowserRouter,
  withRouter
} from "react-router-dom";
import insta from './images/insta.png';
import youtube from './images/youtube.png';
import fb from './images/fb.png';

class Footer extends Component {


  constructor(props) {
    super(props);
      this.state = {
        facebookLink:'',
        youtubeLink:'',
        instagramLink:''
      }
  }

  componentDidMount(){
  if(localStorage.getItem('country')=='uy'){
    this.setState({
      facebookLink:"https://www.facebook.com/TangUruguay/",
      instagramLink:"https://www.instagram.com/tanguruguay/",
      youtubeLink:"https://www.youtube.com/user/TangUruguay"})}
    else {
    this.setState({
      facebookLink:"https://www.facebook.com/tangargentina/",
      instagramLink:"https://www.instagram.com/tangargentina/",
      youtubeLink:"https://www.youtube.com/tangargentina/"
      })}
  }

  render() {
    return (
      <footer className="footerContainer">
        <div className="insider">
          { this.props.redes ?
            <div className="redBox">
              <a href={this.state.youtubeLink} target="_blank"><img className="social animated jello delay-1s" src={youtube}/></a>
              <a href={this.state.instagramLink} target="_blank"><img className="social animated jello delay-2s" src={insta}/></a>
              <a href={this.state.facebookLink} target="_blank"><img className="social animated jello delay-3s" src={fb}/></a>
            </div>
            : null}
          <div className="txtFooter">
            2019. promo tang. todos los derechos reservados.
            <br></br>
            {this.props.txt}
          </div>
          <div className="txtFooter last">
            {this.props.txt2}
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
