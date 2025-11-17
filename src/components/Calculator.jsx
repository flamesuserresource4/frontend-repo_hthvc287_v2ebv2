import { useMemo, useState } from 'react'

const currency = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' })

export default function Calculator() {
  const [principal, setPrincipal] = useState(10000)
  const [rate, setRate] = useState(8)
  const [term, setTerm] = useState(36)
  const [extra, setExtra] = useState(0)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const monthly = useMemo(() => {
    const r = rate / 100 / 12
    const n = term
    const P = principal
    if (r === 0) return P / n
    return (P * (r * (1 + r) ** n)) / ((1 + r) ** n - 1)
  }, [principal, rate, term])

  const onCalculate = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${baseUrl}/api/calculate-loan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ principal: Number(principal), annual_rate: Number(rate), term_months: Number(term), extra_payment: Number(extra) }),
      })
      if (!res.ok) throw new Error('Failed to calculate')
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-white/70 backdrop-blur border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Loan calculator</h2>
            <p className="text-gray-600 text-sm mt-1">Estimate your payment and explore payoff options.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Amount</label>
                <input type="number" value={principal} onChange={(e)=>setPrincipal(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
              </div>
              <div>
                <label className="text-sm text-gray-700">APR %</label>
                <input type="number" step="0.01" value={rate} onChange={(e)=>setRate(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Term (months)</label>
                <input type="number" value={term} onChange={(e)=>setTerm(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Extra monthly</label>
                <input type="number" value={extra} onChange={(e)=>setExtra(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500">Estimated monthly (no extra)</div>
                <div className="text-xl font-semibold text-gray-900">{currency.format(monthly || 0)}</div>
              </div>
              <button onClick={onCalculate} disabled={loading} className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 disabled:opacity-50">
                {loading ? 'Calculating...' : 'Calculate schedule'}
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-white/70 backdrop-blur border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Results</h3>
            {!result && !error && (
              <p className="text-gray-600 text-sm mt-2">Enter your details and calculate to see your payoff plan.</p>
            )}
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            {result && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card title="Monthly payment" value={currency.format(result.monthly_payment)} />
                  <Card title="Total interest" value={currency.format(result.total_interest)} />
                  <Card title="Total paid" value={currency.format(result.total_payment)} />
                  <Card title="Payoff time" value={`${result.payoff_months} months`} />
                </div>
                <div className="max-h-72 overflow-auto border border-gray-200 rounded-xl">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr className="text-left">
                        <th className="px-3 py-2">Month</th>
                        <th className="px-3 py-2">Payment</th>
                        <th className="px-3 py-2">Interest</th>
                        <th className="px-3 py-2">Principal</th>
                        <th className="px-3 py-2">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.schedule?.map((row)=> (
                        <tr key={row.month} className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-2">{row.month}</td>
                          <td className="px-3 py-2">{currency.format(row.payment)}</td>
                          <td className="px-3 py-2">{currency.format(row.interest)}</td>
                          <td className="px-3 py-2">{currency.format(row.principal)}</td>
                          <td className="px-3 py-2">{currency.format(row.balance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ title, value }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4 bg-white">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="text-lg font-semibold text-gray-900">{value}</div>
    </div>
  )
}
