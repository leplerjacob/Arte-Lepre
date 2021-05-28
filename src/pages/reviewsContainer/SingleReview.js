import React, { useState, useEffect } from "react";
import { StyledSingleReview } from "./styledSingleReview";

const SingleReview = ({ singleReview }) => {

  return (
      <StyledSingleReview>
        <span>"{singleReview.content}"</span>
        <span>{singleReview.date}</span>
        <span>- {singleReview.name}</span>
      </StyledSingleReview>

  );
};

export default SingleReview;
