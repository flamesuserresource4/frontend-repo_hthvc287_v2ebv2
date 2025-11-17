import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function ApplyPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState(15000)
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <div className="pt-24 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-900">Start your application</h1>
        <p className="text-gray-600 mt-2">Tell us a bit about you and your goal. We’ll follow up shortly.</p>

        {!submitted ? (
          <form onSubmit={submit} className="mt-8 rounded-2xl bg-white/70 backdrop-blur border border-gray-200 p-6 space-y-4">
            <div>
              <label className="text-sm text-gray-700">Full name</label>
              <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" value={name} onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div>
              <label className="text-sm text-gray-700">Desired amount</label>
              <input type="number" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" value={amount} onChange={(e)=>setAmount(e.target.value)} required />
            </div>

            <button className="px-5 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800">Submit</button>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl bg-white/70 backdrop-blur border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">Thanks, {name.split(' ')[0] || 'there'}!</h3>
            <p className="text-gray-700 mt-2">We received your details and sent a confirmation to {email}. Our team will reach out with a personalized offer based on ${amount}.</p>
          </div>
        )}
      </div>
    </div>
  )
}
