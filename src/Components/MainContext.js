import "./styles/MainContext.scss";
import janaka from "../assets/janaka.jpg";

import { LinkedIn, GitHub, Facebook, Twitter } from "@mui/icons-material";

function MainContext() {
  return (
    <>
      <div className="maincontext">
        <div className="intro">
          <div className="mainWelcome">
            <p>HEY THERE!</p>
            <h1>I AM JANAKA PRASAD</h1>
            <p>WEB DEVELOPER</p>

            <div>
              <div className="socialIcons">
                <a
                  href="https://www.linkedin.com/in/janaka-prasad/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn style={{ fontSize: 40, color: "#0a66c2" }} />
                </a>
                <a
                  href="https://github.com/janakaprasadq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub style={{ fontSize: 40, color: "#333" }} />
                </a>
                <a
                  href="https://web.facebook.com/JanakaPrasadWanigasooriya/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook style={{ fontSize: 40, color: "#1877f2" }} />
                </a>
                <a
                  href="https://x.com/janakaprasad071"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter style={{ fontSize: 40, color: "#1da1f2" }} />
                </a>
              </div>
            </div>
          </div>

          <div className="proPic">
            <img src={janaka} alt="Profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContext;
