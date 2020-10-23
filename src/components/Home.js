import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../store/actions";
import "../static/css/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <p>Home</p>
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
