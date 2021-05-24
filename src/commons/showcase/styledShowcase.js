import styles from "styled-components";
import pitloo from "../../images/Pitloo.jpg";
import banner from "../../images/banner_3.jpeg";
import OpenSansLight from "../../static/fonts/OpenSans-Light.ttf";
import { device } from "../../components/breakpoints";

const StyledShowcase = styles.div`
    width: 100vw;
    height: 100vh;
    background: url(${pitloo}) no-repeat center center/cover; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

export const ShowcaseOverlay = styles.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2)
`;

export const ShowcaseText = styles.div`
    @font-face {
        font-family: "OpenSans";
        src: url(${OpenSansLight}) format("truetype")
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 45%;
    text-align: center;
    justify-content: center;
    margin: auto;
    font-size: 1.8rem;
    letter-spacing: 2px;
    color: #043f7a; // previous color
    color: #900d3d;
    
    span:first-child > * {
        margin: 0;
        letter-spacing: .6rem;
        
        @media ${device.tablet} {
            letter-spacing: 0;
        }
    }
    
    span:first-child > h3:first-of-type {
    }

    span:last-child {
        width: 100%;
        font-size: 1rem;
        position: absolute;
        color: whitesmoke;
        margin: auto 10px;
        bottom: 0;
        display: flex;
        font-size: 1.25rem;
        justify-content: flex-start;
    }

`;

export default StyledShowcase;
