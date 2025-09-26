export const metadata = { title: 'Free‑Domain + Ownership Playbook' }
export default function Playbook(){
  return (
    <div>
      <h1>Free‑Domain + Ownership Playbook</h1>
      <p className="notice"><strong>Goal:</strong> Get a domain you control and connect it to Vercel.</p>
      <h2>1) Free options</h2>
      <ul>
        <li><strong>.is-a.dev / .is-a.app</strong> – free subdomain you control via GitHub + DNS.</li>
        <li><strong>eu.org</strong> – free third‑level domain (manual review).</li>
      </ul>
      <p className="notice"><strong>Tip:</strong> Vercel gives a free <em>*.vercel.app</em> URL. Some affiliates still require a custom domain you own.</p>
      <h2>2) Low‑cost real TLD</h2>
      <ul>
        <li><strong>Namecheap</strong> or <strong>Cloudflare Registrar</strong> – .com/.travel/.site often under $10.</li>
      </ul>
      <h2>3) Connect to Vercel</h2>
      <ol>
        <li>Vercel → Project → <strong>Settings → Domains</strong> → Add domain.</li>
        <li>Follow DNS steps (CNAME for www, A/ALIAS for apex).</li>
        <li>Wait for verification + SSL, then set primary.</li>
      </ol>
    </div>
  )
}
