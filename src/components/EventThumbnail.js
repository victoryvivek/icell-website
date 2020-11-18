import React, { Component } from "react";
import { BASE_URL } from "../config/config";
import axios from "axios";

class EventThumbnail extends Component {
  state = {
    eventInfo: {},
    success: false
  };
  componentDidMount() {
    const url = BASE_URL + this.props.eventName + "/info";
    axios.get(url).then(res => {
      this.setState({
        eventInfo: res.data.eventInfo[0],
        success: res.data.success
      });
    });
  }

  render() {
    const infoPath = "/eventinfo/" + this.props.eventName;

    return (
      <div className="hovereffect rec1">
        <img
          className="img-responsive"
          src={this.state.success ? this.state.eventInfo.imageUrl : null}
          alt={this.props.eventName}
        />
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
