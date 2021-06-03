import React, { useState, useEffect } from "react";
import { Section, Content, HomeDescription } from "./home/homeStyles";
import ServicesProvided from './home/ServicesProvided'
import ReviewsContainer from "./home/ReviewsContainer";
import { CSSTransition } from "react-transition-group";
// StyledTransition needed to be on parent of ReviewsContainer for transition to work properly
import { StyledTransition } from "./home/reviewsContainer/styledTransition";
// hardcoded reviews from google
import reviews from "../temp-delete/reviews.json";

function Home() {
  const [inProp, setInProp] = useState(false);
  const [index, setIndex] = useState(0);

  const switchProp = () => {
    setInProp(!inProp);
    setIndex(reviews.length == index + 1 ? 0 : index + 1);
    console.log("prop switch runs");
  };

  useEffect(() => {
    const interval = setInterval(switchProp, 8000);
    return () => {
      clearInterval(interval);
    };
  }, [inProp]);

  return (
    <Section>
      <StyledTransition>
        <CSSTransition
          in={inProp}
          timeout={8000}
          classNames="review"
          onEntering={() => {
            console.log("This entered");
          }}
          onExiting={() => {
            console.log("This exitted");
          }}
        >
          <ReviewsContainer review={reviews[index]} />
        </CSSTransition>
      </StyledTransition>
      <Content>
        <HomeDescription>
          <h2>Antiques Restoration & Conservation</h2>
          <div>
            The Arte Lepre company guarantees its customers the maximum
            professionalism and quality of its meticulous restoration by working
            by hand, using only traditional methods and methods: such as alcohol
            and shellac polishing, beeswax polishing, and the integration of
            parts missing through the use of vintage wood in order to restore
            the restored pieces to their original state.
          </div>
          <ServicesProvided />
        </HomeDescription>
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
