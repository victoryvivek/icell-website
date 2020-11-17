import React, { Component } from "react";

class Accordian extends Component {
  handleAccordianClick = () => {
    this.props.accordianRef.current.classList.toggle("active");
    this.props.accordianRef.current.nextElementSibling.classList.toggle(
      "active"
    );
  };

  render() {
    return (
      <div className="eventinfo-accordion-item">
        <a
          ref={this.props.accordianRef}
          onClick={() => this.handleAccordianClick()}
        >
          {this.props.question}
        </a>
        <div className="eventinfo-content">
          <p className="eventinfo-p">{this.props.answer}</p>
        </div>
      </div>
    );
  }
}

export default Accordian;
