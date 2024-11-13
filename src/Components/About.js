import React from "react";
import "./styles/About.scss";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hello! I'm Janaka Prasad, a passionate web developer with expertise in
          front-end development. I specialize in building responsive and dynamic
          user interfaces with a keen eye for design and performance. My journey
          in web development has equipped me with the skills to create
          interactive and user-friendly applications, and I am constantly
          learning and evolving with new technologies.
        </p>

        <h2>Education</h2>
        <ul>
          <li>
            <h6>UNIVERSITY OF COLOMBO</h6>
            <p>
              Bachelor of Science Honours in Electronics and Information
              Technology : 2021 - 2025
            </p>
          </li>
          <li>
            <h6>MALIYADEWA ADARSHA M.V</h6>
            <p>Kurunegala : 2009 - 2017</p>
          </li>
        </ul>

        <h2>My Skills</h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS / SASS</li>
          <li>Bootstrap & Material UI</li>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript </li>
          <li>React</li>
          <li>Angular</li>
          <li>Node.js</li>
          <li>ExpressJs</li>
          <li>MySQL</li>
          <li>Java</li>
          <li>Java EE</li>
          <li>C</li>
          <li>Python</li>
          <li>Firebase</li>
        </ul>

        <h2>Languages</h2>
        <ul className="lang-list">
          <li>Sinhala (Native)</li>
          <li>English (Intermediate)</li>
        </ul>

        <h2>EXTRACURRICULAR ACTIVITIES</h2>
        <ul>
          <li>
            IT Coordinator | Astronomical Society of University of Colombo
          </li>
          <li>IT Coordinator | Physics Club of University of Colombo</li>
          <li>Marketing director | Leo Club of University of Colombo</li>
        </ul>

        <h2>Interests</h2>
        <p>
          In addition to web development, I am interested in blockchain systems,
          mobile app development, and machine learning. I believe in the
          importance of continuous learning and actively explore new
          technologies to broaden my skill set.
        </p>

        <h2>Contact</h2>
        <p>
          Feel free to connect with me on LinkedIn or reach out via email. I'm
          always open to discussing new opportunities, collaborating on
          projects, or simply connecting with like-minded professionals!
        </p>
      </div>
    </div>
  );
}

export default About;
