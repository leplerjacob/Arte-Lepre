import React, { useState, useEffect } from "react";
import logo from "../images/logo310.png";
import { CSSTransition } from "react-transition-group";
import styles from "./loader/Loader.module.css";

function Loader() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
    setTimeout(() => {
      setInProp(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.loaderTransition}>
      <CSSTransition
        in={inProp}
        timeout={2000}
        classNames={{
          enter: styles.loaderEnter,
          enterActive: styles.loaderEnterActive,
          exit: styles.loaderExit,
          exitActive: styles.loaderExitActive,
        }}
        onClose={() => {
          setInProp(false);
        }}
      >
        <div className={styles.loaderBackground}>
          {"WELCOME"}
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          {"BENVENUTO"}
        </div>
      </CSSTransition>
    </div>
  );
}

export default Loader;