import React from "react";
import { StyledFooter, FooterContent } from "./footer/styledFooter";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterContent>
        <div>
          <span>Napoli: Via Carlo Poerio 80 - 80121 Napoli, Italy - Raffaele Lepre</span>
        </div>
        <div>
          <span>Washington, D.C.: 4130 Howard Ave, Kensington, MD 20895 - Fabio Lepre</span>
        </div>

        <small>Copyright &copy; {date} Arte Lepre. All Rights Reserved</small>
      </FooterContent>
    </StyledFooter>
  );
}

// Copyright <small>&copy; Copyright 2018, Example Corporation</small>

export default Footer;
