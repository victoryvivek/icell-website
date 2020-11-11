import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actionTypes from "../store/actions";
import "../static/css/home.css";

import bulb from "../static/img/bulb.jpg";

class Home extends Component {
  navigateToAboutPage = () => {};

  render() {
    return (
      
      <div className="container-fluid black outfitHome">
        <div className="row"></div>
        <div className="row" style={{marginBottom:0,paddingBottom:20}}>
          <div className="col s12 m6">
          
            <img className="bulb" src={bulb} alt="innovation" />
            <p className="headingHome" data-aos="fade-down">innovation</p>
            <p className="headingHome" data-aos="fade-down">leadership</p>
            <p className="headingHome" data-aos="fade-down">enterpreneurship</p>
          
          </div>
          <div className="col s12 m6">
          <div className="contentSideHome">
            <p className="contentHome">
              That is what drives us. Welcome to the official website of
              Industry Cell, National Institute of Technology. With a passion to
              innovate and lead with persistence, we are the Trailblazers, ready
              to tackle challenges and make the world a better place to live.
            </p>
          
          
            <Link to="/about" className="knowHome">
              Know More
            </Link>
            </div>
          </div>
        </div>
      </div>
      
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
