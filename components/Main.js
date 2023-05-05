import React from "react";
import Image from "next/image";
import TechStack from "./TechStack";

export default function Main() {
  return (
    <div className="container-fluid d-md-flex px-sm-0 pt-2 mb-5">
      <img className="my-img" src="/Me.jpg" alt="picture of yahya"></img>
      <section className="w-100">
        <p>I am a passionate software developer with a strong problem-solving ability. With my extensive knowledge and experience in the field, I have developed a keen interest in developing cutting-edge software applications that can make a real difference in people's lives.</p>
        <p>As a software developer, I am highly skilled in various programming languages and technologies, and I always stay up-to-date with the latest industry trends and best practices. I have a proven track record of successfully delivering high-quality software products on time and within budget.</p>
        <p>My greatest strengths lie in my ability to analyze complex problems, break them down into smaller parts, and develop innovative solutions to solve them (Isn't that what software development is all about?). I thrive in challenging environments and enjoy taking on new and exciting projects that allow me to push the limits of what is possible.</p>
        <p>In addition to my technical skills, I am also a strong communicator and collaborator, and I enjoy working closely with my team to deliver outstanding results. I am always open to feedback and willing to learn from others, which helps me to constantly improve my skills and stay ahead of the curve.</p>
        <p>If you are looking for a talented and driven software developer who can help you take your business to the next level, then look no further. I am confident that I have the skills and experience needed to meet and exceed your expectations, and I would be honored to be a part of your team.</p>
        <TechStack></TechStack>
      </section>
    </div>
  );
}
