import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import TechList from "./TechList";
import UserCard from "./UserCard";
import Footer from "./Footer";
import Button from "./Button";
import HexaColor from "./HexaColor";

const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to start learn React</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <Button />
      <h1>Level 3</h1>
      <p>Exercise 1 </p>
      <HexaColor />
      <HexaColor />
      <HexaColor />
      <HexaColor />
      <HexaColor />
    </div>
  </main>
);



const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
