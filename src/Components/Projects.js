import React from "react";
import "./styles/Projects.scss";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectData = [
    {
      title: "Movie Rating Platform",
      description:
        "This Movie Rating Website allows users to browse movies, view details, and rate them based on their experiences. Built with Angular and integrated with a backend, the platform offers features such as user authentication, movie information retrieval, and the ability to submit reviews and ratings. Users can also view the average ratings for each movie based on user feedback. The website is designed to provide a seamless experience for movie enthusiasts to discover new films and share their thoughts with the community. The project utilizes modern technologies like Angular, Node.js, and MySQL to deliver a smooth, scalable, and interactive user interface.",
      languages: "HTML, SASS, Angular, Node.js, Express, MySQL, Bootstrap",
      githubUrl:
        "https://github.com/janakaprasadq/Movie-Rating-and-Review-Angular-Platform",
    },
    {
      title: "Portfolio Application",
      description:
        "This is a personal portfolio website showcasing my skills, projects, and achievements as a web developer. The website is built using React, Bootstrap, and custom CSS to provide a modern and responsive user experience. It includes sections such as 'About Me', 'Projects' and 'Contact', allowing visitors to learn more about my background and view the projects I have worked on. The portfolio also contains links to my GitHub repositories, where you can explore the code and see the technologies I used in each project. The website serves as a central hub for potential employers or collaborators to get in touch with me and learn more about my work.",
      languages: "HTML, SASS, JavaScript, Bootstrap, ReactJs",
      githubUrl: "https://github.com/janakaprasadq/Portfolio-App-Using-ReactJS",
    },
    {
      title: "Doorbell Controller Mobile App",
      description:
        "The Doorbell Controller Mobile App allows users to manage and interact with their doorbell system remotely. Through the app, users can  view live video feeds, and control the door. The app enables easy control over doorbell settings, including motion detection, video streaming. Designed with user convenience in mind, it ensures a secure and efficient way for users to monitor their front doors from anywhere, offering enhanced home security features.",
      languages: "Android studio , Java, Firebase",
      githubUrl:
        "https://github.com/janakaprasadq/Smart-door-bell-controllar-android-app",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-header">My Projects</h2>
      <div className="projects-row">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <div className="card-description">{project.description}</div>
              <div className="card-technologies">
                <strong>Technologies Used:</strong> {project.languages}
              </div>
              <a
                href={project.githubUrl}
                className="btn btn-primary project-button"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#0077b5" }}
              >
                View Project on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
