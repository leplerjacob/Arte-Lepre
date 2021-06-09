import React, { useEffect } from "react";
import {
  StyledContact,
  Details,
  Map,
  ImageContainer,
} from "./contact/styledContact";
import LoadImage from "../components/LoadImage";
import map from "../images/map.png";

function Contact() {
  return (
    <StyledContact>
      <Details>
        <span>
          <h2>Contact</h2>
        </span>
        <div>
          <div>
            {/* <span>Address: </span> */}
            <span>
              5130 Howard Avenue,
              <br /> Kensington, MD 20895
            </span>
          </div>
          <div>
            {/* <span>Call: </span> */}
            <span>202-550-5312</span>
          </div>
          <div>
            {/* <span>Email: </span> */}
            <span>artelepre@gmail.com</span>
          </div>
        </div>
      </Details>
      {/* <hr style={{ width: "650px" }} /> */}
      {/* <Map> */}
      {/* <LoadImage image={map}/> */}
      {/* <a href="https://goo.gl/maps/47YRA1be9vieWk7n8" target="_blank">
          <img src={map} alt="map" />
        </a> */}
      {/* </Map> */}
    </StyledContact>
  );
}

export default Contact;
