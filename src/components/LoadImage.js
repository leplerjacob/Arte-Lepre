import React, { useState } from "react";
import logo from "../images/logo310.png";
import { MiniLogo, StyledTransition } from "../components/loader/styledLoader";
import { CSSTransition } from "react-transition-group";

const LoadImage = ({ image }) => {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      <StyledTransition style={{ display: loading ? "block" : "none" }}>
          <MiniLogo>
            <img src={logo} alt="logo" />
          </MiniLogo>
      </StyledTransition>
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
