import React, { Component } from 'react';
import { BrowserRouter, Route, HashRouter, Switch } from 'react-router-dom';
import App from './index';
import PersonInfo from './component/personInfo';
import Experience from './component/experience';
import Skill from './component/skill';
import Pro from './component/pro';

export default class RouterComponent extends Component {
  render() {
    return <HashRouter>
            <App path="/">
              <Switch>
              <Route path="/" component={PersonInfo} exact/>
              <Route path="/experience" component={Experience}/>
              <Route path="/skill" component={Skill}/>
              <Route path="/pro" component={Pro}/>
              </Switch>
            </App>
          </HashRouter>
  }
}