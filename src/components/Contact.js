import React from "react"
import "../static/css/contact.css"

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row upperContactTitleBackground">
          <div className="col m12 s12">
            <h1 className="center align">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row center-align">
          <div className="col s3">
            
            <a href="https://www.instagram.com/icell.nitkkr/" target="_blank">
            <i class="fab fa-instagram contactLogo"></i>
            </a>
          
          </div>
          <div className="col s3">
            <a href="https://www.facebook.com/industrycell" target="_blank">
            <i class="fab fa-facebook-f contactLogo"></i>
            </a>
          </div>
          <div className="col s3">
            <i class="fab fa-twitter contactLogo"></i>
          </div>
          <div className="col s3">
            <a href="https://www.linkedin.com/company/industry-cell-nit-kurukshetra/" target="_blank">
            <i class="fab fa-linkedin contactLogo"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <div className="row">
          <div className="col s12">
            <div class="card contactBox">
              <div className="card-content">
                <div class="input-field">
                  <input id="name" type="text" class="validate" />
                  <label for="name">Name</label>
                </div>
                <div class="input-field">
                  <input id="email" type="email" class="validate" />
                  <label for="email">Email ID</label>
                </div>
                <div class="input-field">
                  <textarea id="textarea1" class="materialize-textarea" />
                  <label for="textarea1">Message</label>
                </div>
                <div class="form-group row">
                  <div class="offset-md-2 col-md-10">
                    <button type="submit" class="btn btn-lg btn-success " >SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;