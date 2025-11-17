import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900"
            >
              Fast, flexible loans for modern life
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl"
            >
              Get a decision in minutes with transparent rates. No hidden fees. Designed with a sleek, glassmorphic touch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link to="/apply" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                Apply now <ArrowRight size={18} />
              </Link>
              <Link to="/calculator" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/70 backdrop-blur border border-gray-200 text-gray-900 font-medium hover:bg-white transition-colors">
                Try calculator
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-md"
            >
              {["Instant decision", "No hidden fees", "Flexible terms"].map((t) => (
                <div key={t} className="rounded-xl bg-white/70 backdrop-blur p-4 border border-gray-200 text-sm text-gray-700">
                  {t}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
