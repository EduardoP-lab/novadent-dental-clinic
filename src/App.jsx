import './App.css'
import './normalize.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pacientes from './components/Pacientes'
import Tecnologia from './components/Tecnologia'
import Tratamientos from './components/Tratamientos'
import Ubicacion from './components/Ubicacion'
import AgendaCita from './Pages/agenda-cita'

function HomePage() {
  return (
    // Orden principal de la landing page de la clinica dental.
    <>
      <Hero />
      <Tratamientos />
      <Tecnologia />
      <Pacientes />
      <Ubicacion />
      <Footer />
    </>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  useEffect(() => {
    AOS.refreshHard()
  }, [location.pathname])

  return (
    // Contenedor global de la web: define el fondo base y el color de texto.
    <div className="min-h-screen bg-[#f7fbfb] text-slate-950">
      {/* Navegacion fija superior compartida por todas las secciones. */}
      <Navbar />

      <main>
        {/* Rutas principales de la aplicacion. */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agenda-cita" element={<AgendaCita />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
