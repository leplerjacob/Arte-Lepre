import React from "react";
import { StyledContact, Details } from "./contact/styledContact";
import quarterMap from "../images/quarter-map.png";

function Contact() {
  return (
    <StyledContact>
      <Details>
        <span>
          <h2>Contact</h2>
          <span>Fabio Lepre</span>
        </span>
        <div>
          <div>
            <a href="https://g.page/ArteLepre?share" target="_blank">
              <span>
                4130 Howard Avenue,
                <br /> Kensington, MD 20895
              </span>
            </a>
          </div>
          <div>
            <span>By Appointment:</span>
          </div>
          <div>
            <a href="tel: 2025505312">
            <span>(202)-550-5312</span>
            </a>
            <br />
            <a href="mailto: artelepre@gmail.com">
            <span>artelepre@gmail.com</span>
            </a>
          </div>
        </div>
        <a href="https://g.page/ArteLepre?share" target="_blank">
          <img src={quarterMap} alt="" />
        </a>
      </Details>
    </StyledContact>
  );
}

export default Contact;
