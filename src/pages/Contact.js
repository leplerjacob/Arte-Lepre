import React, { useEffect } from "react";
import {
  StyledContact,
  Details,
  Map,
  ImageContainer,
  StyledIcons,
} from "./contact/styledContact";
import LoadImage from "../components/LoadImage";
import map from "../images/map.png";
import { FaInstagramSquare, FaMapMarkerAlt } from "react-icons/fa";
import quarterMap from "../images/quarter-map.png";

function Contact() {
  return (
    <StyledContact>
      <Details>
        <span>
          <h2>Contact</h2>
          <span>Owner: Fabio Lepre</span>
        </span>
        <div>
          <div>
            <span>
              4130 Howard Avenue,
              <br /> Kensington, MD 20895
            </span>
          </div>
          <div>
            <span>By Appointment:</span>
          </div>
          <div>
            <span>(202)-550-5312</span>
            <br />
            <span>artelepre@gmail.com</span>
          </div>
        </div>
        <a href="https://g.page/ArteLepre?share" target="_blank">
          <img src={quarterMap} alt="" />
        </a>
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
