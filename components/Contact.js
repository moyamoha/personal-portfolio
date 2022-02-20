import axios from 'axios'
import React, { useCallback, useRef, useState } from 'react'

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    fetch("/api/mail", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"name":name, "email":email, "message":message})
    }).then(res => res.json()).then(data => {
      console.log(data)
      setName("")
      setEmail("")
      setMessage("")
    }).catch(err => console.error(err))
  })

  return (
		<form onSubmit={handleSubmit} className="contact-form p-2">
			<section className="mb-3 contact-form__section">
				<label className='d-block mb-1' htmlFor="name">Name</label>
				<input
					type="text"
					required
					value={name}
					className="py-1 px-2"
					name="name"
					id="name"
					onChange={(e) => setName(e.target.value)}
				></input>
			</section>
			<section className="mb-3 contact-form__section">
				<label htmlFor="email" className='d-block mb-1'>Email</label>
				<input
					type="email"
					className="py-1 px-2"
					required
					value={email}
					name="email"
					id="email"
					onChange={(e) => setEmail(e.target.value)}
				></input>
			</section>
			<section className="contact-form__section mb-3">
				<label className='d-block mb-1'>Your message</label>
				<textarea
					value={message}
					name="message"
					style={{ resize: "vertical", height: "200px"}}
					className="py-1 px-2"
					onChange={(e) => setMessage(e.target.value)}
					required
					minLength={50}
				></textarea>
			</section>
			<button type="submit" className="btn btn-success mt-2">
				Submit
			</button>
		</form>
	);
}