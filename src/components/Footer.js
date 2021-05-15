import React from "react"
import "./Footer.css"
import logo from "../images/logo310.png"

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <div>
          <h3>ArteLepre</h3>
          <img className="footer-logo" src={logo} alt="ArteLepre logo" />
          <div>
            4130 Howard Avenue
            <br />
            Kensington, MD 20895
            <br />
            202-550-5312
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
