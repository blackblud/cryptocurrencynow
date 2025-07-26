import React from "react";
import ReactDOM from "react-dom";
import Router from "./ui/router/Router";
import "./ui/style/mobile.scss";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,

  document.getElementById("root")
);
