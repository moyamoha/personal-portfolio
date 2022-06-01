import React from "react";

export default function TechStack() {
	return (
		<>
			<h5 className="text-success">Technologies I know: </h5>
			<section
				className="d-flex align-items-center flex-column flex-md-row"
				style={{ gap: "15px" }}
			>
				<span>
					<img
						src="/js-brands.svg"
						alt="Icon of javascript"
						width="20px"
						height="20px"
						className="d-inline"
					/>{" "}
					JavaScript
				</span>
				<span>
					<img
						src="/html5-brands.svg"
						alt="Icon of html"
						width="20px"
						height="20px"
						className="d-inline"
					/>{" "}
					Html5
				</span>
				<span>
					<img
						src="/react-brands.svg"
						alt="Icon of react"
						width="20px"
						height="20px"
						className="d-inline"
					/>{" "}
					React
				</span>
				<span>
					<img
						src="/sass-brands.svg"
						alt="Icon of Sass"
						width="20px"
						height="20px"
						className="d-inline"
					/>{" "}
					Sass
				</span>
				<span>
					<img
						src="/css3-brands.svg"
						alt="Icon of Css"
						width="20px"
						height="20px"
						className="d-inline"
					/>{" "}
					Css3
				</span>
				<span>
					<img
						src="/python-brands.svg"
						alt="Icon of Python"
						width="20px"
						height="20px"
						className="d-inline"
					/>{" "}
					Python
				</span>
				<span>
					<img
						src="/java-brands.svg"
						alt="Icon of java"
						width="20px"
						height="20px"
						className="d-inline"
					/>{" "}
					Java
				</span>
				<span>
					<img
						src="/node-js-brands.svg"
						alt="Icon of Nodejs"
						width="20px"
						height="20px"
						className="d-inline"
					/>{" "}
					NodeJs
				</span>
				<span>
					<img
						src="/vuejs-brands.svg"
						alt="Icon of Vue"
						width="20px"
						height="20px"
						className="d-inline"
					/>{" "}
					Vue.js
				</span>
			</section>
			<br></br>
			<h5 className="text-info">Technologies I wish to learn next: </h5>
			<section
				className="d-flex align-items-center flex-column flex-md-row"
				style={{ gap: "15px" }}
			>
				<span>
					<img
						src="/aws-brands.svg"
						alt="Icon of Aws"
						width="20px"
						height="20px"
						className="d-inline"
					/>{" "}
					AWS
				</span>
				<span>
					<img
						src="/linux-brands.svg"
						alt="Icon of Linux"
						width="20px"
						height="20px"
						className="d-inline"
					/>{" "}
					Linux
				</span>
			</section>
		</>
	);
}
