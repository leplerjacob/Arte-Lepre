import React from "react";
import { Slide } from "react-slideshow-image";
import Image1 from "../../../images/1.jpg";
import Image3 from "../../../images/3.jpg";
import Image2 from "../../../images/2.jpg";
import Image4 from "../../../images/4.jpg";
import Image5 from "../../../images/5.jpg";
import "react-slideshow-image/dist/styles.css";
import {
  StyledSlideShowContainer,
  EachSlide,
} from "./slideshow/styledSlideShow";
const slideImages = [Image1, Image2, Image3, Image4, Image5];

const SlideShow = () => {
  return (
    <StyledSlideShowContainer>
      <Slide
        easing="ease"
        style={{ width: "100%", height: "100%" }}
        arrows={false}
        duration={3000}
      >
        <EachSlide>
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          ></div>
        </EachSlide>
        <EachSlide>
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          ></div>
        </EachSlide>
        <EachSlide>
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          ></div>
        </EachSlide>
        <EachSlide>
          <div
            style={{
              backgroundImage: `url(${slideImages[3]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          ></div>
        </EachSlide>
        <EachSlide>
          <div
            style={{
              backgroundImage: `url(${slideImages[4]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          ></div>
        </EachSlide>
      </Slide>
    </StyledSlideShowContainer>
  );
};

export default SlideShow;
