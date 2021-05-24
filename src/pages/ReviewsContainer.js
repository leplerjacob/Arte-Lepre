import React, { useState, useEffect } from "react";
import { StyledReviewsContainer } from "./reviewsContainer/styledReviewsContainer";
import SingleReview from "./reviewsContainer/SingleReview";
import reviews from "../temp-delete/reviews.json";

const ReviewsContainer = () => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setIndex(reviews.length == index + 1 ? 0 : index + 1)
        }, 5000)
    }, [index])

  return (
    <StyledReviewsContainer>
      <SingleReview review={reviews[index]}/>
    </StyledReviewsContainer>
  );
};

export default ReviewsContainer;
