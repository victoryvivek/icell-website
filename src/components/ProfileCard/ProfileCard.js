import React, { Component } from "react";
import icell_logo from "../../static/img/icell_background.jpg";

class ProfileCard extends Component {
  render() {
    let classString = "";

    for (let key in this.props.outerClasses) {
      classString += key + " ";
    }

    return (
      <div class={classString}>
        <div class="card-content">
          <img src={this.props.image} className="TeamMemberImage" />
          <span class="card-title cardTeamMembersSpan">{this.props.name}</span>
          <p>{this.props.post}</p>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
