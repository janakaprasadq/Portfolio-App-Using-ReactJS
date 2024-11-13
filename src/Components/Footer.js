import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Janaka Prasad. All rights reserved.
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
            <FontAwesomeIcon icon={faGithub} />
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
    </footer>
  );
}

export default Footer;
