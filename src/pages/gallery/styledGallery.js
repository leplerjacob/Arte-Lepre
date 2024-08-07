import styles from "styled-components";
import OpenSansLight from "../../static/fonts/OpenSans-Light.ttf";
import { device } from "../../components/breakpoints";

export const StyledGallery = styles.div`
    @font-face {
        font-family: "OpenSans";
        src: url(${OpenSansLight}) format("truetype")
    }  

    width: 100%;
    background: #fffefa; // white
    padding: 30px 0;

    & > h2 {
        font-family: OpenSans;
        color: #d6af63; // Gold
        margin: 0;
        text-align: center;
    }
    `;
    
    export const EachProject = styles.div`
    display: flex;
    margin-top: 50px;
    
    & > div:first-child {
        width: 300px;
        margin: auto;
    }
    a {
        text-align: center;
        text-decoration: none;
        color: black;
        p {
            font-family: OpenSans;
            border-radius: 5px;
            border: 1px solid black;
        }
        p:hover {
            border: 1px solid #d6af63;
            color: #d6af63; // Gold
        }
    }
    a:hover {
    }

    @media ${device.tablet} {
        flex-direction: column;
    }
    `;
    
    export const StyledImage = styles.div`
    margin: auto;
    img {
        height: 450px;
        width: 450px;
        max-width: 800px;
        cursor: zoom-in;
    }
    
    @media ${device.tablet} {
        img {
            height: 200px;
            width: 200px;
        }
    }
`;
