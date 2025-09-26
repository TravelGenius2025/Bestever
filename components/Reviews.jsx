'use client';
import { useEffect, useState } from 'react';

export default function Reviews({ activityId = 'default-activity' }) {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', rating: 5, text: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Demo load: merge server “seed” + any local submissions for this activity
  useEffect(() => {
    async function load() {
      try {
        const r = await fetch(`/api/reviews?activityId=${encodeURIComponent(activityId)}`, { cache: 'no-store' });
        const seed = await r.json();
        const local = JSON.parse(localStorage.getItem(`reviews:${activityId}`) || '[]');
        setReviews([...seed, ...local]);
      } catch (e) {
        setReviews([]);
      }
    }
    load();
  }, [activityId]);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const newReview = {
      id: 'local-' + Date.now(),
      activityId,
      name: form.name || 'Traveler',
      rating: Number(form.rating) || 5,
      text: form.text?.trim(),
      date: new Date().toISOString().slice(0,10)
    };
    // Save locally (works w/o DB)
    const key = `reviews:${activityId}`;
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    localStorage.setItem(key, JSON.stringify([newReview, ...existing]));
    setReviews(r => [newReview, ...r]);

    // Optional: send to Formspree so you receive it by email (replace with your form id)
    fetch('https://formspree.io/f/mleqzvqa', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ _subject: 'New Activity Review', ...newReview })
    }).catch(()=>{});

    setForm({ name:'', rating:5, text:'' });
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(()=>setSubmitted(false), 2000);
  }

  return (
    <section className="max-w-3xl mx-auto my-12 px-4">
      <h2 className="text-2xl font-semibold mb-3">Traveler Reviews</h2>
      <form onSubmit={onSubmit} className="space-y-3 bg-white border rounded-lg p-4 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="border rounded px-3 py-2" placeholder="Your name"
                 value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
          <select className="border rounded px-3 py-2"
                  value={form.rating} onChange={e=>setForm({...form, rating:e.target.value})}>
            {[5,4,3,2,1].map(v=><option key={v} value={v}>{v} ★</option>)}
          </select>
        </div>
        <textarea className="border rounded px-3 py-2 w-full" rows={4}
                  placeholder="Share details that help other travelers…"
                  value={form.text} onChange={e=>setForm({...form, text:e.target.value})}/>
        <button disabled={submitting} className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">
          {submitting ? 'Submitting…' : 'Submit Review'}
        </button>
        {submitted && <p className="text-green-600 text-sm">Thanks! Your review was added.</p>}
      </form>

      <ul className="mt-6 space-y-3">
        {reviews.map(r=>(
          <li key={r.id} className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <strong>{r.name}</strong>
              <span className="text-amber-500">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</span>
            </div>
            <p className="text-sm text-gray-500">{r.date}</p>
            <p className="mt-2">{r.text}</p>
          </li>
        ))}
        {reviews.length===0 && <li className="text-gray-500">No reviews yet — be the first!</li>}
      </ul>
    </section>
  );
}
