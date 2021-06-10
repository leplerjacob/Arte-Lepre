import styles from "styled-components";
import border from '../../images/main-background.png'

export const StyledFooter = styles.footer`
    width: 100%
    max-width: 1024px;
    height: 150px;
    background: #1d3356; // blue
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid white;
`;

export const FooterContent = styles.div`
    display: flex;
    flex-direction: column;
    width: 650px;
    height: 80%;
    justify-content: space-around;
    align-items: center;
    color: #d6af63; // Gold
    font-size: 1rem;

    small {
        align-self: center;
    }

    div > span:last-child {
        margin-left: 20px;
    }
`;
