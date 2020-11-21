import React, { Component } from "react";
import { Link } from "react-router-dom";

import M from "materialize-css";
import icelllogo from "../static/img/icell.gif";
import "../static/css/navbar.css";

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var options = {
    draggable: true,
    edge: "left",
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  };
  var instances = M.Sidenav.init(elems, options);
});
function closeSideNav()
{
  var el = document.querySelector(".sidenav");
  var inst = M.Sidenav.getInstance(el);
  inst.close();
}
class NavBar extends Component {
  render() {
    
    return (
      <>
        <nav className="navbar">
          <div class="nav-wrapper black">
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <img src={icelllogo} className="navbarLogo left" />

            <div className="left">
              <div className="title">Industry Cell</div>
              <div className="subTitle">NIT Kurukshetra</div>
            </div>
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact </Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <Link to="/home"  onClick={()=>{closeSideNav()}}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={()=>{closeSideNav()}}>About</Link>
          </li>
          <li>
            <Link to="/events" onClick={()=>{closeSideNav()}}>Events</Link>
          </li>
          <li>
            <Link to="/blog" onClick={()=>{closeSideNav()}}>Blog</Link>
          </li>
          <li>
            <Link to="/team" onClick={()=>{closeSideNav()}}>Team</Link>
          </li>
          <li>
            <Link to="/contact" onClick={()=>{closeSideNav()}}>Contact </Link>
          </li>
          <li>
            <p className="disclaimer">
          © All rights are retained by Industry cell, National Institute of Technology, Kurukshetra.
          </p>
          </li>
        </ul>
      </>
    );
  }
}

export default NavBar;
