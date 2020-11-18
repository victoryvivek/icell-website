import React, { Component } from "react";

import icell_logo from "../../static/img/icell_background.jpg";

class BigProfileCard extends Component {
  render() {
    return (
      <div className="col m6 s12 CoreTeam">
        <div class="card grey lighten-4 cardCoreTeam">
          <div class="card-content beforeHover">
            <img src={this.props.image} className="CoreTeamMemberImage" />
            <span class="card-title">{this.props.name}</span>
            <p>{this.props.post}</p>
            <div className="coreTeamContact">
              <a href={this.props.email}>
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 0 16 16"
                  class="bi bi-envelope"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                  />
                </svg>
              </a>
              <a href={this.props.linkedinUrl}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  width="2.5em"
                  height="3em"
                  viewBox="0 0 32 32"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigProfileCard;
