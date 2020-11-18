import React, { Component } from "react";

import "../static/css/roundcard.css";

class RoundCard extends Component {
  render() {
    return (
      <div className="roundcard-full">
        <div className="roundcard-circle">
          <span class="material-icons">science</span>
        </div>
        <div className="roundcard-content">{this.props.data}</div>
      </div>
    );
  }
}

export default RoundCard;
