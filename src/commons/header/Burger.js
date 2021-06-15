import React, {
  useState,
  useRef,
  createRef,
  useEffect,
  useCallback,
} from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const StyledBurger = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 20;
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#ccc")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

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
  }, [open]);

  return (
    <>
      <StyledBurger
        className="burger"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <div ref={navRef} className="navlinks">
        <NavLinks open={open} />
      </div>
    </>
  );
};

export default Burger;
