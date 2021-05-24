import React, {useState, useEffect} from "react";
import logo from "../images/logo310.png";
import { CSSTransition } from "react-transition-group";
import "./Loader.css";

function Loader() {
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true)
        setTimeout(() => {
            setInProp(false)
        }, 1000)
    }, [])

  return (
    <CSSTransition in={inProp} timeout={2000} classNames="loader" onClose={() => {
        setInProp(false)
    }}>
      <div className="App-loader" id="App-loader">
          {"WELCOME"}
        <img src={logo} className="App-logo" alt="logo" />
          {"BENVENUTO"}
      </div>
    </CSSTransition>
  );
}

export default Loader;
