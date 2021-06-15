import React from "react";
import { StyledFooter, FooterContent } from "./footer/styledFooter";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterContent>
        <div>
          <span>Raffaele Lepre - Napoli: Via Carlo Poerio 80 - 80121 Napoli, Italy</span>
        </div>
        <div>
          <span>Fabio Lepre - DC: 4130 Howard Ave, Kensington, MD 20895</span>
        </div>

        <small>Copyright &copy; {date} Arte Lepre. All Rights Reserved</small>
      </FooterContent>
    </StyledFooter>
  );
}

// Copyright <small>&copy; Copyright 2018, Example Corporation</small>

export default Footer;
