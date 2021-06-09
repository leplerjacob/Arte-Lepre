import styles from "styled-components";
import border from '../../images/main-background.png'

export const StyledFooter = styles.footer`
    width: 100%
    max-width: 1024px;
    height: 100px;
    background: #2e373d;
    background: #1d3356; // blue
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    span {
        color: whitesmoke;
    }
`;

export const EachContact = styles.div`
    display: flex;
    flex-direction;
    align-items: center;
    justify-content: flex-start;
`

export const LeftSide = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 60%;

    svg {
        margin-right: 5px;
        font-size: 1.5rem;
        padding: 5px;
        background: rgb(69, 76, 82);
        border-radius: 50%;
        color: whitesmoke;
    }
`;

export const RightSide = styles.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    a {
        padding: 0;
        margin: 0;
    }

    svg {
        font-size: 2.5rem;
        color: whitesmoke;
        padding: 5px;
        cursor: pointer;
    }

    span {
        color: grey;
    }
`;
