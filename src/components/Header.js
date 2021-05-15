import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Header() {

  return (
    <Router>
      <header className="header">
        <nav className="header-nav">
          <span className="logo">ArteLepre</span>
          <ul className="header-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="arrow-icon-section">
        <ChevronDownIcon className="arrow-down-icon" />
      </div>
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
