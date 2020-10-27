import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import * as actionTypes from "../store/actions";
import "../static/css/home.css";

import bulb from "../static/img/bulb.jpg";

class Home extends Component {
  navigateToAboutPage = () => {};

  render() {
    return (
      <>
        <div className="outfit">
          <Navbar />
          <div>
            <img className="bulb" src={bulb} alt="innovation" />
            <p className="heading">innovation</p>
            <p className="heading">leadership</p>
            <p className="heading">enterpreneurship</p>
          </div>
          <div>
            <p className="content-home">
              That is what drives us. Welcome to the official website of
              Industry Cell, National Institute of Technology. With a passion to
              innovate and lead with persistence, we are the Trailblazers, ready
              to tackle challenges and make the world a better place to live.
            </p>
          </div>
          <div>
            <Link to="/about" className="know">
              Know More
            </Link>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated:
      state.loginReducer.isAuthenticated | state.registerReducer.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: () => {
      dispatch({ type: actionTypes.LOGIN_SUCCESS });
    },
    loginFail: () => dispatch({ type: actionTypes.LOGIN_FAILED })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
