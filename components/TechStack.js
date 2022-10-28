import React from "react";
import Skill from "./Skill";

export default function TechStack() {
  const skills = [
    { src: "/js-brands.svg", name: "Javascript" },
    { src: "/html5-brands.svg", name: "Html5" },
    { src: "/react-brands.svg", name: "React" },
    { src: "/sass-brands.svg", name: "Sass" },
    { src: "/css3-brands.svg", name: "Css3" },
    { src: "/python-brands.svg", name: "Python" },
    { src: "/java-brands.svg", name: "Java" },
    { src: "/node-js-brands.svg", name: "NodeJs" },
    { src: "/vuejs-brands.svg", name: "Vue" },
    { src: "/nestjs-brands.svg", name: "Nestjs" },
  ];

  const toBeLearnedSkills = [
    { src: "/aws-brands.svg", name: "Aws" },
    { src: "/linux-brands.svg", name: "Linux" },
  ];

  return (
    <>
      <h5 className="text-success">Technologies I know: </h5>
      <section
        className="d-flex align-items-center flex-column flex-md-row"
        style={{ gap: "15px" }}
      >
        {skills.map((s) => (
          <Skill src={s.src} name={s.name}></Skill>
        ))}
      </section>
      <br></br>
      <h5 className="text-info">Technologies I wish to learn next: </h5>
      <section
        className="d-flex align-items-center flex-column flex-md-row"
        style={{ gap: "15px" }}
      >
        {toBeLearnedSkills.map((s) => (
          <Skill src={s.src} name={s.name}></Skill>
        ))}
      </section>
    </>
  );
}
