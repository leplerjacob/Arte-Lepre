import { HashRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import History from "../pages/History";
import Contact from "../pages/Contact";
import Purchase from "../pages/Purchase";
import { default as NavBar } from "./header/Burger";
import logo from "../images/Logo.png";
import italia from "../images/flag-italy.png";

import styles from "./header/Header.module.css";

function Header() {

  return (
    <HashRouter>
      <header className={styles.navWrapper}>
        <nav className={styles.styledNav}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.flag}>
            <img src={italia} alt="italian flag" />
          </div>
          <NavBar />
        </nav>
      </header>
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
      <Route exact path="/inventory">
        <Purchase />
      </Route>
    </HashRouter>
  );
}

export default Header;
