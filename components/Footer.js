import Link from 'next/link'
export default function Footer(){
  const y = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
        <div>© {y} TravelGenius</div>
        <nav style={{display:'flex',gap:14}}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/playbook-domain">Playbook</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </nav>
      </div>
    </footer>
  )
}
