import styles from "styled-components";
import { device } from "../../components/breakpoints";
import OpenSansLight from "../../static/fonts/OpenSans-Light.ttf";
import Lora from "../../static/fonts/Lora-Medium.ttf";

export const NavWrapper = styles.header`
    top: 0;
    width: 100%;
    max-width: 1024px;
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
    height: 150px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;

    a {
        color: #d6af63; // Gold
        text-decoration: none;
        font-family: Lora;
        padding: 1rem;
        display: block;
    }
    
    a:hover {
        color: whitesmoke;
        border-bottom: 1px solid white;
    }

    @media ${device.mobile} {
        display: block;
    }

    @media ${device.tablet} {
        justify-content: center;
    }
    
    `;

export const Flag = styles.div`

    img {
        height: 50px;
        width: 65px;
    }
    
    @media ${device.tablet} {
        img {
            position: absolute;
            width: 65px;
            height: 50px;
            z-index: 5;
            right: 5px;
            bottom: 0;
        }
    }
`;

export const Logo = styles.div`

    display: flex;
    justify-content: center;

    img {
        width: 450px;
        max-width: 450px;
    }

    @media ${device.mobile} {
        img {
            height: 100%;
            max-width: 80vw;
        }
    }
`;
