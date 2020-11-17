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

        <div className="row1">
          {events}

          {/* <div className="hovereffect rec1">
            <img className="img-responsive" src={event1} alt="" />
            <div className="overlay">
              <h1>Campuspreneur</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div>

          <div className="hovereffect">
            <img className="img-responsive" src={event2} alt="" />
            <div className="overlay">
              <h1>B-PLAN</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div>

          <div className="hovereffect">
            <img className="img-responsive" src={event3} alt="" />
            <div className="overlay">
              <h1>Productathon</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div>

          <div className="hovereffect">
            <img className="img-responsive" src={event4} alt="" />
            <div className="overlay">
              <h1>Future Ceo</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div>

          <div className="hovereffect">
            <img className="img-responsive" src={event5} alt="" />
            <div className="overlay">
              <h1>Young Leaders</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div>

          <div className="hovereffect">
            <img className="img-responsive" src={event6} alt="" />
            <div className="overlay">
              <h1>Seminars and Workshops</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Events;
