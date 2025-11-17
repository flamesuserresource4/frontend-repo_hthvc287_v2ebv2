import { ShieldCheck, Zap, Wallet, Clock } from 'lucide-react'

const items = [
  { icon: Zap, title: 'Quick approval', desc: 'Apply in minutes and get instant decisions.' },
  { icon: Wallet, title: 'Transparent rates', desc: 'Clear terms with no hidden fees, ever.' },
  { icon: Clock, title: 'Flexible terms', desc: 'Choose repayment plans that suit your needs.' },
  { icon: ShieldCheck, title: 'Secure', desc: 'Bank-level security keeps your data safe.' },
]

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/70 backdrop-blur border border-gray-200 p-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-blue-600/30 shadow-lg">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
