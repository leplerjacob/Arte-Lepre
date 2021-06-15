import styles from "styled-components";
import {device} from '../../components/breakpoints'

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
    @media ${device.mobile} {
        // height: 250px;
    }
    `;
    
    export const FooterContent = styles.div`
    display: flex;
    width: 650px;
    height: 100px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #d6af63; // Gold
    font-size: 1rem;
    
    small {
        align-self: center;
    }

    @media ${device.mobile} {
        width: 100%;
        padding: 1rem 3rem;
    }
`;
