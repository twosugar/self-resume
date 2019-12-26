import React, { Component } from 'react';
import Sider from './component/side';
import './css/view.scss'
import { Menu, Icon, Switch } from 'antd';

const { SubMenu } = Menu;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            containerHeight: window.innerHeight - 100 + 'px'
        }
    }

    componentDidMount() {
        window.onresize = () => {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                this.setState({ containerHeight: window.innerHeight - 100 + 'px' })
            }, 500)
        }
    }

    render() {
        return <div className="self-resume-com">
                <div className="header">Web前端开发工程师<span className="tips">技术源于交流</span></div>
                <div className="com-container" style={{height: this.state.containerHeight}}>
                    <Sider />
                    <div className="container">{this.props.children}</div>
                </div>
              </div>
    }
}