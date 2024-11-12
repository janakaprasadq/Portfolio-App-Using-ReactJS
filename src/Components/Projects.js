import React from "react";
import "./styles/Projects.scss"; // Import the associated SCSS file

const Projects = () => {
  const projectData = [
    {
      title: "Movie Rating Platform",
      description:
        "A web application for task management. The app allows users to manage tasks effectively by adding, updating, and deleting tasks. Users can also mark tasks as complete, filter tasks by status, and view tasks due on a specific date.",
      languages: "HTML, SASS, Angular, Node.js, Express, MySQL, Bootstrap",
      projectUrl:"https://github.com/janakaprasadq/Movie-Rating-and-Review-Angular-Platform"
    },
    {
      title: "Portfolio Application",
      description:
        "An e-commerce website for online shopping. It allows users to browse products, add items to the cart, and proceed to checkout. The site also includes user authentication and order history functionality.",
      languages: "HTML, SASS, JavaScript, Bootstrap, ReactJs",
      projectUrl: 
    },
    {
      title: "Project 3",
      description:
        "A mobile app for fitness tracking. The app tracks users' workouts, provides statistics on calories burned, and gives feedback on performance over time. It also allows users to set fitness goals and track progress.",
      languages: "Flutter, Dart, Firebase",
    },
    {
      title: "Project 4",
      description:
        "A web application for task management. The app allows users to manage tasks effectively by adding, updating, and deleting tasks. Users can also mark tasks as complete, filter tasks by status, and view tasks due on a specific date.",
      languages: "React, Node.js, Express, MongoDB",
    },
    {
      title: "Project 5",
      description:
        "An e-commerce website for online shopping. It allows users to browse products, add items to the cart, and proceed to checkout. The site also includes user authentication and order history functionality.",
      languages: "HTML, CSS, JavaScript, Bootstrap, Node.js",
    },
    {
      title: "Project 6",
      description:
        "A mobile app for fitness tracking. The app tracks users' workouts, provides statistics on calories burned, and gives feedback on performance over time. It also allows users to set fitness goals and track progress.",
      languages: "Flutter, Dart, Firebase",
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
                <strong>Languages Used:</strong> {project.languages}
              </div>
              <Link
                to={project.projectUrl}
                className="btn btn-primary project-button"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
