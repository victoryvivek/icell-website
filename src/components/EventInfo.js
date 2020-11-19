import React, { Component } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";

import "../static/css/eventinfo.css";

import Accordian from "./Accordian";
import RoundCard from "./RoundCard";
import Rule from "./Rule";
import SquareCard from "./SquareCard";
import PrizeCircle from "./PrizeCircle";
import Spinner from "./Spinner";

class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.accordianRef = React.createRef();
  }

  state = {
    eventInfo: {},
    success: false,
    bgImgUrl:
      "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  };
  componentDidMount() {
    const url = BASE_URL + this.props.match.params.eventName + "/info";
    axios.get(url).then(res => {
      this.setState({
        eventInfo: res.data.eventInfo[0],
        success: res.data.success
      });
    });
  }

  render() {
    let faqs = [];
    let rules = [];
    let startDate, endDate;
    let schedule = [];
    let stages = [];
    let prizes = [];
    let style = {
      backgroundImage: `url(${this.state.bgImgUrl})`
    };
    let content;

    if (this.state.success) {
      faqs = this.state.eventInfo.faqs.map(faq => {
        return (
          <Accordian
            accordianRef={React.createRef()}
            question={faq.question}
            answer={faq.answer}
          />
        );
      });

      rules = this.state.eventInfo.rules.map(rule => {
        return <Rule rule={rule} />;
      });

      startDate = this.state.eventInfo.startTime;
      endDate = this.state.eventInfo.endTime;
      schedule.push(<SquareCard schedule={startDate} content="Start Date" />);
      schedule.push(<SquareCard schedule={endDate} content="End Date" />);

      stages = this.state.eventInfo.stages.map(stage => {
        let data = "";
        for (let key in stage) {
          data += key + ": " + stage[key] + " ";
        }
        return <RoundCard data={data} />;
      });

      style = {
        backgroundImage: `url(${this.state.eventInfo.imageUrl})`
      };

      let prizeObject = this.state.eventInfo.prizes;

      for (let key in prizeObject) {
        prizes.push(<PrizeCircle />);
      }

      content = (
        <>
          <div className="eventinfo-container">
            <p className="eventinfo-p eventinfo-main">
              {this.state.success ? this.state.eventInfo.info : null}
            </p>
          </div>
          <div className="eventinfo-container-heading">
            <h1 className="eventinfo-h1">Stages</h1>
          </div>

          <div>{stages}</div>

          <div className="eventinfo-container-heading">
            <h1 className="eventinfo-h1">Schedule</h1>
          </div>
          <div className="eventinfo-container">
            <div className="eventinfo-cards-list">{schedule}</div>
          </div>
          {/* <div className="eventinfo-container-heading">
          <h1 className="eventinfo-h1">Prizes</h1>
        </div>

        <div>{prizes}</div> */}

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
        </>
      );
    } else {
      content = <Spinner />;
    }

    return (
      <div className="eventinfo-outer">
        <div style={style} className="eventinfo-bgimg-1">
          <div className="eventinfo-caption">
            <p className="eventinfo-p eventinfo-logo-1">
              {this.props.match.params.eventName}
            </p>

            <a
              target="_blank"
              href={this.state.success ? this.state.eventInfo.formLink : "#"}
              className="eventinfo-glow-on-hover"
            >
              Register
            </a>
          </div>
        </div>
        {content}
      </div>
    );
  }
}

export default EventInfo;
