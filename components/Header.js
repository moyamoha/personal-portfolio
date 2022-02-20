import Head from "next/head";
import React from "react"

export default function Header() {
	return (
		<nav className="navbar container navbar-expand-lg navbar-light header">
			<a className="navbar-brand" href="/">
				<span className="nice">Yahya Salimi</span>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav w-100 justify-content-end">
					<li className="nav-item active">
						<a className="nav-link" href="/Resume_Yahya.pdf" target="_blank">
							Resume
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link " href="https://www.linkedin.com/in/yahya-salimi-6496391a8/" target="_blank">
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
