import styles from "styled-components";
import OpenSansLight from "../../static/fonts/OpenSans-Light.ttf";
import background from '../../images/banner_3.jpeg'

export const StyledContact = styles.div`
    @font-face {
        font-family: "OpenSans";
        src: url(${OpenSansLight}) format("truetype")
    }  

    width: 100%;
    height: 1024px;
    background: #fffefa; // white
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${background}) no-repeat center;
    background-size: 1024px;

`;

export const Details = styles.div`
    height: 411px;
    width: 411px;
    border-radius: 50%;
    margin-bottom: 5px;
    font-family: "OpenSans";
    display: flex;
    flex-direction: column;
    align-items: center;
    background: whitesmoke;
    overflow: hidden;

    span {
        margin-top: 3rem;
    }
    
    h2 {
        color: #d6af63; // Gold
        margin: 0;
    }

    & > div {
        height: 250px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: space-between;

        div {
            margin: auto;
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