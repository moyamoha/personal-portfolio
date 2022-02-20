import Projects from "@components/Projects";
import Link from "next/link"
import { useState } from "react";
import Main from "@components/Main";
import Work from "@components/Work";

export default function Home() {
  const [content, setContent] = useState("Home")
  let component;
  if (content === "Home") {
    component =  <Main></Main>
  } else if (content === "Projects") {
    component =  <Projects></Projects>
  } else if (content === "Work") {
    component = <Work></Work>
  } 
  return (
		<>
			<ul className="nav nav-tabs mb-3">
				<li className="nav-item">
					<a
						className={content === "Home" ? "nav-link active" : "nav-link"}
						onClick={() => setContent("Home")}
						href="#"
					>
						Home
					</a>
				</li>
				<li className="nav-item">
					<a
						className={content === "Projects" ? "nav-link active" : "nav-link"}
						onClick={() => setContent("Projects")}
						href="#"
					>
						Projects
					</a>
				</li>
				<li className="nav-item">
					<a
						className={content === "Work" ? "nav-link active" : "nav-link"}
						onClick={() => setContent("Work")}
						href="#"
					>
						Work/Education
					</a>
				</li>
				<li className="nav-item">
					<a
						className={content === "Contact" ? "nav-link active" : "nav-link excited"}
						onClick={() => setContent("Contact")}
						href="#"
					>
						Get in touch
					</a>
				</li>
			</ul>
			{component}
		</>
	);
}
