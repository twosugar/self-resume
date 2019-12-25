import React, { Component } from 'react';
import { BrowserRouter, Route, HashRouter, browserHistory } from 'react-router-dom';
import App from './index';
import PersonInfo from './component/personInfo';

export default class RouterComponent extends Component {
  render() {
    return <HashRouter>
            <App path="/">
              <Route path="/" component={PersonInfo}/>
            </App>
          </HashRouter>
  }
}