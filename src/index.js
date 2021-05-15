import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/KingthingsItalique.ttf";
import "./fonts/CloisterBlack.ttf";
import "./fonts/LibreBaskerville-Regular.ttf";
import SimpleReactLightbox from "simple-react-lightbox";
import App from "./App";



ReactDOM.render(
  <SimpleReactLightbox>
    <App />
  </SimpleReactLightbox>,
  document.getElementById("root")
);
