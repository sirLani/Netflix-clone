import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "normalize.css";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./global-styles/global-styles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);

reportWebVitals();
