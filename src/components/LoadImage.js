import React, { useState, useEffect, useRef } from "react";
import logo from "../images/logo310.png";
import { MiniLogo, StyledTransition } from "../components/loader/styledLoader";

const LoadImage = ({ image, alt }) => {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  const spinner = useRef(null);

  useEffect(() => {
    if (!loading) {
      spinner.current.remove();
    }
  }, [loading]);

  return (
    <>
      <StyledTransition
        style={{ display: loading ? "block" : "none" }}
      >
        <MiniLogo>
          <img ref={spinner} src={logo} alt="logo" />
        </MiniLogo>
      </StyledTransition>
      <img
        src={image}
        alt={`${alt}`}
        style={{ display: loading ? "none" : "block" }}
        onLoad={() => imageLoaded()}
      />
    </>
  );
};

export default LoadImage;
