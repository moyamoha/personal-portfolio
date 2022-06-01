import React from "react";

export default function Skill({ src, name }) {
	return (
		<span>
			<img
				src={src}
				alt={"Icon of " + name}
				width="20px"
				height="20px"
				className="d-inline"
			/>{" "}
			{name}
		</span>
	);
}
