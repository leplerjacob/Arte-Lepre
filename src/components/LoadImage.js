import React, { useState } from "react";
import Loader from "./Loader";

const LoadImage = ({ image }) => {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      <Loader style={{ display: loading ? "block" : "none" }} />
      <img
        src={image}
        alt={`${image}`}
        style={{ display: loading ? "none" : "block" }}
        onLoad={() => imageLoaded()}
      />
    </>
  );
};

export default LoadImage;
