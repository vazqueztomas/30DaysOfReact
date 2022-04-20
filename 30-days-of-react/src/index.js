import React from "react";
import ReactDOM from "react-dom";
import avatarImage from './images/foto1.jpg'

const jsx = <h1>Hola mundo!</h1>;
const title = <h2>Getting started React</h2>;
const author = {
  firstName: 'Tomas',
  lastName: 'Vazquez',
}

const header = (
  <header className="header-wrapper">
    <h1>welcome to 30 days of react</h1>
    {title}
  </header>
);

const num1 = 3
const num2 = 2

const result = (
  <p>
    {num1} + {num2} = {num1+num2}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const userStyle = {
  "width":"200px"
}

const user = ( 
  <div>
    <img src={avatarImage} style = {userStyle}alt = 'avatar image'/>
  </div>
)

const main = (
  <main className="main-wrapper">
    <p>Prerequisite to get started on React: </p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      
    </ul>
    {result}
    {user}
  </main>
);

const footer = (
  <footer className="footer-wrapper">
    <p>Copyright 2022</p>
  </footer>
);

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
