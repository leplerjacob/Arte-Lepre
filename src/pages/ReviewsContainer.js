import React, { useState, useEffect } from "react";
import { StyledReviewsContainer } from "./reviewsContainer/styledReviewsContainer";
import SingleReview from "./reviewsContainer/SingleReview";
import reviews from "../temp-delete/reviews.json";

const ReviewsContainer = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (isMounted) {
        setIndex(reviews.length == index + 1 ? 0 : index + 1);
      }
    }, 8000);
    return () => {
      isMounted = false;
    };
  }, [index]);

  return (
    <StyledReviewsContainer>
      <SingleReview review={reviews[index]} />
    </StyledReviewsContainer>
  );
};

export default ReviewsContainer;
