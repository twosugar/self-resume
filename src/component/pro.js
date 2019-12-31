import React, { Component } from 'react';
import { proList } from './util-config';
export default class Skill extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return <div className="container-pro">
            {
              proList && proList.length ? proList.map((item, i) => {
                return <div className="item" key={i}>
                        <p className="item-name">名称：{item.proName}</p>
                        <p>项目描述：{item.desc}</p>
                        <p>技术栈与项目职责</p>
                        {
                          item.list && item.list.length ? item.list.map((row, j) => {
                            return <p key={j}>{j + 1}. {row}</p>
                          }) : null
                        }
                        <p className="item-res">{item.res}</p>
                       </div>
              }) : null
            }
           </div>
  }
}