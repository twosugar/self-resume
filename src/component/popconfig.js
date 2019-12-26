import React, { Component } from 'react';
import { Popconfirm, Tooltip } from 'antd';

export default class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { containerRender, title } = this.props;

    return <Tooltip title={title} placement="bottom">
            {containerRender && containerRender()}
          </Tooltip>
  }
}