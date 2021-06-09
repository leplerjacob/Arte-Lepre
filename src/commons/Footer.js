import React from "react";
import {
  StyledFooter,
  LeftSide,
  RightSide,
  EachContact,
} from "./footer/styledFooter";
// import logo from "../images/logo310.png";
import { ImLocation, ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { Logo } from "./header/styledHeader";
import logo from "../images/Logo.png";

function Footer() {
  return (
    <StyledFooter>
      <RightSide>
        {"Via Carlo Poerio 80 - 80121 Napoli, Italy | 4130 Howard Ave, Kensington, MD 20895"}
      </RightSide>
    </StyledFooter>
  );
}

export default Footer;
