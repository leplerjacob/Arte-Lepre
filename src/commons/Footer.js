import React from "react";
import {
  StyledFooter,
  LeftSide,
  RightSide,
  EachContact,
} from "./footer/styledFooter";
import logo from "../images/logo310.png";
import { ImLocation, ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import {
  FaInstagramSquare,
} from "react-icons/fa";
import { Logo } from "./header/styledHeader";

function Footer() {
  return (
    <StyledFooter>
      <LeftSide>
        <EachContact>
          <ImLocation />
          <span>4130 Howard Avenue Kensington, MD 20895</span>
        </EachContact>
        <EachContact>
          <ImPhone />
          <span>202-550-5312</span>
        </EachContact>
        <EachContact>
          <MdEmail />
          <span>artelepre@gmail.com</span>
        </EachContact>
      </LeftSide>
      <RightSide>
        <Logo>Arte Lepre</Logo>
        <span>Contact us today for a quote</span>
        <a
          href="https://instagram.com/artelepre?utm_medium=copy_link"
          target="_blank"
        >
          <FaInstagramSquare></FaInstagramSquare>
        </a>
      </RightSide>
    </StyledFooter>
  );
}

export default Footer;
