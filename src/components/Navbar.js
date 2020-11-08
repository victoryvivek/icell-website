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
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/contact">Contact </a>
          </li>
        </ul>
      </>
    );
  }
}

export default NavBar;
