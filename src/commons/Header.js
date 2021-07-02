import { HashRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import History from "../pages/History";
import Contact from "../pages/Contact";
import ForSale from "../components/ForSale";
import { default as NavBar } from "./header/Burger";
import logo from "../images/Logo.png";
import italia from "../images/flag-italy.png";

import { NavWrapper, StyledNav, Flag, Logo } from "./header/styledHeader";

function Header() {

  return (
    <HashRouter>
      <NavWrapper>
        <StyledNav>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <Flag>
            <img src={italia} alt="italian flag" />
          </Flag>
          <NavBar />
        </StyledNav>
      </NavWrapper>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/gallery">
        <Gallery />
      </Route>
      <Route exact path="/history">
        <History />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/for-sale">
        <ForSale />
      </Route>
    </HashRouter>
  );
}

export default Header;
