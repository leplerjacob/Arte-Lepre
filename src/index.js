import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SimpleReactLightbox from "simple-react-lightbox";
import App from "./App";



ReactDOM.render(
  <SimpleReactLightbox>
    <App />
  </SimpleReactLightbox>,
  document.getElementById("root")
);
