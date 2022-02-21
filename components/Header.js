import Head from "next/head";
import React from "react"

export default function Header() {
	return (
		<nav className="navbar container navbar-expand-md px-2 px-md-0 navbar-light header">
			<a className="navbar-brand" href="/">
        <img src="/logo.jpg" width="25px" height="25px" alt="site logo"></img> {" "}
				<span className="nice">Yahya Salimi</span>
			</a>

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
		</nav>
	);
}
