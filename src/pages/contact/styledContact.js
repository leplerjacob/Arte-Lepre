import styles from "styled-components";
import OpenSansLight from "../../static/fonts/OpenSans-Light.ttf";

export const StyledContact = styles.div`
    @font-face {
        font-family: "OpenSans";
        src: url(${OpenSansLight}) format("truetype")
    }  

    width: 100%;
    background: #fffefa; // white
    padding: 30px 0;
    display: flex;
    flex-direction: column;
`;

export const Details = styles.div`
    font-family: "OpenSans";
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2 {
        color: #d6af63; // Gold
    }

    div {
        width: 400px;
        display: flex;
        margin: 10px auto;

        span:first-child {
            margin-right: 20px;
        }
    }
`

export const Map = styles.div`
    margin: auto;

    img {
        width: 650px;
        max-width: 650px;
        cursor: pointer;
    }
`