import React, { Component } from "react";
import { Route } from "react-router-dom";

import Landing from "./components/Landing";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Landing} />
      </div>
    );
  }
}

export default App;
