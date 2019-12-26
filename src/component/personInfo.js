import React, { Component } from 'react';
import Tooltip from './popconfig';
export default class PersonInfo extends Component {
    constructor(props) {
      super(props);
    }

    containerRender() {
      return <p>微信号：18116799299</p>
    }

    tipTitleRender() {
      return <div className="self-resume-tips-box">
              <img src="https://raw.githubusercontent.com/twosugar/imgStore/master/text/weixin.png" />
             </div>
    }

    render() {
        return <div className="container-person-info">
                <div className="person-info-head">
                  <div className="name">唐瑜</div>
                  <div className="position">Web前端开发工程师</div>
                </div>
                <div className="person-info-container">
                  <div className="left">
                    <p>男/1996.08</p>
                    <p>工作经验3年</p>
                    <a href="https://www.swpu.edu.cn/" target="_blank">西南石油大学/计算机科学学院</a>
                    <p>本科</p>
                  </div>
                  <div className="right">
                    <p>手机号码：18116799299</p>
                    <p>邮箱：sugarfish@yeah.net</p>
                    <Tooltip 
                    containerRender={this.containerRender}
                    title={this.tipTitleRender}
                    />
                    <a href="https://github.com/twosugar" target="_blank">
                      <span className="iconfont">&#xe709;</span> https://github.com/twosugar
                      </a>
                  </div>
                </div>
              </div>
    }
}