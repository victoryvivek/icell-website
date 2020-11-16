import React, { Component } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";

class EventInfo extends Component {
  state = {
    eventInfo: {}
  };
  componentDidMount() {
    const url = BASE_URL + this.props.match.params.eventName + "/info";
    axios.get(url).then(res => {
      this.setState({
        eventinfo: res.data.eventInfo[0]
      });
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        EventInfo
        <div>{this.props.match.params.eventName}</div>
      </div>
    );
  }
}

export default EventInfo;
