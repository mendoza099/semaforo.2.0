//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import 'relative/path/to/stylesheet.scss';

//import your own components
import TrafficLight from "./component/trafficLight.jsx";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));