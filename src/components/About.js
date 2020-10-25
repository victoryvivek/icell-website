import React from 'react';
import "../static/css/about.css"
import Navbar from "../components/Navbar"
const About = () => {
  return (
    <div>
      <Navbar/>
      <div class="container">
      <div className="row"><div className="col s12">
        <h1 class="center align">About Us</h1>
      </div></div>
      <div class="row">
        <div class="col m4 s12">
          <div class="card-panel red lighten-2 z-depth-3">
            <div class="card-content white-text">
              <span class="card-title">
                <p className="center align">

                  <svg viewBox="0 0 16 16" class="bi bi-bullseye  about_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                    <path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                    <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                </p>
                <h3 className="center align">VISION</h3></span>

            </div>

          </div>
        </div>
        <div class="col m4 s12">
          <div class="card-panel pink lighten-2 z-depth-3">
            <div class="card-content white-text">
              <span class="card-title">
                <p className="center align">

                  <svg viewBox="0 0 16 16" class="bi bi-flag about_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
                  </svg>
                </p>
                <h3 className="center align">MISSION</h3></span>

            </div>

          </div>
        </div>
        <div class="col m4 s12">
          <div class="card-panel purple lighten-2 z-depth-3">
            <div class="card-content white-text">
              <span class="card-title">
                <p className="center align">

                <svg viewBox="0 0 16 16" class="bi bi-bookmark-heart-fill about_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
</svg>
                </p><h3 className="center align">PASSION</h3></span>

            </div>

          </div>
        </div>
      </div>
    </div>
    </div>)
}

export default About;