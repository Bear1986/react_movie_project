import React from "react";
import "./nav.css";
// assets
import back from "../assets/back-arrow.png";
import home from "../assets/homepage.png";
import profile from "../assets/user.png";
import settings from "../assets/options.png";

function Nav() {
  return (
      <div className="navbar">
          
      <div className="Back">
<img src={back} alt="back" />
      </div>

      <div className="Home">
<img src={home} alt="home"/>
      </div>

      <div className="Profile">
        <img src={profile} alt="your profile"/>
      </div>

      <div className="settings">
<img src={settings} alt="your settings"/>
      </div>
    </div>
  );
}

export default Nav;
