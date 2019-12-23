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
        console.log('this.props.children', this.props.children)
        return <div className="self-resume-com">
                <Sider />
                <div className="container">12313123{this.props.children}</div>
              </div>
    }
}