import React, { Component } from "react";
import Productathon from "../static/img/Productathon.png";
import Bplan from "../static/img/Bplan.png";
import StockHunt from "../static/img/Stock-Hunt.png";
import YoungLeaders from "../static/img/Young-Leaders.png";

class EventThumbnail extends Component {
  render() {
    const infoPath = "/eventinfo/" + this.props.eventName;

    let name = this.props.eventName;
    name = name.toLowerCase();
    name = name.replace(/ +/g, "");
    let eventImage;
    if (name == "bplan") {
      eventImage = Bplan;
    } else if (name == "stockhunt") {
      eventImage = StockHunt;
    } else if (name == "productathon") {
      eventImage = Productathon;
    } else {
      eventImage = YoungLeaders;
    }

    return (
      <div className="hovereffect rec1">
        <img className="img-responsive" src={eventImage} alt="" />
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
