import React, { Component } from 'react';
import Sider from './component/side';
import { DatePicker } from 'antd';
import './component/a'
import './css/view.scss'
import { Menu, Icon, Switch } from 'antd';

const { SubMenu } = Menu;
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="self-resume-com">
                <div className="header">Web前端开发工程师<span className="tips">技术源于交流</span></div>
                <div className="com-container">
                    <Sider />
                    <div className="container">{this.props.children}</div>
                </div>
              </div>
    }
}