import './App.css'
import './normalize.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useLayoutEffect } from 'react'
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

  useLayoutEffect(() => {
    if (location.hash) return

    const html = document.documentElement
    const previousScrollBehavior = html.style.scrollBehavior

    html.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const animationFrameId = window.requestAnimationFrame(() => {
      html.style.scrollBehavior = previousScrollBehavior
    })

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      html.style.scrollBehavior = previousScrollBehavior
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!location.hash) return

    const targetId = decodeURIComponent(location.hash.slice(1))
    let timeoutId
    let animationFrameId
    let attempts = 0

    const scrollToTarget = () => {
      const target = document.getElementById(targetId)

      if (!target) {
        attempts += 1

        if (attempts < 20) {
          timeoutId = window.setTimeout(scrollToTarget, 50)
        }

        return
      }

      const navShell = document.querySelector('.nav-shell')
      const headerOffset = navShell
        ? navShell.getBoundingClientRect().bottom + 16
        : 96
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - headerOffset

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: 'smooth',
      })
    }

    animationFrameId = window.requestAnimationFrame(() => {
      timeoutId = window.setTimeout(scrollToTarget, 0)
    })

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.clearTimeout(timeoutId)
    }
  }, [location.pathname, location.hash])

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
