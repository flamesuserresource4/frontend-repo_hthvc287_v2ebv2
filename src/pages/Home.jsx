import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
    </div>
  )
}
