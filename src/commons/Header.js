import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";
import { default as NavBar } from "./header/Burger";
import Showcase from "./Showcase";
import { ChevronDownIcon } from "@heroicons/react/outline";

import { NavWrapper, StyledNav, Logo, SinceYear } from "./header/styledHeader";

function Header() {
  return (
    <Router>
      <NavWrapper>
        <StyledNav>
          <div>
            <Logo>Arte Lepre</Logo>
          </div>
          <NavBar />
        </StyledNav>
      </NavWrapper>
      <Showcase />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
