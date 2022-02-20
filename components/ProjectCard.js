import React from 'react'
import Link from 'next/link';

function generateId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 6);
}

export default function ProjectCard({project}) {
  return (
		<div className="d-flex flex-column justify-content-center py-3 px-3 border w-25 border-success project">
			<h4 className='text-success'>{project.title}</h4>
			<p>{project.description}</p>
			<div>
				<strong>Tech Stack: </strong>
				{project.techStack.map((ts) => (
					<span key={generateId()}>{ts},</span>
				))}
			</div>
			<Link href={`${project.linkToDemoOrCodebase}`}>Demo/Codebase</Link>
		</div>
	);
}