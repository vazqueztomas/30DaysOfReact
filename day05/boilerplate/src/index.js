import React from "react";
import ReactDOM from "react-dom";
import Functionales from "./Functionals";
import Level2 from "./Level2";
import Primitives from "./primitiveTypes";



const App = () => {   
    return (
  <div className="app">    
  <Primitives/>

  <Functionales/>
  <Level2 src = {'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-React/master/images/frontend_technologies.png'}/> 
  </div>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
