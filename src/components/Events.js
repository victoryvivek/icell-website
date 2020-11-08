import React, { Component } from "react";

import Navbar from "../components/Navbar";

import event1 from "../static/img/event-1.png";
import event2 from "../static/img/event-2.png";
import event3 from "../static/img/event-3.png";
import event4 from "../static/img/event-4.png";
import event5 from "../static/img/event-5.png";
import event6 from "../static/img/event-6.png";
import "../static/css/events.css";

class Events extends Component {
  render() {
    return (
      <div className="outer">
        <Navbar />
        <div class="jumbotron">
          <p class="display-4">EVENTS</p>
        </div>

        <div class="container-image">
          <div class="paragraph">
            We at Industry Cell, NIT Kurukshetra believe that the best learning
            curve for any great lesson is achieved by Learning-by-Doing
            technique. Therefore we organise various events annually to
            cultivate the basic entreprenurship spirit in students.
          </div>
        </div>

        <div class="row1">
          <div class="hovereffect rec1">
            <img class="img-responsive" src={event1} alt="" />
            <div class="overlay">
              <h1>Campuspreneur</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div>

          <div class="hovereffect">
            <img class="img-responsive" src={event2} alt="" />
            <div class="overlay">
              <h1>B-PLAN</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div>

          <div class="hovereffect">
            <img class="img-responsive" src={event3} alt="" />
            <div class="overlay">
              <h1>Productathon</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div>

          <div class="hovereffect">
            <img class="img-responsive" src={event4} alt="" />
            <div class="overlay">
              <h1>Future Ceo</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div>

          <div class="hovereffect">
            <img class="img-responsive" src={event5} alt="" />
            <div class="overlay">
              <h1>Young Leaders</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div>

          <div class="hovereffect">
            <img class="img-responsive" src={event6} alt="" />
            <div class="overlay">
              <h1>Seminars and Workshops</h1>
              <p>
                <a href="#">Learn More !</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
