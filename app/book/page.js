'use client';
import { useState } from 'react';

function LinkList({ title, fetchUrl }) {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    const r = await fetch(fetchUrl, { cache:'no-store' });
    const j = await r.json();
    setLinks(j.links || []);
    setLoading(false);
  }

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <button onClick={load} className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 text-sm">
          {loading ? 'Loading…' : 'Show links'}
        </button>
      </div>
      <ul className="list-disc ml-6 mt-3 space-y-1">
        {links.map((l,i)=><li key={i}><a className="text-indigo-700 underline" href={l.url} target="_blank">{l.name}</a></li>)}
        {(!links || links.length===0) && !loading && <li className="text-gray-500">No links yet</li>}
      </ul>
    </div>
  );
}

export default function BookPage() {
  const [city, setCity] = useState('Paris');
  const [from, setFrom] = useState('LHR');
  const [to, setTo] = useState('CDG');
  const [checkin, setCheckin] = useState('2025-10-10');
  const [checkout, setCheckout] = useState('2025-10-13');
  const [date, setDate] = useState('2025-10-10');

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [seniors, setSeniors] = useState(0);
  const [pets, setPets] = useState(0);

  const pax = `adults=${adults}&children=${children}&seniors=${seniors}&pets=${pets}`;

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-2">Book Your Trip</h1>
        <p className="text-gray-600 mb-6">Includes Airbnb + Hotels + Flights + Rail + Cars + Experiences. Supports children, seniors & pets.</p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border rounded-xl p-4 shadow-sm space-y-3">
            <h2 className="font-semibold">Where & When</h2>
            <label className="block text-sm">City (hotels/airbnb/cars/experiences)
              <input className="mt-1 border rounded w-full px-3 py-2" value={city} onChange={e=>setCity(e.target.value)} />
            </label>
            <label className="block text-sm">Check-in
              <input type="date" className="mt-1 border rounded w-full px-3 py-2" value={checkin} onChange={e=>setCheckin(e.target.value)} />
            </label>
            <label className="block text-sm">Check-out
              <input type="date" className="mt-1 border rounded w-full px-3 py-2" value={checkout} onChange={e=>setCheckout(e.target.value)} />
            </label>

            <hr/>

            <label className="block text-sm">Flights FROM (IATA)
              <input className="mt-1 border rounded w-full px-3 py-2" value={from} onChange={e=>setFrom(e.target.value)} />
            </label>
            <label className="block text-sm">Flights TO (IATA)
              <input className="mt-1 border rounded w-full px-3 py-2" value={to} onChange={e=>setTo(e.target.value)} />
            </label>
            <label className="block text-sm">Travel date
              <input type="date" className="mt-1 border rounded w-full px-3 py-2" value={date} onChange={e=>setDate(e.target.value)} />
            </label>
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm space-y-3">
            <h2 className="font-semibold">Passengers</h2>
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-sm">Adults
                <input type="number" min={0} className="mt-1 border rounded w-full px-3 py-2" value={adults} onChange={e=>setAdults(+e.target.value)} />
              </label>
              <label className="block text-sm">Children
                <input type="number" min={0} className="mt-1 border rounded w-full px-3 py-2" value={children} onChange={e=>setChildren(+e.target.value)} />
              </label>
              <label className="block text-sm">Seniors
                <input type="number" min={0} className="mt-1 border rounded w-full px-3 py-2" value={seniors} onChange={e=>setSeniors(+e.target.value)} />
              </label>
              <label className="block text-sm">Pets
                <input type="number" min={0} className="mt-1 border rounded w-full px-3 py-2" value={pets} onChange={e=>setPets(+e.target.value)} />
              </label>
            </div>
            <p className="text-xs text-gray-500">Note: Some providers don’t separate seniors; we pass them as adults where needed. Pets are added as filters/hints when supported.</p>
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm space-y-3">
            <h2 className="font-semibold">Open Links</h2>
            <div className="grid gap-3">
              <a className="px-3 py-2 rounded bg-rose-600 text-white hover:bg-rose-700 text-center"
                 href={`/api/deeplink/airbnb?city=${encodeURIComponent(city)}&checkin=${checkin}&checkout=${checkout}&${pax}`}
                 target="_blank">Airbnb</a>
              <a className="px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 text-center"
                 href={`/api/deeplink/hotels?city=${encodeURIComponent(city)}&checkin=${checkin}&checkout=${checkout}&${pax}`}
                 target="_blank">Hotels</a>
              <a className="px-3 py-2 rounded bg-sky-600 text-white hover:bg-sky-700 text-center"
                 href={`/api/deeplink/flights?from=${from}&to=${to}&depart=${date}&${pax}`}
                 target="_blank">Flights</a>
              <a className="px-3 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700 text-center"
                 href={`/api/deeplink/rail?from=${from}&to=${city}&date=${date}&${pax}`}
                 target="_blank">Rail</a>
              <a className="px-3 py-2 rounded bg-amber-600 text-white hover:bg-amber-700 text-center"
                 href={`/api/deeplink/cars?city=${encodeURIComponent(city)}&pickup=${checkin}T10:00&dropoff=${checkout}T10:00&${pax}`}
                 target="_blank">Cars</a>
              <a className="px-3 py-2 rounded bg-fuchsia-600 text-white hover:bg-fuchsia-700 text-center"
                 href={`/api/deeplink/experiences?city=${encodeURIComponent(city)}&date=${date}&${pax}`}
                 target="_blank">Experiences</a>
            </div>
            <p className="text-xs text-gray-500">Each button opens a page with demo affiliate-compatible URLs you can plug real IDs into later.</p>
          </div>
        </div>

        {/* Optional: show the lists inline */}
        <div className="grid md:grid-cols-2 gap-4">
          <LinkList title="Airbnb" fetchUrl={`/api/deeplink/airbnb?city=${encodeURIComponent(city)}&checkin=${checkin}&checkout=${checkout}&${pax}`} />
          <LinkList title="Hotels" fetchUrl={`/api/deeplink/hotels?city=${encodeURIComponent(city)}&checkin=${checkin}&checkout=${checkout}&${pax}`} />
          <LinkList title="Flights" fetchUrl={`/api/deeplink/flights?from=${from}&to=${to}&depart=${date}&${pax}`} />
          <LinkList title="Rail" fetchUrl={`/api/deeplink/rail?from=${from}&to=${city}&date=${date}&${pax}`} />
          <LinkList title="Cars" fetchUrl={`/api/deeplink/cars?city=${encodeURIComponent(city)}&pickup=${checkin}T10:00&dropoff=${checkout}T10:00&${pax}`} />
          <LinkList title="Experiences" fetchUrl={`/api/deeplink/experiences?city=${encodeURIComponent(city)}&date=${date}&${pax}`} />
        </div>
      </section>
    </main>
  );
}
