import React from "react";
import {AiFillStar} from 'react-icons/ai'

function generateId() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substring(0, 6);
}

export default function ProjectCard({ project }) {
  return (
    <div className="d-flex flex-column justify-content-center py-3 px-3 border w-md-25 border-success project">
      <h4 className="text-success">{project.title}</h4>
      <p>{project.description}</p>
      <div>
        <strong>Tech Stack: </strong>
        {project.techStack.map((ts) => (
          <span key={generateId()}>{ts}</span>
        ))}
      </div>
      <p className="text-center">
        {project.demoLink ? (
          <a
            className="project__demo-link text-primary"
            href={`${project.demoLink}`}
            target="_blank"
          >
            Demo
          </a>
        ) : (
          <></>
        )}
        {project.demoLink && project.codebaseLink ? " | " : " "}
        {project.codebaseLink ? (
          <a
            className="project__demo-link text-primary"
            href={`${project.codebaseLink}`}
            target="_blank"
          >
            Codebase
          </a>
        ) : (
          <></>
        )}
      </p>
      {project.starred ? (
        <AiFillStar className="project__star"></AiFillStar>
      ) : (
        <></>
      )}
    </div>
  );
}