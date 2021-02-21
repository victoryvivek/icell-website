import React from 'react';
import "../static/css/Eventadd.css";
 
const Eventadd = () => {
    return (
       <>
        <div className="main">
            <div className="banner">
                <div className="banner_text">Admin Panel- Industry Cell website</div>
            </div>
            <div className="heading">New Event</div>
            <div className="input_title">
                <input placeholder="Title"></input>
            </div>
            <div className="input_event_link">
                <input placeholder="Event link"></input>
            </div>  
            <div className="input_description">
                <textarea placeholder="Description"></textarea>
            </div>
            <div className="upload_button_panel">
                <input type="button" value="Add link"></input>
                <input type="button" value="Upload cover image"></input>
            </div>
            <div class="submit_button_panel">
                <input type="button" value="Cancel" style={{"backgroundColor":"red"}}></input>
                <input type="button" value="Submit" style={{"backgroundColor":"green"}}></input>
            </div>
        </div>
       </>
    );
}


export default Eventadd;