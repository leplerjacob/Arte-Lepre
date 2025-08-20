import React from "react";
import { Link } from 'react-router-dom';
import styles from './NavLinks.module.css';

const NavLinks = ({ open }) => {
  // Dynamic style for open/closed state
    return (
      <ul className={`${styles.ul} ${open ? styles.open : ''}`}> 
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/history">History</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/inventory">Purchase</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
