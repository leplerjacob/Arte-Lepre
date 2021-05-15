import React from "react"
import "./Home.css"
import case11 from "../images/Case_11.png"

function Home() {
  return (
    <div className="home-section">
      <div className="home-about">
        <h2>Antique Furniture Restoration</h2>
        <div className="home-description column">
          ArteLepre is dedicated to the preservation of antiques and fine
          furniture to its original functional condition. Antique wood furniture
          repair can include replacing missing or broken parts of the original
          piece.
        </div>
        <div className="home-photo column">
          <img src={case11} alt="before and after of chaise" />
        </div>
      </div>
    </div>
  )
}

export default Home
