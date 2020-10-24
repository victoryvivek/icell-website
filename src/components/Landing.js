import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../static/css/landing.css";
import icelllogo from "../static/img/icell.gif";

class Landing extends Component {
  state = {
    display: true
  };

  removeDisplay = dencrypt => {
    setTimeout(() => {
      this.setState({
        display: false
      });
    }, 5000);
  };

  render() {
    if (this.state.display) {
      this.removeDisplay();
      return (
        <div className="entire">
          <div>
            <img className="beast" src={icelllogo} alt="icell-logo" />
          </div>
          <div className="content">ICELL</div>
        </div>
      );
    } else {
      return (
        <div>
          <Redirect to="/home" />
        </div>
      );
    }
  }
}

export default Landing;
