import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gray-900 text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to take the next step?</h3>
            <p className="text-white/80 mt-2 max-w-xl">Check your rate with no impact to your credit score. Get a personalized offer in minutes.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/apply" className="px-5 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-white/90">Get your rate</Link>
            <Link to="/calculator" className="px-5 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 border border-white/20">Calculate</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
