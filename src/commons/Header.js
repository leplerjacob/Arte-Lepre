import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";
import ForSale from "../components/ForSale";
import { default as NavBar } from "./header/Burger";
import Showcase from "./Showcase";
import { ChevronDownIcon } from "@heroicons/react/outline";

import { NavWrapper, StyledNav, Logo, SinceYear, Icon } from "./header/styledHeader";

function Header() {
  return (
    <Router>
      <NavWrapper>
        <StyledNav>
          <div>
            <Icon />
            <Logo>Arte Lepre<SinceYear>since 1959</SinceYear></Logo>
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
        <Route exact path="/for-sale">
          <ForSale />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
