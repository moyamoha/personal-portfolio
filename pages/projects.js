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
					projects or things I built while learning new technologies <br></br>
					<i>Update 9/2022: Most of projects used to have a demo link. They were deployed to heroku, but heroku stops providing free dynos this year, so I removed them from Heroku. I will try to deploy them to other service providers as soon as I can.</i>
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
