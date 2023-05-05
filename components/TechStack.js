import React from "react";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3Full } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { GrHtml5 } from "react-icons/gr";
import {
  FaReact,
  FaSass,
  FaPython,
  FaJava,
  FaNodeJs,
  FaVuejs,
  FaAws,
  FaGit,
  FaLinux,
} from "react-icons/fa";

export default function TechStack() {
  const skills = [
    { src: <TbBrandJavascript />, name: "Javascript" },
    { src: <GrHtml5 />, name: "Html5" },
    { src: <FaReact />, name: "React" },
    { src: <FaSass />, name: "Sass" },
    { src: <DiCss3Full />, name: "Css3" },
    { src: <FaPython />, name: "Python" },
    { src: <FaJava />, name: "Java" },
    { src: <FaNodeJs />, name: "NodeJs" },
    { src: <FaGit />, name: "Git" },
    { src: <FaVuejs />, name: "Vue" },
    { src: <SiNestjs />, name: "Nestjs" },
  ];

  const toBeLearnedSkills = [
    { src: <FaAws />, name: "Aws" },
    { src: <FaLinux />, name: "Linux" },
  ];

  return (
    <>
      <h5 className="text-success">Technologies I know: </h5>
      <section
        className="d-flex align-items-center flex-column flex-md-row"
        style={{ gap: "15px" }}
      >
        {skills.map((s) => (
          <span className="d-flex align-items-center" key={s.name} style={{ gap: "5px" }}>
            {s.src}
            <span>{s.name}</span>
          </span>
        ))}
      </section>
      <br></br>
      <h5 className="text-info">Technologies I wish to learn next: </h5>
      <section
        className="d-flex align-items-center flex-column flex-md-row"
        style={{ gap: "15px" }}
      >
        {toBeLearnedSkills.map((s) => (
          <span key={s.name} className="d-flex align-items-center" style={{ gap: "10px" }}>
            {s.src}
            <span>{s.name}</span>
          </span>
        ))}
      </section>
    </>
  );
}
