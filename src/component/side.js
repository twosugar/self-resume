import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
export default class Sider extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tabList: [
          { key: 'personInfo', title: '个人资料', toLink: '/' },
          { key: 'experience', title: '工作经历', toLink: '/experience' },
          { key: 'skill', title: '技能', toLink: '/skill' },
          { key: 'pro', title: '项目经历', toLink: '/pro' }
        ],
        defaultSelectedKeys: this.getCurrentKey() || []
      }
      
    }

    getCurrentKey() {
      const hash = window.location.hash;
      let key = 'personInfo';
      hash && hash.replace(/^\#\/(\w*)([\?])?/g, (a, b) => {
        if (b) {
          key = b;
        }
      })
      return key && [key]
    }

    render() {
      const { tabList, defaultSelectedKeys } = this.state;
      return <div>
                <Menu
                  style={{ width: 256 }}
                  defaultSelectedKeys={defaultSelectedKeys}
                >
                  {
                    tabList && tabList.length ? tabList.map(item => {
                      return  <Menu.Item key={item.key}>
                                <Link to={item.toLink}>{item.title}</Link>
                              </Menu.Item>
                    }) : null
                  }
                </Menu>
              </div>
    }
}