import React, { Component } from 'react';
import { experList } from './util-config';

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return <div className="container-experience">
              {
                experList && experList.length ? experList.map((item, index) => {
                  return <div className="item" key={index}>
                          <div className="item-head">
                            {
                              item.headerList && item.headerList.length ? item.headerList.map((it, i) => {
                                return <span key={i}>{it}</span>
                              }) : null
                            }
                          </div>
                          <div>
                            <p className="item-experiene-desc">工作描述：</p>
                            {
                              item.workList && item.workList.length ? item.workList.map((row, i) => {
                                return <p className="work-row" key={i}>{i + 1}. {row}</p>
                              }) : null
                            }
                          </div>
                        </div>
                }) : null
              }
           </div>
  }
}