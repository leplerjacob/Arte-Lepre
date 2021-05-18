import React from "react";
import StyledShowcase, {
  ShowcaseOverlay,
  ShowcaseText,
} from "./showcase/styledShowcase.js";

const Showcase = () => {
  return (
    <StyledShowcase>
      <ShowcaseOverlay>
        <ShowcaseText>
          <span>
            <h1>Antiques</h1>
            <h2>Restoration & Conservation</h2>
            <h3>DC - MD - VA</h3>
          </span>
          <span>
            <div>
              <h3>4130 Howard Ave</h3>
              <h3>Kensington, MD</h3>
            </div>
            <div>
              <h3>Via Carlo Poerio 80</h3>
              <h3>Napoli, Italy 80121</h3>
            </div>
          </span>
        </ShowcaseText>
      </ShowcaseOverlay>
    </StyledShowcase>
  );
};

export default Showcase;
