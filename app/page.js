import Carousel from '@/components/Carousel'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Plan less. Travel more.</h1>
        <p>Launch hotel, flight, rail, car & experience searches—plus our True Trip Value idea.</p>
        <Link className="btn-primary" href="/book">Start searching</Link>
      </section>

      <Carousel images={[
        {src:'https://images.unsplash.com/photo-1473959383413-b22f7d3bfbb3?q=80&w=1600&auto=format&fit=crop', alt:'Paris'},
        {src:'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop', alt:'Tokyo'},
        {src:'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1600&auto=format&fit=crop', alt:'New York'},
        {src:'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop', alt:'London'},
      ]} />

      <section className="grid" style={{marginTop:18}}>
        <div className="card">
          <h3>Why we’re different</h3>
          <p>We show a <strong>True Trip Value (TTV)</strong> score: price × comfort × time × CO₂.</p>
          <p className="small">TTV here is illustrative; fine‑tune later with live data.</p>
        </div>
        <div className="card">
          <h3>Own your domain</h3>
          <p>For affiliate approval, see the <Link className="link" href="/playbook-domain">Free‑Domain + Ownership playbook</Link>.</p>
        </div>
      </section>
    </div>
  )
}
