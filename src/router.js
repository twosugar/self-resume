import React, { Component } from 'react';
import { BrowserRouter, Route, HashRouter, browserHistory } from 'react-router-dom';
import App from './index';
import PersonInfo from './component/personInfo';
import Experience from './component/experience';
import Skill from './component/skill';
import Pro from './component/pro';

export default class RouterComponent extends Component {
  render() {
    return <HashRouter>
            <App path="/">
              <Route path="/personInfo" component={PersonInfo}/>
              <Route path="/experience" component={Experience}/>
              <Route path="/skill" component={Skill}/>
              <Route path="/pro" component={Pro}/>
            </App>
          </HashRouter>
  }
}