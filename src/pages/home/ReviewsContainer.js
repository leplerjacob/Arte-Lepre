import React, { useState, useEffect } from "react";
import { StyledReviewsContainer } from "./reviewsContainer/styledReviewsContainer";
import SingleReview from "./reviewsContainer/SingleReview";

const ReviewsContainer = ({review}) => {

  return (
    <StyledReviewsContainer>
      <SingleReview singleReview={review} />
    </StyledReviewsContainer>
  );
};

export default ReviewsContainer;
