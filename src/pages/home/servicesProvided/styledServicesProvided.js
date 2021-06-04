import styles from "styled-components";
import fretSaw from "../../../images/fret-saw-2-icon.png";

export const ServicesProvidedContainer = styles.div`
    width: 75%;
    max-width: 1024px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    

`;

export const FretSaw = styles.img`
content: url("${fretSaw}");
display: flex;
margin: 9px 0;
align-self: center;
color: black;
padding: 0;
height: 32px;
width: 50px;
padding: 0;
`;

export const EachService = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-shrink: 0;
    width: 200px;
    height: 150px;
    border: 1px solid #e4c2a1;
    padding: 10px;

    
`;
