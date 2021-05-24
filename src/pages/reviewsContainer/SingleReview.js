import React, { useState, useEffect } from "react";
import { StyledSingleReview } from "./styledSingleReview";
import { CSSTransition } from "react-transition-group";
import "./reviewTransition.css";

const SingleReview = ({ review }) => {
  const [inProp, setInProp] = useState(false);
  const [reviewState, setReviewState] = useState("");

  useEffect(() => {
    setReviewState(review);
    setInProp(true);
    // setTimeout(() => {
    //   setInProp(false);
    // }, 2000);
  }, []);

  return (
    <CSSTransition
      in={inProp}
      timeout={2000}
      className="review"
      onClose={() => {
        setInProp(false);
      }}
    >
      <StyledSingleReview>
        <span>"{review.content}"</span>
        <span>{review.date}</span>
        <span>- {review.name}</span>
      </StyledSingleReview>
    </CSSTransition>
  );
};

export default SingleReview;
