import React, { useState, useEffect } from "react";
import {
  Section,
  Content,
  LeftSideText,
  RightSideImg,
} from "./home/homeStyles";
import ReviewsContainer from "./ReviewsContainer";
import case11 from "../images/Case_11.png";
import { CSSTransition } from "react-transition-group";
import { StyledTransition } from "./reviewsContainer/styledTransition";
import reviews from '../temp-delete/reviews.json'

function Home() {
  const [inProp, setInProp] = useState(false);
  const [index, setIndex] = useState(0)

  const switchProp = () => {
    setInProp(!inProp)
    setIndex(reviews.length == index + 1 ? 0 : index + 1);
    console.log("prop switch runs")
  }

  useEffect(() => {
    const interval = setInterval(switchProp, 8000)
    return () => {
      clearInterval(interval)
    }
  }, [inProp]);

  return (
    <Section>
      <StyledTransition>
        <CSSTransition
          in={inProp}
          timeout={8000}
          classNames="review"
          onEntering={() => {
            console.log('This entered')
          }}
          onExiting={() => {
            console.log("This exitted")
          }}
        >
          <ReviewsContainer review={reviews[index]} />
        </CSSTransition>
      </StyledTransition>
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
