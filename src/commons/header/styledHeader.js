import styles from "styled-components";
import { device } from "../../components/breakpoints";
import CloisterBlack from "../../static/fonts/CloisterBlack.ttf";
import OpenSansLight from "../../static/fonts/OpenSans-Light.ttf";
import Lora from "../../static/fonts/Lora-Medium.ttf";
import circle from "../../images/logo310.png";

export const NavWrapper = styles.header`
    top: 0;
    width: 100%;
    max-width: 1024px;
    background: #2e373d; // black
    background: #1d3356; // blue
    z-index: 100;
    border-bottom: 1px solid white;
    `;

export const StyledNav = styles.nav`
    @font-face {
        font-family: "OpenSans";
        src: url(${OpenSansLight}) format("truetype")
    }

    @font-face {
        font-family: "Lora";
        src: url(${Lora}) format("truetype")
    }

    display: flex;
    width: 100vw;
    max-width: 1024px;
    height: 145px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    a {
        color: #d6af63; // Gold
        text-decoration: none;
        font-family: Lora;
        padding: 1rem;
    }
    
    a:hover {
        color: whitesmoke;
    }
    
    ul {
        list-style: none;
        float: right;
        justify-self: flex-end;
        padding: 0;
    }
    
    `;

export const Flag = styles.div`
    height: 50px;
    width: 65px;
    img {
        height: 100%;
        width: auto;
    }
`