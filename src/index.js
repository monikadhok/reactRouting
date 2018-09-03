import React from "react"
import ReactDOM from "react-dom"
import App from "./App/."
import Parent from "./Parent/."
import {whyDidYouUpdate} from "why-did-you-update"
import {registerObserver} from "react-perf-devtool"


function callback(measures) {
  // do something with the measures
  console.log("Monika");
}

registerObserver({}, callback);
whyDidYouUpdate(React);

//perf.start();
ReactDOM.render(
    <Parent/>,
    document.querySelector("#container")
)
//perf.stop();
//var measurements =  perf.getLastMeasurements();
////perf.printInclusive(measurements)