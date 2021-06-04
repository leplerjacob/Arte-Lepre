import styles from 'styled-components'
import OpenSansLight from "../../static/fonts/OpenSans-Light.ttf";

export const Section = styles.div`
  background-color: #6F73BD;
  background-color: #394387;
  background-color: #294976;
  background-color: #EFEDFF;
  background-color: #FAF9F5;
  background-color: #eed8be;
`;

export const Content = styles.div`
  display: flex;
  flex-direction: row;
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
  justify-content: space-around;
  color: #CDA715;
  color: #d6af63; // Gold
  height: 450px;
  width: 100%;
  max-width: 650px;
  margin: auto;

  div:last-child {
    color: black;
  }
`;