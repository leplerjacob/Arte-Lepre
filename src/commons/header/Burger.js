import React, { useState, createRef, useEffect, useCallback } from "react";
import styles from "./Burger.module.css";
import NavLinks from "./NavLinks";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const navRef = createRef(null);

  const toggleNav = useCallback(
    (_) => {
      if (
        _.target.closest(".navlinks") === null &&
        !_.target.closest("burger")
      ) {
        setOpen(false);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("click", toggleNav);
    } else {
      document.removeEventListener("click", toggleNav);
    }
  });

  const test = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={`${styles.burger} ${open ? styles.open : ""}`}
        onClick={test}
      >
        <div />
        <div />
        <div />
      </div>
      <div ref={navRef} className="navlinks">
        <NavLinks open={open} />
      </div>
    </>
  );
};

export default Burger;
