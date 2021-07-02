import React from "react";
import { StyledFooter, FooterContent, ClrPomp } from "./footer/styledFooter";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterContent>
        <div>
          <span>
            <ClrPomp>Napoli:</ClrPomp> Via Carlo Poerio 80 - 80121 Napoli, Italy
            - <span>Raffaele Lepre</span>
          </span>
        </div>
        <div>
          <span>
            <ClrPomp>Washington, DC:</ClrPomp> 4130 Howard Ave, Kensington, MD
            20895 - <span>Fabio Lepre</span>
          </span>
        </div>
        <small>
          Copyright &copy; {date}
          Arte Lepre. All Rights Reserved
        </small>
      </FooterContent>
    </StyledFooter>
  );
}

// Copyright <small>&copy; Copyright 2018, Example Corporation</small>

export default Footer;
