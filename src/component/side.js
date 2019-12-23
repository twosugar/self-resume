import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { HashRouter, Route, Switch, Redirect, Link} from 'react-router-dom'
export default class Sider extends Component {
    render() {
        return <div>
                <Menu
                  style={{ width: 256 }}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                >
                  <Menu.Item key="1">
                    <Link to="/">Navigation One</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                   
                    <Link to="about">22222</Link>
                  </Menu.Item>
                </Menu>
              </div>
    }
}