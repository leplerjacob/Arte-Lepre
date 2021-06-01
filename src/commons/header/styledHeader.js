import styles from 'styled-components'
import { device } from '../../components/breakpoints'
import CloisterBlack from '../../static/fonts/CloisterBlack.ttf'
import OpenSansLight from '../../static/fonts/OpenSans-Light.ttf'

export const NavWrapper = styles.header`
position: absolute;
    top: 0;
    width: 100%;
`

export const StyledNav = styles.nav`
    @font-face {
        font-family: "OpenSans";
        src: url(${OpenSansLight}) format("truetype")
    }

    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
        color: #fff;
        text-decoration: none;
        font-family: OpenSans;
        font-weight: bold;
    }

    ul {
        list-style: none;
        float: right;
        margin-right: 1rem;
    }

    li {
        padding: 1rem 1rem;
    }

    div:first-child {
        display: flex;
        flex-direction: row;
    }
`

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
    color: rgb(231, 67, 67); // keep
    color: #900d3d; // keep
    color: whitesmoke;
    font-size: 3rem;
    margin-left: 5vw;
    letter-spacing: 5px;
`

export const SinceYear = styles.span`
    font-size: 1rem;
    font-weight: bold;
    color: rgb(231, 67, 67);
    align-items: start;
`