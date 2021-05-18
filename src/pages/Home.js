import React from "react";
import {
  Section,
  Content,
  LeftSideText,
  RightSideImg,
} from "./home/homeStyles";
import case11 from "../images/Case_11.png";

function Home() {
  return (
    <Section>
      <Content>
        <LeftSideText>
          <h2>Antiques Restoration & Conservation</h2>
          <div className="home-description column">
            ArteLepre is dedicated to the preservation of antiques and fine
            furniture to its original functional condition. Antique wood
            furniture repair can include replacing missing or broken parts of
            the original piece.
          </div>
        </LeftSideText>
        {/* <RightSideImg>
          <div className="home-photo column">
            <img src={case11} alt="before and after of chaise" />
          </div>
        </RightSideImg> */}
      </Content>
    </Section>
  );
}

export default Home;
