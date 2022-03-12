import data from "../data/projects.json";
import Layout from "@components/Layout";
import ProjectCard from "@components/ProjectCard";

export default function Projects() {
	return (
		<Layout>
			<div className="container px-md-0">
				<h1>Projects</h1>
				<p>
					I have worked with a couple of projects, which are mostly hobby
					projects or things I built while learning new technologies
				</p>
			</div>
			<div className="container d-flex py-3 px-md-0 proj-container">
				{data.map((proj) => (
					<ProjectCard key={proj.title} project={proj}></ProjectCard>
				))}
			</div>
		</Layout>
	);
}
