import axios from 'axios';

export default class RestClientObj {
  static instanceAxios = axios.create({
    //baseURL: 'http://localhost:5000'
    baseURL: 'https://promo-tang.com/service'
  });
  static setInterceptor =(callback) =>{
    RestClientObj.instanceAxios.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        if(error.response.status === 403) {
          callback();
          throw Error("Su sesion ha expirado");
        }else{
          throw Error(error.response.data.message);
        };
    });
  }

  static setTokenToAxio = (token) => {
    RestClientObj.instanceAxios.defaults.headers.common['Authorization'] = token;
  }
  static cleartokenAxio = () => {
    RestClientObj.instanceAxios.defaults.headers.common['Authorization'] = undefined;
  }

  static login = (userForm)=> {
    return RestClientObj.instanceAxios.post('/users/login', userForm)
  }
  static recoverPassword = (userForm)=> {
    return RestClientObj.instanceAxios.post('/users/recover_pass', userForm)
  }

  static changePassword = (userData)=>{
      return RestClientObj.instanceAxios.post('/users/changePassword', userData)
  }

  static register = (userForm)=> {
    return RestClientObj.instanceAxios.post('/users/register', userForm)
  }
  static ingresarCodigo = (codigo)=> {
    return RestClientObj.instanceAxios.post('/codigos/validate_codigo', codigo)
  }
  static preSignedUrl = (codigo)=> {
    return RestClientObj.instanceAxios.post('/recetas/post_s3-url', codigo)
  }
  static guardarReceta = (receta)=> {
    return RestClientObj.instanceAxios.post('/recetas/guardar', receta)
  }
  static updateUser = (user)=> {
    return RestClientObj.instanceAxios.post('/users/update', user)
  }
  static listRecetasHome = ()=> {
    return RestClientObj.instanceAxios.get('/recetas/list_home')
  }
  static listRecetasAll = ()=> {
    return RestClientObj.instanceAxios.get('/recetas/list_all')
  }
  static getProvincias = (pais) => {
    return RestClientObj.instanceAxios.post('/users/provincias',pais)
  }


  static saveClic = (pais) => {
      return RestClientObj.instanceAxios.post('/users/click_reporte',pais)
  }








}
