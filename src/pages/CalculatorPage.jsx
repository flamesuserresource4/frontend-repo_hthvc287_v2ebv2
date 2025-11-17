import Navbar from '../components/Navbar'
import Calculator from '../components/Calculator'

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <div className="pt-20" />
      <Calculator />
    </div>
  )
}
