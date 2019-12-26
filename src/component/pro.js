import React, { Component } from 'react';

export default class Skill extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return <div className="container-pro">
            <div className="item">
              <p>名称：CRM客户关系管理系统</p>
              <p>项目描述：pc端项目，旨在提升销售在销售过程中线上化效率及产能</p>
              <p>技术栈与项目职责</p>
              <p>1. 使用组内技术，独立开发公用React组件；</p>
              <p>2. 参与设计项目数据方案，以后端数据为基准，动态渲染前端组件；</p>
              <p>3. 需求时间评估，与团队做好沟通，把握进度；</p>
              <p>4. 封装方法，使独立的组件可以自由通信；</p>

            </div>
           </div>
  }
}