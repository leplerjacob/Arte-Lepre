import React from "react";
import { Slide } from "react-slideshow-image";
import Image1 from "../../images/slideshow_image_one.jpeg";
import Image2 from "../../images/slideshow_image_two.jpeg";
import Image3 from "../../images/slideshow_image_three.jpeg";
import Image4 from "../../images/slideshow_image_four.jpeg";
import "react-slideshow-image/dist/styles.css";
import {
  StyledSlideShowContainer,
  EachSlide
} from "./slideshow/styledSlideShow";
const slideImages = [Image1, Image2, Image3, Image4];

const SlideShow = () => {
  return (
    <StyledSlideShowContainer>
      <Slide easing="ease" style={{ width: "100vw", height: "100%" }} arrows={false}>
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
      </Slide>
    </StyledSlideShowContainer>
  );
};

export default SlideShow;
