import React from "react";

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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="yellow"
					className="bi bi-star-fill project__star"
					viewBox="0 0 16 16"
				>
					<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
				</svg>
			) : (
				<></>
			)}
		</div>
	);
}
