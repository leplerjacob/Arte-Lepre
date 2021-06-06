import styles from "styled-components";
import OpenSansLight from "../../static/fonts/OpenSans-Light.ttf";

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

    div:first-child {
        width: 300px;
        margin: auto;
    }

    img {
        margin: auto;
    }
`;
