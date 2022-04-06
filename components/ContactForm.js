import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const router = useRouter();

	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		if (name === "") {
			setNameError("Please provide your name");
			return;
		} else if (email === "") {
			setEmailError("Please provide your email");
			return;
		}
		const template_params = {
			reciever: "Yahya",
			sender_name: name,
			sender_email: email,
			message: message,
		};

		const data = {
			service_id: "service_dcbitlo",
			template_id: "template_b6rsqsa",
			user_id: "user_XgoiuZXUKi2F0OuKMPN0j",
			template_params: template_params,
		};
		fetch("https://api.emailjs.com/api/v1.0/email/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log(res.status);
		});
		setEmail("");
		setMessage("");
		setName("");
		router.push("/");
	});

	return (
		<form onSubmit={handleSubmit} className="contact-form p-2">
			<section className="mb-3 contact-form__section">
				<label className="d-block mb-1" htmlFor="name">
					Name *
				</label>
				<input
					type="text"
					value={name}
					className="py-1 px-2"
					name="name"
					id="name"
					onChange={(e) => {
						setName(e.target.value);
						setNameError("");
					}}
				></input>
				<p className="text-danger lh-sm mt-1" style={{ fontSize: "0.80rem" }}>
					{nameError}
				</p>
			</section>
			<section className="mb-3 contact-form__section">
				<label htmlFor="email" className="d-block mb-1">
					Email *
				</label>
				<input
					type="email"
					className="py-1 px-2"
					value={email}
					name="email"
					id="email"
					onChange={(e) => {
						setEmail(e.target.value);
						setEmailError("");
					}}
				></input>
				<p className="text-danger lh-sm mt-1" style={{ fontSize: "0.80rem" }}>
					{emailError}
				</p>
			</section>
			<section className="contact-form__section mb-3">
				<label className="d-block mb-1">Your message</label>
				<textarea
					value={message}
					name="message"
					style={{ resize: "vertical", height: "200px" }}
					className="py-1 px-2"
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
				<p
					className="text-secondary lh-sm mt-1"
					style={{ fontSize: "0.80rem" }}
				>
					Ps: If you let message empty, I suppose that you want to contact me
					personally in advance. I will thus get back to you via email
				</p>
			</section>
			<button type="submit" className="btn btn-success mt-2">
				Submit
			</button>
		</form>
	);
}
