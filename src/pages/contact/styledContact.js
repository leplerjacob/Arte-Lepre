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
    background: #1d3356;
    overflow: hidden;
    color: #306298;
    color: whitesmoke;

    

    span {
        margin-top: 3rem;
        text-align: center;
    }

    span:first-child > span {
        color: gray;
    }
    
    h2 {
        color: #d6af63; // Gold
        margin: 0;
    }
    
    & > div {
        height: 214px;
        max-height: 214px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: space-between;

        div {
            margin: auto;
        }

        span {
            font-weight: bold;
            letter-spacing: 4px;
        }

    }
    img {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    img:hover {
        display: block;
        cursor: pointer;
        -webkit-transform:scale(1.2);
        -moz-transform:scale(1.2);
        -o-transform:scale(1.2);
    }

`