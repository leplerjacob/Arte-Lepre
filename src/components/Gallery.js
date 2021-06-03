import React from "react";
import case_1 from "../images/Case_1.png";
import case_2 from "../images/Case_2.png";
import case_3 from "../images/Case_3.png";
import case_4 from "../images/Case_4.png";
import case_5 from "../images/Case_5.png";
import case_6 from "../images/Case_6.png";
import case_7 from "../images/Case_7.png";
import case_8 from "../images/Case_8.png";
import case_9 from "../images/Case_9.png";
import case_10 from "../images/Case_10.png";
import case_11 from "../images/Case_11.png";
import "./Gallery.css";
import { SRLWrapper } from "simple-react-lightbox";

const style = {
  lightbox: {
    width: "80vw",
  },
  img: {
    height: "100%",
    width: "100%",
    maxWidth: "800px",
    cursor: "zoom-in"
  },
};

function Gallery() {
  return (
    <div className="gallery-section">
      <SRLWrapper>  
        <img style={style.img} src={case_1} alt="case1" />
        <img style={style.img} src={case_2} alt="case1" />
        <img style={style.img} src={case_3} alt="case1" />
        <img style={style.img} src={case_4} alt="case1" />
        <img style={style.img} src={case_5} alt="case1" />
        <img style={style.img} src={case_6} alt="case1" />
        <img style={style.img} src={case_7} alt="case1" />
        <img style={style.img} src={case_8} alt="case1" />
        <img style={style.img} src={case_9} alt="case1" />
        <img style={style.img} src={case_10} alt="case1" />
        <img style={style.img} src={case_11} alt="case1" />
      </SRLWrapper>
    </div>
  );
}

export default Gallery;
