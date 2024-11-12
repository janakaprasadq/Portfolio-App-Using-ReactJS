// Contact.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/Contact.scss"; // Assuming you're using SCSS for styling

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          <strong>Name:</strong> Janaka Prasad
        </p>
        <p>
          <strong>Email:</strong> janaka@example.com
        </p>
        <p>
          <strong>Phone:</strong> +94 71 303 1383
        </p>
        <p>
          <strong>Location:</strong> Colombo, Sri Lanka
        </p>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/janaka-prasad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="gitIcon"
            href="https://github.com/janakaprasadq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "#333" }} />
          </a>
          <a
            href="https://web.facebook.com/JanakaPrasadWanigasooriya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://x.com/janakaprasad071"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      <h3>Send Me a Message</h3>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
