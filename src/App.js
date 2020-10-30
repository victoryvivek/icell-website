import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";

import About from './components/About'
import Teams from "./components/Team"
import Events from "./components/Events";


class App extends Component {
  render() {
    return (
      <>
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/events" exact component={Events} />
        <Route path="/" exact component={Landing} />
        <Route path="/team" exact component={Teams} />
      </>
    );
  }
}

export default App;
