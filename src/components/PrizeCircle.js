import React, { Component } from "react";

import "../static/css/prizecircle.css";

class PrizeCircle extends Component {
  render() {
    return (
      <div className="prizecircle-full">
        <div className="prizecircle-circle">
          <span class="material-icons">science</span>
        </div>
        <div className="prizecircle-content">{this.props.data}</div>
      </div>
    );
  }
}

export default PrizeCircle;
