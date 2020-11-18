import React, { Component } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";

import "../static/css/events.css";

import EventThumbnail from "./EventThumbnail";

class Events extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    console.log("ComponentDidMount");
    axios.get(BASE_URL + "activeEvents").then(response => {
      this.setState({
        events: response.data.events
      });
      console.log(response);
    });
  }

  render() {
    const events = this.state.events.map(event => {
      return <EventThumbnail eventName={event.name} />;
    });

    return (
      <div className="outer">
        <div className="jumbotron">
          <p className="display-4">EVENTS</p>
        </div>

        <div className="container-image">
          <div className="paragraph">
            We at Industry Cell, NIT Kurukshetra believe that the best learning
            curve for any great lesson is achieved by Learning-by-Doing
            technique. Therefore we organise various events annually to
            cultivate the basic entreprenurship spirit in students.
          </div>
        </div>

        <div className="row1">{events}</div>
      </div>
    );
  }
}

export default Events;
