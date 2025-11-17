import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function ContactPage() {
  const [msgSent, setMsgSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    setMsgSent(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <div className="pt-24 max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Contact us</h1>
            <p className="text-gray-600 mt-2">We’re here to help you make the right decision. Reach out and we’ll respond shortly.</p>

            {!msgSent ? (
              <form onSubmit={onSubmit} className="mt-8 rounded-2xl bg-white/70 backdrop-blur border border-gray-200 p-6 space-y-4">
                <div>
                  <label className="text-sm text-gray-700">Full name</label>
                  <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} required />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} required />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Message</label>
                  <textarea rows="5" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} required />
                </div>

                <button className="px-5 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800">Send</button>
              </form>
            ) : (
              <div className="mt-8 rounded-2xl bg-white/70 backdrop-blur border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">Thanks!</h3>
                <p className="text-gray-700 mt-2">We received your message and will get back to you at {form.email}.</p>
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-white/70 backdrop-blur border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Our offices</h3>
            <p className="text-gray-600 mt-2">123 Market Street, Suite 400, San Francisco, CA</p>
            <div className="mt-6 aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-gray-200" />
          </div>
        </div>
      </div>
    </div>
  )
}
