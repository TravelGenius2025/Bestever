import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'TravelGenius — Smarter Travel Metasearch',
  description: 'Compare hotels, flights, rail, cars & experiences with one click.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"><body>
      <Header/>
      <main className="container">{children}</main>
      <Footer/>
    </body></html>
  )
}
