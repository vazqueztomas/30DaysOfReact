import React from "react";
import ReactDOM from "react-dom";
import avatarImage from "./images/foto1.jpg";
import feTech from "./images/frontend_technologies.png";

const techs = (
  <div>
    <img src={feTech} className="techs" />
  </div>
);

// level 2
const form = (
  <div className="formulario">
    <h1 className="title">SUBSCRIBE</h1>
    <h4 className="sub-title">
      Sign up with your email address to receive news and updates
    </h4>
    <form className="input-container">
      <input placeholder="First name"></input>
      <input placeholder="Last name"></input>
      <input placeholder="Email"></input>
    </form>
    <button>Subscribe</button>
  </div>
);
// Level 3

const name = "Tomas Vazquez";
const paragraph = "Front end developer, Argentina.";

const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "FIREBASE",
  "MONGODB",
  "NODE",
  "PYTHON",
];
const skillsFormated = skills.map((item) => 
  <li>{item}</li>
);

let today = new Date().toDateString();

const userCard = (
  <div className="userCard">
    <div className="info">
      <img src={avatarImage} alt="User Card" />
      <h3>{name}</h3>
      <p>{paragraph}</p>
    </div>
    <div className="skills">
      <h4>SKILLS</h4>
      <ul className="skills-list">{skillsFormated}</ul>
    </div>

    <p className="joined">Joined {today}</p>
  </div>
);

const app = (
  <div className="app">
    {techs}
    {form}
    {userCard}
  </div>
);
const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
