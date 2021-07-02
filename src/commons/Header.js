// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HashRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import History from "../pages/History";
import Contact from "../pages/Contact";
import ForSale from "../components/ForSale";
import { default as NavBar } from "./header/Burger";
import logo from "../images/Logo.png";

import { NavWrapper, StyledNav } from "./header/styledHeader";

function Header() {
  return (
    <HashRouter>
      <NavWrapper>
        <StyledNav>
          <div style={{ position: "relative" }}>
            <img src={logo} alt="" style={{ width: "450px" }} />
          </div>
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
