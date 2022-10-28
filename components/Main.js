import React from "react";
import Image from "next/image";
import TechStack from "./TechStack";

export default function Main() {
  return (
    <div className="container-fluid d-md-flex px-sm-0 pt-2">
      <img className="my-img" src="/Me.jpg" alt="picture of yahya"></img>
      <section className="w-100">
        <p>
          I am an IT-student at the university of Jyväskylä. Currently I am
          studying towards bachelor degree, after which I would like to land a
          job in areas I am interested in mainly data science and
          application/web developement. I love to code readable and maintainable
          world-changing scripts. My favourite programming languages are Python
          and JavaScript, but I am not restricted to them. My other hobbies
          include reading, watching football and talking to friends.
        </p>
        <TechStack></TechStack>
      </section>
    </div>
  );
}
