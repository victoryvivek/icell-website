import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";

import Events from './components/Events'
import About from './components/About'
import Teams from "./components/Team"
import Contacts from "./components/Contact";


class App extends Component {
  render() {
    return (
      <>
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/events" exact component={Events} />
        <Route path="/" exact component={Landing} />
        <Route path="/team" exact component={Teams} />
        <Route path="/contact" exact component={Contacts} />
      </>
    );
  }
}

export default App;
