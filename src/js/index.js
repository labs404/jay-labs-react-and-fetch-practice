//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import AgePredictor from "./component/agePredictor";

//render your react application
ReactDOM.render(<AgePredictor />, document.querySelector("#app"));
// ReactDOM.render(<Home />, document.querySelector("#app"));