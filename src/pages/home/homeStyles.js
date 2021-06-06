import styles from "styled-components";
import OpenSansLight from "../../static/fonts/OpenSans-Light.ttf";

export const Section = styles.div`
  background-color: #fffefa; // white final
  padding-bottom: 20px;
`;

export const Content = styles.div`
  display: flex;
  flex-direction: column;
`;

export const HomeDescription = styles.div`
  @font-face {
    font-family: "OpenSans";
    src: url(${OpenSansLight}) format("truetype")
  }

  text-align: center;
  font-family: OpenSans;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #CDA715;
  color: #d6af63; // Gold
  width: 100%;
  max-width: 650px;
  margin: auto;
  
  div {
    color: black;
  }
`;
