import React, { Component } from 'react';
import { BrowserRouter, Route, HashRouter, browserHistory } from 'react-router-dom';
import App from './index';
import Contenta from './component/b';

export default class RouterComponent extends Component {
  render() {
    return <HashRouter>
            <App path="/">
              <Route path="/about" component={Contenta}/>
            </App>
          </HashRouter>
  }
}