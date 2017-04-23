import React, { Component } from 'react';
import classnames from 'classname';

export default class Node extends Component {
  constructor(props) {
    super(props);
    const { style, type, label, id } = props;
    this.state = {
      style,
      type,
      label,
      id
    };
  }
  componentWillReceiveProps(newProps) {
    const { style, type, label, id } = newProps;
    this.setState({
      style,
      type,
      label,
      id
    });
  }
  render() {
    return (
      <DAG-Node>
        <div className="box text-center"
              id={this.state.id}
              style={this.state.style}>
          <div className={classnames({'dag-node': true, [this.state.type]: true})}>
            <div className="label">{this.state.label}</div>
          </div>
          {this.state.id==='000000000' || this.state.id==='99999999' ? '':<div className="deleteLabel" label={this.state.label}>删除</div>}
        </div>
      </DAG-Node>
    )
  }
}
