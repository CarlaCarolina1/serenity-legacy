import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HomeGemini from './pages/HomeGemini'
import HomeNeo from './pages/HomeNeo'
import CalculatorPage from './pages/Calculator'
import About from './pages/About'
import Services from './pages/Services'
import Properties from './pages/Properties'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import PropertyDetail from './pages/PropertyDetail'
import PropertyAdmin from './pages/Admin/PropertyAdmin'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview-home" element={<HomeGemini />} />
          <Route path="/preview-neo" element={<HomeNeo />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Properties />} />
          <Route path="/map" element={<Properties />} />
          <Route path="/admin/properties" element={<PropertyAdmin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

