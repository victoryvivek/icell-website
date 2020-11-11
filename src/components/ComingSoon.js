import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "../static/css/comingsoon.css";
import construction from "../static/img/construction.png";

class NotFound extends Component {
  render() {
    return (
      <>
        <div className="outfit-comingsoon">
          
          <div>
            <img
              className="construction-comingsoon"
              src={construction}
              alt="innovation"
            />
            <h1 className="heading-comingsoon">Coming Soon</h1>
            <p className="paragraph-comingsoon">
              The page you are looking for is under Construction.
            </p>
          </div>

          <div>
            <a href="/home" className="homebtn">
              Show me the Homepage
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NotFound;

/*
<div className="remove-all-style container-comingsoon">
          <div className="image-comingsoon">
            <img src={construction} alt="comming soon" />
            <div className="content-comingsoon">
              <h1 className="heading-comingsoon"> Coming Soon !</h1>
              <p className="paragraph-comingsoon">
                The page you are looking for is under Construction.
              </p>
              <Link to="/home" className="big-button">
                Show me the Homepage
              </Link>
            </div>
          </div>
        </div> 
*/

/*
<div className="outfit">
          <Navbar />
          <div>
            <img className="bulb" src={construction} alt="innovation" />
            <p className="heading">Coming Soon</p>
          </div>

          <div>
            <Link to="/home" className="know">
              Show me the Homepage
            </Link>
          </div>
        </div>
*/
