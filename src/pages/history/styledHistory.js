import styles from "styled-components";
import vesuvius from "../../images/vesuvius.jpg";

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
`;

export const ArticleContainer = styles.div`
    width: 100%;
    max-width: 650px;
    overflow: hidden;

    img {
        height: 300px;
    }
    
    span {
        font-family: "OpenSans";
        font-size: 1.5rem;
    }
    `;
    
    export const LeftFloat = styles.div`
    float: left;
    padding-right: 30px;
    margin: 0 20px 0 0;
    border-right: 1px solid black;
    `;
    
    export const RightFloat = styles.div`
    border-left: 1px solid black;
    padding-left: 30px;
    float: right;
    margin: 20px 0 0 20px;
`;

export const Showcase = styles.div`
    background: url(${vesuvius}) no-repeat;
    background-size: cover;
    height: 400px;
    width: 100%;
`;
