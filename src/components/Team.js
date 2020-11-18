import React, { Component } from "react";
import "../static/css/teams.css";

import axios from "axios";
import { BASE_URL } from "../config/config";

import ProfileCard from "./ProfileCard/ProfileCard";
import BigProfileCard from "./ProfileCard/BigProfileCard";

class Team extends Component {
  state = {
    teams: []
  };

  componentDidMount() {
    const url = BASE_URL + "team";
    axios.get(url).then(res => {
      console.log(res);
      if (res.data.success) {
        this.setState({
          teams: res.data.teams
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
    let coreMembers = [];
    let developers = [];

    this.state.teams.map(member => {
      let team = member.position_holding;
      team = team.toLowerCase();
      team = team.replace(/ +/g, "");
      switch (team) {
        case "corporateteam": {
          corporateTeamMembers.push(
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
          break;
        }
        case "technicalteam": {
          technicalTeamMembers.push(
            <ProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              position="associate"
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

        case "networkingandoutreachteam": {
          networkTeamMembers.push(
            <ProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              position="associate"
              outerClasses={{
                card: true,
                green: true,
                "accent-3": true,
                cardTeamMembers: true
              }}
            />
          );
          break;
        }
        case "marketingandmediateam": {
          mediaTeamMembers.push(
            <ProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              position="associate"
              outerClasses={{
                card: true,
                cyan: true,
                "darken-2": true,
                cardTeamMembers: true
              }}
            />
          );
          break;
        }
        case "designteam": {
          designTeamMembers.push(
            <ProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              position="associate"
              outerClasses={{
                card: true,
                orange: true,
                "accent-3": true,
                cardTeamMembers: true
              }}
            />
          );
          break;
        }

        case "coreteam": {
          coreMembers.push(
            <BigProfileCard
              facebookUrl={member.facebookUrl}
              email={member.email}
              image={member.image}
              instagramUrl={member.instagram_url}
              linkedinUrl={member.linkedin_url}
              phone={member.phone}
              key={member._id}
              name={member.name}
              position={member.post}
            />
          );
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
              position="associate"
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

    return (
      <>
        <div className="container-fluid">
          <div className="row upperTitleBackground">
            <div className="col m12 s12">
              <h1 className="center align">Teams</h1>
            </div>
          </div>
        </div>
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
              <h2 className="center align">Networing and Outreach Team</h2>
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
  }
}

export default Team;
