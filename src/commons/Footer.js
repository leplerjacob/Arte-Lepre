import React from "react";
import { StyledFooter, FooterContent } from "./footer/styledFooter";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterContent>
        <span>Napoli: Via Carlo Poerio 80 - 80121 Napoli, Italy</span>
        <span>DC: 4130 Howard Ave, Kensington, MD 20895</span>

        <small>Copyright &copy; {date} Arte Lepre. All Rights Reserved</small>
      </FooterContent>
    </StyledFooter>
  );
}

// Copyright <small>&copy; Copyright 2018, Example Corporation</small>

export default Footer;
