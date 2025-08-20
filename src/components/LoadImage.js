import React, { useState, useEffect, useRef } from "react";
import logo from "../images/logo310.png";
import styles from "./loader/Loader.module.css";

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
      <div
        className={styles.loaderTransition}
        style={{ display: loading ? "block" : "none" }}
      >
        <div className={styles.miniLogo}>
          <img ref={spinner} src={logo} alt="logo" />
        </div>
      </div>
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
