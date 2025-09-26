import Link from 'next/link'

export default function Header(){
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="logo">
          <span className="logo-mark" />
          <span>TravelGenius</span>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/book">Book</Link>
          <Link href="/playbook-domain">Playbook</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </nav>
      </div>
    </header>
  )
}
