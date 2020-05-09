import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/string';

import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import Footer from "./Footer";
import "./index.css";
import 'antd/dist/antd.css';

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import authAction from './redux/auth/actions';
import TagManager from 'react-gtm-module';
import restClient from './network/restClient';

const { logout } = authAction;
const tagManagerArgs = {
    gtmId: 'GTM-TS2LLGT'
}



class App extends React.Component {
  constructor() {
    super();
    this.state={
      loaded:false
    };
    this.persistor = persistStore(store, undefined,() => {
      let profile = store.getState().Auth.profile;
      restClient.setInterceptor(function(){
        store.dispatch(logout());
      });
      if(profile){
        store.dispatch(logout());
        restClient.setTokenToAxio(undefined);
      }

      this.setState({loaded:true});
    })

  }
  render() {

    return (
      <div>
        <Provider store={store}>
            {this.state.loaded?
              <PersistGate loading={null} persistor={this.persistor}><Main/>
              </PersistGate>:<p></p>}
        </Provider>
      </div>
    )
  }
}
//TagManager.initialize(tagManagerArgs)
const DashApp = () => {

  return ReactDOM.render(
      <App/>
  , document.getElementById('root'));
};
DashApp();
