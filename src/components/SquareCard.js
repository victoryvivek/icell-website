import React, { Component } from "react";

class SqaureCard extends Component {
  state = {
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  };

  render() {
    let date = this.props.schedule;
    date = new Date(date);

    let month = date.getMonth();
    let day = date.getDate();

    return (
      <div className="eventinfo-card 1">
        <div className="eventinfo-card_text">
          <div className="eventinfo-date">
            {day} <br />
            {this.state.months[month]}
          </div>
        </div>

        <div className="eventinfo-card_title">{this.props.content}</div>
      </div>
    );
  }
}

export default SqaureCard;
