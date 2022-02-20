import axios from 'axios'
import React, { useCallback, useState } from 'react'

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
      e.target.reset()
    }).catch(err => console.error(err))
  })

  return (
    <form onSubmit={handleSubmit} className='w-75 p-2'>
      <section className='d-md-flex justify-content-between mb-3'>
        <label htmlFor='name'>Name</label>
        <input type="text" required value={name} name="name" id='name' onChange={(e) => setName(e.target.value)}></input>
      </section>
      <section className='d-md-flex justify-content-between  mb-3'>
        <label htmlFor='email'>Email</label>
        <input type="email" required value={email} name="email" id='email' onChange={(e) => setEmail(e.target.value)}></input>
      </section>
      <section className='d-md-flex justify-content-between mb-3'>
        <label>Your message</label>
        <textarea value={message} name="message" style={{resize: "vertical"}} onChange={(e) => setMessage(e.target.value)} required minLength={50}></textarea>
      </section>
      <button type="submit" className='btn btn-success w-100 mt-2'>Submit</button>
    </form>
  )
}