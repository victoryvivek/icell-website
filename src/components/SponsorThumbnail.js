import React, { Component } from "react";
import icell_logo from "../static/img/icell_background.jpg";

class SponsorThumbnail extends Component {
  render() {
    console.log(this.props.imageUrl);
    return (
      <div className="col m4 s12">
        <img
          src={this.props.imageUrl}
          className="sponsorsLogo"
          data-aos="flip-left"
          data-aos-duration="1000"
        />
      </div>
    );
  }
}

export default SponsorThumbnail;
