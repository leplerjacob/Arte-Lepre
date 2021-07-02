import styles from "styled-components";
import vesuvius from "../../images/vesuvius.jpg";
import { device } from "../../components/breakpoints";

export const StyledHistory = styles.div`
    width: 100%;
    background: #fffefa; // white
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-family: "OpenSans"
    }
    
    h2 {
        color: #d6af63; // Gold
    }
    
    @media ${device.mobile}{
        overflow: hidden;
    }
    
    `;

export const ArticleContainer = styles.div`
    width: 100%;
    max-width: 650px;
    overflow: hidden;
    padding-bottom: 30px;
    
    img {
        height: 300px;
    }
    
    span {
        font-family: "OpenSans";
        font-size: 1.5rem;
    }

    @media ${device.mobile}{
        text-align: center;
    }
    `;

export const LeftFloat = styles.div`
    float: left;
    padding-right: 30px;
    margin: 0 20px 0 0;
    border-right: 1px solid black;

    @media ${device.mobile}{
        float: none;
        border: none;
        margin: auto;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    `;

export const RightFloat = styles.div`
    border-left: 1px solid black;
    padding-left: 30px;
    float: right;
    margin: 20px 0 0 20px;
    @media ${device.mobile}{
        float: none;
        border: none;
        margin: auto;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    `;

export const Showcase = styles.div`
    background: url(${vesuvius}) no-repeat;
    background-size: cover;
    height: 400px;
    width: 100%;
    @media ${device.mobile}{
        background-size: contain;
        max-height: 200px;
        min-width: 410px;
    }

`;
