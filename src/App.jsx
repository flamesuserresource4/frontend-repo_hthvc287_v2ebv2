import HomePage from './pages/Home'
import CalculatorPage from './pages/CalculatorPage'
import ApplyPage from './pages/ApplyPage'
import ContactPage from './pages/ContactPage'
import Test from './Test'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}

export default App
