import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import About from "./components/About";
import Teams from "./components/Team";
import Events from "./components/Events";
import NotFound from "./components/NotFound";
import Blog from "./components/Blog";
import ContactUs from "./components/Contact";
import ComingSoon from "./components/ComingSoon";
import Navbar from "./components/Navbar";
import EventInfo from "./components/EventInfo";

const NavComponents = () => {
  return (
    <>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/events" exact component={Events} />
        <Route path="/team" exact component={Teams} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/comingsoon" exact component={ComingSoon} />
        <Route path="/eventinfo/:eventName" exact component={EventInfo} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
class App extends Component {
  render() {
    return (
      <>
        {window.location.pathname === "/" ? "" : <Navbar />}
        <Switch>
          <Route path="/" exact component={Landing} />
          <NavComponents />
        </Switch>
      </>
    );
  }
}

export default App;
