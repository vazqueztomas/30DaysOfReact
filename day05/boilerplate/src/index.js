import React from "react";
import ReactDOM from "react-dom";
import Functionales from "./Functionals";
import Level2 from "./Level2";
import Primitives from "./primitiveTypes";
import Level3 from "./Level3";

const getHexa = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const App = () => {
  return (
    <div className="app">
      <Primitives />
      <Functionales />
      <Level2
        src={
          "https://raw.githubusercontent.com/Asabeneh/30-Days-Of-React/master/images/frontend_technologies.png"
        }
      />
      <Level3 background={getHexa()} text={getHexa()} />
      <Level3 background={getHexa()} text={getHexa()} />
      <Level3 background={getHexa()} text={getHexa()} />
      <Level3 background={getHexa()} text={getHexa()} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
