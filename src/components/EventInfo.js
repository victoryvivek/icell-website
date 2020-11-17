import React, { Component } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";

import "../static/css/eventinfo.css";

import Accordian from "./Accordian";
import RoundCard from "./RoundCard";
import Rule from "./Rule";

class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.accordianRef = React.createRef();
  }

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
    let faqs = [];
    let question = `How JavaScript Can Modify HTML and CSS Values?`;
    let answer = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                  viverra suspendisse potenti.`;
    for (let i = 0; i < 5; i++) {
      faqs.push(
        <Accordian
          accordianRef={React.createRef()}
          question={question}
          answer={answer}
        />
      );
    }

    let roundCard = [];
    for (let i = 0; i < 3; i++) {
      roundCard.push(<RoundCard />);
    }

    let rules = [];
    let val = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              accusantium velit accusamus. Quae pariatur assumenda ipsum, sequi
              quasi officiis dicta nam soluta voluptatibus sit! Iste mollitia ad
              officiis commodi ea!`;
    for (let i = 0; i < 3; i++) {
      rules.push(<Rule rule={val} />);
    }
    return (
      <div className="eventinfo-outer">
        <div className="eventinfo-bgimg-1">
          <div className="eventinfo-caption">
            <p className="eventinfo-p eventinfo-logo-1">
              {this.props.match.params.eventName}
            </p>

            <button className="eventinfo-glow-on-hover" type="button">
              Register
            </button>
          </div>
        </div>
        <div className="eventinfo-container">
          <p className="eventinfo-p eventinfo-main">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            veritatis labore explicabo accusamus praesentium optio adipisci
            asperiores ab hic totam! Voluptatem est, ratione deserunt laudantium
            commodi iure porro dolore tempore? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cupiditate corrupti totam ex
            veritatis. Voluptates quia quaerat error ex, id nobis. Voluptates
            quo illum fugit dolore unde eaque obcaecati iusto veniam.
          </p>
        </div>
        <div className="eventinfo-container-heading">
          <h1 className="eventinfo-h1">Stages</h1>
        </div>

        <div>{roundCard}</div>

        <div className="eventinfo-container-heading">
          <h1 className="eventinfo-h1">Schedule</h1>
        </div>
        <div className="eventinfo-container">
          <div className="eventinfo-cards-list">
            <div className="eventinfo-card 1">
              <div className="eventinfo-card_text">
                <div className="eventinfo-date">
                  12 <br />
                  Sept
                </div>
              </div>

              <div className="eventinfo-card_title">Lorem</div>
            </div>

            <div className="eventinfo-card 2">
              <div className="eventinfo-card_text">
                <div className="eventinfo-date">
                  12 <br />
                  Sept
                </div>
              </div>
              <div className="eventinfo-card_title">Lorem</div>
            </div>

            <div className="eventinfo-card 3">
              <div className="eventinfo-card_text">
                <div className="eventinfo-date">
                  12 <br />
                  Sept
                </div>
              </div>
              <div className="eventinfo-card_title">Lorem</div>
            </div>

            <div className="eventinfo-card 4">
              <div className="eventinfo-card_text">
                <div className="eventinfo-date">
                  12 <br />
                  Sept
                </div>
              </div>
              <div className="eventinfo-card_title">Lorem</div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="eventinfo-container-heading">
          <h1 className="eventinfo-h1">Frequently Asked Questions</h1>
        </div>
        <div className="eventinfo-container-faq">
          <div className="eventinfo-accordion">{faqs}</div>
        </div>
        <div className="eventinfo-container-heading">
          <h1 className="eventinfo-h1">Rules</h1>
          <ol>{rules}</ol>
        </div>
      </div>
    );
  }
}

export default EventInfo;
