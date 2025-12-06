import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CalculatorPage from './pages/Calculator'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

