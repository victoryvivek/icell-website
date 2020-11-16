import React, { Component } from "react";
import event1 from "../static/img/event-1.png";

class EventThumbnail extends Component {
  render() {
    const infoPath = "/eventinfo/" + this.props.eventName;

    return (
      <div className="hovereffect rec1">
        <img className="img-responsive" src={event1} alt="" />
        <div className="overlay">
          <h1>{this.props.eventName}</h1>
          <p>
            <a href={infoPath}>Learn More !</a>
          </p>
        </div>
      </div>
    );
  }
}

export default EventThumbnail;
