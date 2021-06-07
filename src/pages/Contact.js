import React from "react";
import { StyledContact, Details, Map } from "./contact/styledContact";
import map from "../images/map.png";

function Contact() {
  return (
    <StyledContact>
      <Details>
        <span>
          <h2>Contact Arte Lepre</h2>
        </span>
        <div>
          <span>Address: </span>
          <span>5130 Howard Avenue, Kensington, MD 20895</span>
        </div>
        <div>
          <span>Phone: </span>
          <span>202-550-5312</span>
        </div>
        <div>
          <span>Email: </span>
          <span>artelepre@gmail.com</span>
        </div>
      </Details>
      <hr style={{ width: "650px" }} />
      <Map>
        <a href="https://goo.gl/maps/47YRA1be9vieWk7n8" target="_blank">
          <img src={map} alt="map" />
        </a>
      </Map>
    </StyledContact>
  );
}

export default Contact;
