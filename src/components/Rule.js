import React, { Component } from "react";
class Rule extends Component {
  render() {
    return <li className="eventinfo-li">{this.props.rule}</li>;
  }
}

export default Rule;
