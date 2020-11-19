import React, { Component } from "react";

class SponsorThumbnail extends Component {
  render() {
    console.log(this.props.imageUrl);
    return (
        <img
          src={this.props.imageUrl}
          className="sponsorsLogo"
          data-aos="flip-left"
          data-aos-duration="1000"

          style={{margin:"auto 30px"}}
          alt="Profile Pic"

        />
    );
  }
}

export default SponsorThumbnail;
