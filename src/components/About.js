import React, { Component } from "react";
import axios from "axios";
import "../static/css/about.css";
import icell_logo from "../static/img/icell_background.jpg";
import { BASE_URL } from "../config/config";

import SponsorThumbnail from "./SponsorThumbnail";

class About extends Component {
  state = {
    sponsors: []
  };

  componentDidMount() {
    const url = BASE_URL + "aboutus";
    axios.get(url).then(res => {
      console.log(res);
      this.setState({
        sponsors: res.data.sponsors
      });
    });
  }

  render() {
    window.onscroll = function() {
      var path = window.location.pathname;
      var patt = path.search(/\/about/);

      var eventsNo, studentsNo, expertsNo;
      if (patt == 0)
        eventsNo = document.getElementById("eventsNo").getBoundingClientRect();
      if (patt == 0)
        studentsNo = document
          .getElementById("studentsNo")
          .getBoundingClientRect();
      if (patt == 0)
        expertsNo = document
          .getElementById("expertsNo")
          .getBoundingClientRect();

      if (patt == 0)
        if (
          Math.floor(eventsNo.top - window.scrollY) <= 0 &&
          Math.floor(eventsNo.top - window.scrollY) >= -100
        ) {
          var x = 200;
          var s = setInterval(() => {
            if (patt == 0)
              document.getElementById("eventsNo").innerText = "+" + x;
            x = x + 1;
            if (x > 500) clearInterval(s);
          }, 5);
        }

      if (patt == 0)
        if (
          Math.floor(studentsNo.top - window.scrollY) <= 0 &&
          Math.floor(studentsNo.top - window.scrollY) >= -100
        ) {
          var y = 500;
          var p = setInterval(() => {
            if (patt == 0)
              document.getElementById("studentsNo").innerText = "+" + y;
            y = y + 1;
            if (y > 900) clearInterval(p);
          }, 1.25);
        }

      if (patt == 0)
        if (
          Math.floor(expertsNo.top - window.scrollY) <= 0 &&
          Math.floor(expertsNo.top - window.scrollY) >= -100
        ) {
          var z = 400;
          var t = setInterval(() => {
            if (patt == 0)
              document.getElementById("expertsNo").innerText = "+" + z;
            z = z + 1;
            if (z > 750) clearInterval(t);
          }, 2.5);
        }
    };

    const sponsors = this.state.sponsors.map(sponsor => {
      return (
        <SponsorThumbnail name={sponsor.name} imageUrl={sponsor.imageUrl} />
      );
    });

    return (
      <div>
        <div className="container-fluid">
          <div className="row upperAboutTitleBackground">
            <div className="col m12 s12">
              <h1 className="center align">About Us</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col m12 s12" style={{ textAlign: "center" }}>
              <img
                src={icell_logo}
                className="logo"
                data-aos="flip-left"
                data-aos-duration="1000"
              />
            </div>
          </div>
          <div className="row">
            <div className="col m12 s12">
              <p className="aboutPara">
                Industry Cell, NIT Kurukshetra (I-Cell) is a non-profit
                student’s organization dedicated to promoting the spirit of
                entrepreneurship among college students. The basic aim of
                Industry Cell, NIT Kurukshetra is to encourage college-level
                students throughout the nation to start their own enterprise .
                There is a strong vision and dedication to achieve this aim,
                which it intends to do by the following initiatives:
              </p>
              <ul class="collection">
                <li class="collection-item  light-blue lighten-5">
                  Organising Workshops and Lectures periodically to create
                  awareness about entrepreneurship.
                </li>
                <li class="collection-item  light-blue lighten-4">
                  Functioning as a guide for students with creative ideas which
                  can be transformed into successful companies.
                </li>
                <li class="collection-item light-blue lighten-3">
                  Providing Mentorship through individuals for students
                  launching their start-ups.
                </li>
                <li class="collection-item light-blue lighten-2">
                  Having realised the fulfilment of the aim of 'Promoting
                  starting up', I-cell organises different kinds of quizzes,
                  events and also workshops.
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col m4 s12">
              <div
                class="card-panel valueIncrease light-blue darken-1 z-depth-3"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div class="card-content white-text">
                  <span class="card-title">
                    <h1 className="center align" id="eventsNo">
                      35
                    </h1>

                    <h5 className="center align">EVENTS</h5>
                  </span>
                </div>
              </div>
            </div>
            <div class="col m4 s12">
              <div
                class="card-panel valueIncrease cyan darken-1 z-depth-3"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div class="card-content white-text">
                  <span class="card-title">
                    <h1 className="center align" id="studentsNo">
                      99
                    </h1>

                    <h5 className="center align">STUDENTS</h5>
                  </span>
                </div>
              </div>
            </div>
            <div class="col m4 s12">
              <div
                class="card-panel valueIncrease teal accent-3 z-depth-3"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div class="card-content white-text">
                  <span class="card-title">
                    <h1 className="center align" id="expertsNo">
                      63
                    </h1>

                    <h5 className="center align">EXPERTS</h5>
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
              <div className="row">{sponsors}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const About = () => {
//   {
//     console.log(window.location.pathname);

//     window.onscroll = function() {
//       var path = window.location.pathname;
//       var patt = path.search(/\/about/);

//       var eventsNo, studentsNo, expertsNo;
//       if (patt == 0)
//         eventsNo = document.getElementById("eventsNo").getBoundingClientRect();
//       if (patt == 0)
//         studentsNo = document
//           .getElementById("studentsNo")
//           .getBoundingClientRect();
//       if (patt == 0)
//         expertsNo = document
//           .getElementById("expertsNo")
//           .getBoundingClientRect();

//       if (patt == 0)
//         if (
//           Math.floor(eventsNo.top - window.scrollY) <= 0 &&
//           Math.floor(eventsNo.top - window.scrollY) >= -100
//         ) {
//           var x = 200;
//           var s = setInterval(() => {
//             if (patt == 0)
//               document.getElementById("eventsNo").innerText = "+" + x;
//             x = x + 1;
//             if (x > 500) clearInterval(s);
//           }, 5);
//         }

//       if (patt == 0)
//         if (
//           Math.floor(studentsNo.top - window.scrollY) <= 0 &&
//           Math.floor(studentsNo.top - window.scrollY) >= -100
//         ) {
//           var y = 500;
//           var p = setInterval(() => {
//             if (patt == 0)
//               document.getElementById("studentsNo").innerText = "+" + y;
//             y = y + 1;
//             if (y > 900) clearInterval(p);
//           }, 1.25);
//         }

//       if (patt == 0)
//         if (
//           Math.floor(expertsNo.top - window.scrollY) <= 0 &&
//           Math.floor(expertsNo.top - window.scrollY) >= -100
//         ) {
//           var z = 400;
//           var t = setInterval(() => {
//             if (patt == 0)
//               document.getElementById("expertsNo").innerText = "+" + z;
//             z = z + 1;
//             if (z > 750) clearInterval(t);
//           }, 2.5);
//         }
//     };
//   }

//   return (
//     <div>
//       <div className="container-fluid">
//         <div className="row upperAboutTitleBackground">
//           <div className="col m12 s12">
//             <h1 className="center align">About Us</h1>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col m12 s12" style={{ textAlign: "center" }}>
//             <img
//               src={icell_logo}
//               className="logo"
//               data-aos="flip-left"
//               data-aos-duration="1000"
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col m12 s12">
//             <p className="aboutPara">
//               Industry Cell, NIT Kurukshetra (I-Cell) is a non-profit student’s
//               organization dedicated to promoting the spirit of entrepreneurship
//               among college students. The basic aim of Industry Cell, NIT
//               Kurukshetra is to encourage college-level students throughout the
//               nation to start their own enterprise . There is a strong vision
//               and dedication to achieve this aim, which it intends to do by the
//               following initiatives:
//             </p>
//             <ul class="collection">
//               <li class="collection-item  light-blue lighten-5">
//                 Organising Workshops and Lectures periodically to create
//                 awareness about entrepreneurship.
//               </li>
//               <li class="collection-item  light-blue lighten-4">
//                 Functioning as a guide for students with creative ideas which
//                 can be transformed into successful companies.
//               </li>
//               <li class="collection-item light-blue lighten-3">
//                 Providing Mentorship through individuals for students launching
//                 their start-ups.
//               </li>
//               <li class="collection-item light-blue lighten-2">
//                 Having realised the fulfilment of the aim of 'Promoting starting
//                 up', I-cell organises different kinds of quizzes, events and
//                 also workshops.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div class="row">
//           <div class="col m4 s12">
//             <div
//               class="card-panel valueIncrease light-blue darken-1 z-depth-3"
//               data-aos="fade-left"
//               data-aos-duration="1000"
//             >
//               <div class="card-content white-text">
//                 <span class="card-title">
//                   <h1 className="center align" id="eventsNo">
//                     35
//                   </h1>

//                   <h5 className="center align">EVENTS</h5>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div class="col m4 s12">
//             <div
//               class="card-panel valueIncrease cyan darken-1 z-depth-3"
//               data-aos="fade-left"
//               data-aos-duration="1000"
//             >
//               <div class="card-content white-text">
//                 <span class="card-title">
//                   <h1 className="center align" id="studentsNo">
//                     99
//                   </h1>

//                   <h5 className="center align">STUDENTS</h5>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div class="col m4 s12">
//             <div
//               class="card-panel valueIncrease teal accent-3 z-depth-3"
//               data-aos="fade-left"
//               data-aos-duration="1000"
//             >
//               <div class="card-content white-text">
//                 <span class="card-title">
//                   <h1 className="center align" id="expertsNo">
//                     63
//                   </h1>

//                   <h5 className="center align">EXPERTS</h5>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container-fluid">
//         <div className="row sponsorBackground">
//           <div class="container">
//             <div className="row">
//               <div className="col m12 s12">
//                 <h1 className="center align">Sponsors</h1>
//               </div>
//             </div>
//             <div className="row"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default About;
/*
<div className="col m4 s12">
                <img
                  src={icell_logo}
                  className="sponsorsLogo"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                />
              </div>
              <div className="col m4 s12">
                <img
                  src={icell_logo}
                  className="sponsorsLogo"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                />
              </div>
              <div className="col m4 s12">
                <img
                  src={icell_logo}
                  className="sponsorsLogo"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                />
              </div>

              <div className="col m4 s12">
                <img
                  src={icell_logo}
                  className="sponsorsLogo"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                />
              </div>
              <div className="col m4 s12">
                <img
                  src={icell_logo}
                  className="sponsorsLogo"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                />
              </div>

              <div className="row">
              <div className="col m4 s12">
                <img
                  src={icell_logo}
                  className="sponsorsLogo"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                />
              </div>
              <div className="col m4 s12">
                <img
                  src={icell_logo}
                  className="sponsorsLogo"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                />
              </div>
              <div className="col m4 s12">
                <img
                  src={icell_logo}
                  className="sponsorsLogo"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                />
              </div>
            </div>

            */
