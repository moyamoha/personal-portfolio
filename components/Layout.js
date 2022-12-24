import { useRouter } from "next/router";
import React from "react";

export default function Layout({ children }) {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <ul className="nav nav-tabs mb-3 px-2 px-md-0">
        <li className="nav-item">
          <a
            className={currentPath === "/" ? "nav-link active" : "nav-link"}
            href="/"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              currentPath === "/projects" ? "nav-link active" : "nav-link"
            }
            href="/projects"
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              currentPath === "/experience" ? "nav-link active" : "nav-link"
            }
            href="/experience"
          >
            Work/Education
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              currentPath === "/blogs" ? "nav-link active" : "nav-link"
            }
            href="/blogs"
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              currentPath === "/contact" ? "nav-link active" : "nav-link"
            }
            href="/contact"
          >
            Get in touch
          </a>
        </li>
      </ul>
      {children}
    </>
  );
}
