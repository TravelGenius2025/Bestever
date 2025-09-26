'use client'
import { useState } from 'react'

const DEMO = {
  hotels: {
    booking: 'https://www.booking.com/searchresults.html?ss=Paris&aid=DEMO123',
    agoda: 'https://www.agoda.com/search?city=Paris&cid=DEMO456',
    expedia: 'https://www.expedia.com/Hotel-Search?destination=Paris&affcid=DEMO789',
    hotels: 'https://www.hotels.com/search.do?destination=Paris&pos=DEMO000',
  },
  flights: {
    skyscanner: 'https://www.skyscanner.com/transport/flights/nyca/par/250501/?associateid=DEMO111',
    kayak: 'https://www.kayak.com/flights/NYC-PAR/2025-05-01/2025-05-07?aid=DEMO222',
    google: 'https://www.google.com/travel/flights',
  },
  rail: {
    raileurope: 'https://www.raileurope.com/?aid=DEMO333',
    trainline: 'https://www.thetrainline.com/?utm_medium=affiliates&utm_campaign=DEMO444',
  },
  cars: {
    rentalcars: 'https://www.rentalcars.com/?affiliateCode=DEMO555',
    discover: 'https://www.discovercars.com/?a_aid=DEMO666',
  },
  experiences: {
    getyourguide: 'https://www.getyourguide.com/-l16/?partner_id=DEMO777',
    viator: 'https://www.viator.com/Paris/d479-ttd?pid=DEMO888',
  }
}

export default function Book(){
  const [city, setCity] = useState('Paris')
  const submit = (e)=>{ e.preventDefault(); alert('Demo links are fixed to Paris for now. Replace IDs later.'); }
  return (
    <div>
      <h1>Book: Hotels · Flights · Rail · Cars · Experiences</h1>
      <p className="small">All links are <strong>demo</strong> affiliate links so deploys never fail.</p>
      <form className="form" onSubmit={submit} style={{margin:'8px 0 18px'}}>
        <input className="input" value={city} onChange={e=>setCity(e.target.value)} placeholder="Try: Paris, Tokyo, New York" />
        <button className="btn-primary" type="submit">Search (demo)</button>
      </form>
      <div className="grid">
        <div className="card"><h3>Hotels</h3><ul>
          <li><a className="link" href={DEMO.hotels.booking} target="_blank">Booking.com</a></li>
          <li><a className="link" href={DEMO.hotels.agoda} target="_blank">Agoda</a></li>
          <li><a className="link" href={DEMO.hotels.expedia} target="_blank">Expedia</a></li>
          <li><a className="link" href={DEMO.hotels.hotels} target="_blank">Hotels.com</a></li>
        </ul></div>
        <div className="card"><h3>Flights</h3><ul>
          <li><a className="link" href={DEMO.flights.skyscanner} target="_blank">Skyscanner</a></li>
          <li><a className="link" href={DEMO.flights.kayak} target="_blank">KAYAK</a></li>
          <li><a className="link" href={DEMO.flights.google} target="_blank">Google Flights</a></li>
        </ul></div>
        <div className="card"><h3>Rail</h3><ul>
          <li><a className="link" href={DEMO.rail.raileurope} target="_blank">Rail Europe</a></li>
          <li><a className="link" href={DEMO.rail.trainline} target="_blank">Trainline</a></li>
        </ul></div>
        <div className="card"><h3>Cars</h3><ul>
          <li><a className="link" href={DEMO.cars.rentalcars} target="_blank">Rentalcars.com</a></li>
          <li><a className="link" href={DEMO.cars.discover} target="_blank">DiscoverCars</a></li>
        </ul></div>
        <div className="card"><h3>Experiences</h3><ul>
          <li><a className="link" href={DEMO.experiences.getyourguide} target="_blank">GetYourGuide</a></li>
          <li><a className="link" href={DEMO.experiences.viator} target="_blank">Viator</a></li>
        </ul></div>
      </div>
    </div>
  )
}
