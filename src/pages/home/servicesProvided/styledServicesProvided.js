import styles from "styled-components";
import OpenSansLight from "../../../static/fonts/OpenSans-Light.ttf";
import OpenSansBold from "../../../static/fonts/OpenSans-Bold.ttf";

console.log(OpenSansLight)
export const ServicesProvidedContainer = styles.div`
    width: 75%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    h2 {
        text-align: center;
        font-family: "OpenSans";
    }

    span {
        font-family: "OpenSans";
        font-weight: bold;
        font-size: 1rem;
        text-align: center;
    }

    p {
        margin: 0;
    }

    ul {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: black;
        margin: 40px auto;
        display: flex;
    }
`;

export const Button = styles.div`
    font-family: "OpenSans";
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
    text-align: center;
    background: #2291ec;
    width: 120px;

    &:hover {
        background: #6db1e8;
    }


`