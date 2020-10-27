import React from 'react';
import "../static/css/about.css"
import Navbar from "../components/Navbar"
import icell_logo from "../static/img/icell_background.jpg";
const About = () => {
  return (
    <div>
      <Navbar />

      <div className="container-fluid">
        <div className="row upperTitleBackground">
          <div className="col m12 s12">
            <h1 className="center align">About Us</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col m12 s12" style={{textAlign:"center"}}>
            <img src={icell_logo} className="logo" data-aos="flip-left" data-aos-duration="1000"/>
          </div>
        </div>
        <div className="row">
          <div className="col m12 s12">
            <p className="aboutPara">Eiusmod ad pariatur cupidatat eiusmod et ipsum excepteur consequat adipisicing. Velit irure et ullamco proident sit dolor occaecat.
            Fugiat laborum amet veniam tempor laboris. Eiusmod elit ipsum deserunt dolore aliqua dolor Lorem exercitation labore.
             Lorem deserunt eiusmod non ad magna occaecat et.</p>
          </div>
        </div>

        <div class="row">
          <div class="col m4 s12">
            <div class="card-panel light-blue darken-1 z-depth-3"  data-aos="fade-left" data-aos-duration="1000">
              <div class="card-content white-text">
                <span class="card-title">
                <h1 className="center align">35</h1>
                  
                  <h5 className="center align">
                  EVENTS
                   
                  </h5>
                  
                  </span>

              </div>

            </div>
          </div>
          <div class="col m4 s12">
            <div class="card-panel cyan darken-1 z-depth-3" data-aos="fade-left" data-aos-duration="1000">
              <div class="card-content white-text">
                <span class="card-title">
                <h1 className="center align">99</h1>
                  
                  <h5 className="center align">
                  STUDENTS
                   
                  </h5>
                  </span>
              </div>

            </div>
          </div>
          <div class="col m4 s12">
            <div class="card-panel teal accent-3 z-depth-3" data-aos="fade-left" data-aos-duration="1000">
              <div class="card-content white-text">
                <span class="card-title">
                <h1 className="center align">63</h1>
                  
                  <h5 className="center align">
                  EXPERTS
                   
                  </h5>
                  
                  </span>

              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="container-fluid">
        <div className="row sponsorBackground">
          <div class="container">
            <div className="row">
              <div className="col m12 s12">
            <h1 className="center align">Sponsors</h1>
            </div>
            </div>
            <div className="row">
              <div className="col m4 s12">
            <img src={icell_logo} className="sponsorsLogo" data-aos="flip-left" data-aos-duration="1000"/>
            </div>
            <div className="col m4 s12">
            <img src={icell_logo} className="sponsorsLogo" data-aos="flip-left" data-aos-duration="1000"/>
            </div>
            <div className="col m4 s12">
            <img src={icell_logo} className="sponsorsLogo" data-aos="flip-left" data-aos-duration="1000"/>
            </div>
            </div>
            <div className="row">
              <div className="col m4 s12">
            <img src={icell_logo} className="sponsorsLogo" data-aos="flip-left" data-aos-duration="1000"/>
            </div>
            <div className="col m4 s12">
            <img src={icell_logo} className="sponsorsLogo" data-aos="flip-left" data-aos-duration="1000"/>
            </div>
            <div className="col m4 s12">
            <img src={icell_logo} className="sponsorsLogo" data-aos="flip-left" data-aos-duration="1000"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default About;