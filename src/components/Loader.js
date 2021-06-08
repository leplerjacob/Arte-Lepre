import React, { useState, useEffect } from "react";
import logo from "../images/logo310.png";
import { CSSTransition } from "react-transition-group";
import { StyledTransition, LoaderBackground, Logo } from "./loader/styledLoader";

function Loader() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
    setTimeout(() => {
      setInProp(false);
    }, 1000);
  }, []);

  return (
    <StyledTransition>
      <CSSTransition
        in={inProp}
        timeout={2000}
        classNames="loader"
        onClose={() => {
          setInProp(false);
        }}
      >
        <LoaderBackground>
            {"WELCOME"}
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
            {"BENVENUTO"}
        </LoaderBackground>
      </CSSTransition>
    </StyledTransition>
  );
}

export default Loader;
