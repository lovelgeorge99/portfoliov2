import React from "react";
import { ProjectCard } from "./project-card";

const projectsList = [
  {
    title: "Expense Tracker",
    description:
      "Full-stack MERN-based Expense Tracker with improved UI/UX and data visualization using ReactChartJS2",
    tags: ["React", "Node.js", "MongoDB", "JavaScript", "ReactChartJS2"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "#",
    codeUrl: "https://github.com/lovelgeorge99/MERN-Expense-Tracker",
  },
  {
    title: "House Price Prediction",
    description:
      "Created a precise house price prediction model with 98% accuracy using Linear Regression and scikit-learn.",
    tags: ["Python", "Sckit-learn", "Flask", "Linear Regression"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "#",
    codeUrl: "https://github.com/lovelgeorge99/housepriceprediction",
  },
  {
    title: "MERN Stack Real Estate Web App",
    description:
      "A full-stack real estate marketplace wiht in build chat real time chat functionalites useing web sockets ",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "#",
    codeUrl: "https://github.com/lovelgeorge99/Real-Estate",
  },
  {
    title: "News Website",
    description:
      "Created a dynamic news website for real-time updates via newsapi.org",
    tags: ["Python", "Flask", "Bootstrap", "Newsapi"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "#",
    codeUrl: "https://github.com/lovelgeorge99/django-news",
  },
  {
    title: "Full Stack Blog Application",
    description:
      "Full stack blog web app with all the CRUD features and user authentication with role based user views.",
    tags: ["React", "Python", "Django", "Bootstrap"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "#",
    codeUrl: "#",
  },
];

const Projects = () => {
  return (
    <div className="bg-slate-50">
      <section id="projects" className="container py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsList.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
