import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Math from "./pages/Math/MathGame";


function App() {
  return (
    <>
      <div style={{textAlign: "center"}}>
        <h1>Its Loading Correctly</h1>
        <img src="https://media.giphy.com/media/12dDR6n2Nqto4g/giphy.gif" alt="Walking zombie"></img>

        <Math/>
      </div>
    </>
  );
}

export default App;
