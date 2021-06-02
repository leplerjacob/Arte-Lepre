import React from "react";
import { device } from '../../components/breakpoints'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;

  @media ${device.tablet} {
    border-radius: 2px;
    box-shadow: 10px 5px 5px rgba(0,0,0,0.6);
    background-color: #0d2538;
    padding: 0;
    margin-top: 70px;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100vw)")};
    top: 0;
    right: 0;
    width: 200px;
    transition: transform 0.3s ease-in-out;
    & {
      display: flex;
      flex-direction: column;
    }
    li {
      padding: 1rem;
    }
    a {
      width: 100%;
    }
  }
`;

const NavLinks = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
          {console.log(device.laptop)}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/for-sale">Purchase</Link>
      </li>
    </Ul>
  );
};

export default NavLinks;
