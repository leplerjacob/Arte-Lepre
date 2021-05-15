import React from "react"
import "./Contact.css"

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-description">
        Thank you for your interest! For more information, please feel free to
        reach out with questions.
      </div>
      <h2>Contact Information</h2>
      <div>
        <div className="label">Workshop Address</div>
        4130 Howard Avenue
        <br />
        Kensington, MD 20895
      </div>
      <br />
      <div>
        <div className="label">Phone</div>
        202-550-5312
      </div>
      <br />
      <div>
        <div className="label">Email</div>
        artelepre@gmail.com
      </div>
      <br />
      <div>
        <div className="label">Hours of Operation</div>
        Mon-Fri: 8:30AM - 5PM
        <br />
        Sat: 8:30AM - 3PM
        <br />
        Sun: CLOSED
      </div>
    </div>
  )
}

export default Contact
