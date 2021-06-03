import styles from "styled-components";
import { device } from "../../components/breakpoints";
import CloisterBlack from "../../static/fonts/CloisterBlack.ttf";
import OpenSansLight from "../../static/fonts/OpenSans-Light.ttf";
import circle from "../../images/logo310.png";

export const NavWrapper = styles.header`
    top: 0;
    width: 100%;
    background: #282e5f;
    z-index: 100;
`;

export const StyledNav = styles.nav`
    @font-face {
        font-family: "OpenSans";
        src: url(${OpenSansLight}) format("truetype")
    }

    display: flex;
    width: 100vw;
    height: 125px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    a {
        color: #CDA715;
        text-decoration: none;
        font-family: OpenSans;
        font-weight: bold;
    }

    ul {
        list-style: none;
        float: right;
        justify-self: flex-end;
        padding: 0;
    }

    li {
        padding: 1rem 1rem;
    }

    div:first-child {
        display: flex;
        flex-direction: row;
    }
`;

export const Logo = styles.span`
    @font-face {
        font-family: "CloisterBlack";
        src: url(${CloisterBlack}) format("truetype")
    }

    @media ${device.mobile} {
        position: absolute;
        width: 100%;
        top: 13px;
        margin: auto;
    }

    font-family: CloisterBlack;
    font-weight: 800;
    line-height: 1;
    color: linear-gradient(to bottom left, #ffffff 0%, #bababa 100%);
    background: -webkit-linear-gradient(#eee, #999);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
    letter-spacing: 5px;
    justify-self: flex-start;
`;

export const LogoTextContainer = styles.div`
    display: flex; 
    flex-direction: column;
`

export const Icon = styles.div`
    background: url(${circle});
    margin: 0 20px;
    height: 50px;
    width: 50px;
    display: block;
    background-size: contain;
`;

export const SinceYear = styles.span`
    @font-face {
        font-family: "CloisterBlack";
        src: url(${CloisterBlack}) format("truetype")
    }
    font-family: CloisterBlack;
    font-size: 1rem;
    color: linear-gradient(to bottom left, #ffffff 0%, #bababa 100%);
    background: -webkit-linear-gradient(#eee, #999);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    align-items: start;
    position: absolute;
    right: 0;
`;

export const SpecialtyText = styles.div`
    @font-face {
        font-family: "CloisterBlack";
        src: url(${CloisterBlack}) format("truetype")
    }
    font-family: CloisterBlack;
    color: linear-gradient(to bottom left, #ffffff 0%, #bababa 100%);
    background: -webkit-linear-gradient(#eee, #999);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1rem;
    `