import React, { Component } from "react";
import "../static/css/teams.css";

import axios from "axios";
import { BASE_URL } from "../config/config";

import ProfileCard from "./ProfileCard/ProfileCard";
import BigProfileCard from "./ProfileCard/BigProfileCard";
import Spinner from "./Spinner";

class Team extends Component {
  state = {
    teams: [],
    success: false
  };

  componentDidMount() {
    const url = BASE_URL + "team";
    axios.get(url).then(res => {
      if (res.data.success) {
        this.setState({
          teams: res.data.teams,
          success: res.data.success
        });
      }
    });
  }

  render() {
    let designTeamMembers = [];
    let networkTeamMembers = [];
    let technicalTeamMembers = [];
    let mediaTeamMembers = [];
    let corporateTeamMembers = [];
    let coreMembers = [[], [], [], []];
    let developers = [];
    let content;

    this.state.teams.map(member => {
      let team = member.position_holding;
      team = team.toLowerCase();
      team = team.replace(/ +/g, "");

      let post = member.post;
      post = post.toLowerCase();
      post = post.replace(/ +/g, "");

      switch (team) {
        case "corporateteam": {
          let data = (
            <ProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              post={member.post}
              outerClasses={{
                card: true,
                purple: true,
                "darken-2": true,
                cardTeamMembers: true
              }}
            />
          );
          if (post == "teamlead") {
            corporateTeamMembers.unshift(data);
          } else {
            corporateTeamMembers.push(data);
          }

          break;
        }
        case "technicalteam": {
          let data = (
            <ProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              post={member.post}
              outerClasses={{
                card: true,
                indigo: true,
                "darken-2": true,
                cardTeamMembers: true
              }}
            />
          );
          if (post == "teamlead") {
            technicalTeamMembers.unshift(data);
          } else {
            technicalTeamMembers.push(data);
          }
          break;
        }

        case "networkingandoutreachteam": {
          let data = (
            <ProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              post={member.post}
              outerClasses={{
                card: true,
                green: true,
                "accent-3": true,
                cardTeamMembers: true
              }}
            />
          );
          if (post == "teamlead") {
            networkTeamMembers.unshift(data);
          } else {
            networkTeamMembers.push(data);
          }
          break;
        }
        case "marketingandmediateam": {
          let data = (
            <ProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              post={member.post}
              outerClasses={{
                card: true,
                cyan: true,
                "darken-2": true,
                cardTeamMembers: true
              }}
            />
          );
          if (post == "teamlead") {
            mediaTeamMembers.unshift(data);
          } else {
            mediaTeamMembers.push(data);
          }
          break;
        }
        case "designteam": {
          let data = (
            <ProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              post={member.post}
              outerClasses={{
                card: true,
                orange: true,
                "accent-3": true,
                cardTeamMembers: true
              }}
            />
          );
          if (post == "teamlead") {
            designTeamMembers.unshift(data);
          } else {
            designTeamMembers.push(data);
          }
          break;
        }

        case "coreteam": {
          let data = (
            <BigProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              post={member.post}
            />
          );

          if (post === "president") {
            coreMembers[0] = data;
          } else if (post === "vicepresident") {
            coreMembers[1] = data;
          } else if (post === "secretary") {
            coreMembers[2] = data;
          } else if (post === "jointsecretary") {
            coreMembers[3] = data;
          } else {
            coreMembers.push(data);
          }

          break;
        }
        case "developerteam": {
          developers.push(
            <ProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              post={member.post}
              outerClasses={{
                card: true,
                indigo: true,
                "darken-2": true,
                cardTeamMembers: true
              }}
            />
          );
          break;
        }
        default: {
          break;
        }
      }
    });

    if (this.state.success) {
      content = (
        <>
          <div className="container">
            <div className="row">
              <div className="col m12 s12">
                <h1 className="center align">Core Team</h1>
              </div>
            </div>
            <div className="row">{coreMembers}</div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col m12 s12">
                <h2 className="center align">Corporate Team</h2>
              </div>
            </div>
            <div className="row center align ">{corporateTeamMembers}</div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col m12 s12">
                <h2 className="center align">Technical Team</h2>
              </div>
            </div>
            <div className="row center align">{technicalTeamMembers}</div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col m12 s12">
                <h2 className="center align">Networking and Outreach Team</h2>
              </div>
            </div>
            <div className="row center align">{networkTeamMembers}</div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col m12 s12">
                <h2 className="center align">Marketing and Media Team</h2>
              </div>
            </div>
            <div className="row center align">{mediaTeamMembers}</div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col m12 s12">
                <h2 className="center align">Design Team</h2>
              </div>
            </div>
            <div className="row center align">{designTeamMembers}</div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col m12 s12">
                <h2 className="center align">Developers</h2>
              </div>
            </div>
            <div className="row center align">{developers}</div>
          </div>
        </>
      );
    } else {
      content = <Spinner />;
    }

    return (
      <>
        <div className="container-fluid">
          <div className="row upperTitleBackground">
            <div className="col m12 s12">
              <h1 className="center align">Teams</h1>
            </div>
          </div>
        </div>
        {content}
      </>
    );
  }
}

export default Team;
