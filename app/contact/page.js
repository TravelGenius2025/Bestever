'use client'
import { useState } from 'react'

export default function Contact(){
  const [ok,setOk]=useState(false); const [err,setErr]=useState('')
  const submit = async(e)=>{
    e.preventDefault(); setOk(false); setErr('')
    const fd = new FormData(e.currentTarget)
    try{
      const r = await fetch('https://formspree.io/f/xayvwjkd', { method:'POST', headers:{'Accept':'application/json'}, body:fd })
      if(r.ok) setOk(true); else setErr('Send failed (demo endpoint may be rate‑limited).')
    }catch{ setErr('Network error.') }
  }
  return (
    <div>
      <h1>Contact</h1>
      <p className="small">Posts to a Formspree <strong>demo</strong> endpoint. Replace with your own form ID later.</p>
      <form className="form" onSubmit={submit}>
        <input className="input" name="name" placeholder="Your name" required/>
        <input className="input" type="email" name="email" placeholder="you@example.com" required/>
        <textarea className="textarea" name="message" placeholder="How can we help?" required/>
        <button className="btn-primary" type="submit">Send</button>
        {ok && <p className="notice">Thanks! Message sent (demo).</p>}
        {err && <p className="notice" style={{borderColor:'#fecaca',background:'#fff1f2'}}>Error: {err}</p>}
      </form>
    </div>
  )
}
