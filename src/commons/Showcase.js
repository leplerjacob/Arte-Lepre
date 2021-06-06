import React from "react";
import StyledShowcase, {
  ShowcaseOverlay,
  ShowcaseText,
} from "./showcase/styledShowcase.js";
import SlideShow from "./showcase/SlideShow";

const Showcase = () => {
  return (
    <StyledShowcase>
      <SlideShow />
    </StyledShowcase>
  );
};

export default Showcase;
