'use client';
import { useState } from 'react';

const items = [
  { q:'What makes TravelGenius unique?', a:'We combine multi-provider deeplinks with our Local Vibe Index (LVI) and traveler-sourced reviews for smarter choices.' },
  { q:'Do you support kids, seniors, and pets?', a:'Yes — the booking form passes children/seniors counts and pet preference to supported partners.' },
  { q:'How do reviews work?', a:'Reviews are added instantly for everyone on your device and can optionally be emailed to you via Formspree.' }
];

export default function Faq(){
  const [open, setOpen] = useState(0);
  return (
    <section className="max-w-4xl mx-auto px-4 my-12">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <ul className="space-y-3">
        {items.map((it, i)=>(
          <li key={i} className="border rounded-lg bg-white">
            <button onClick={()=>setOpen(open===i?-1:i)} className="w-full text-left px-4 py-3 font-medium">
              {it.q}
            </button>
            {open===i && <div className="px-4 pb-4 text-gray-700">{it.a}</div>}
          </li>
        ))}
      </ul>
    </section>
  );
}
