import './App.css'
import './normalize.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pacientes from './components/Pacientes'
import Tecnologia from './components/Tecnologia'
import Tratamientos from './components/Tratamientos'
import Ubicacion from './components/Ubicacion'

function App() {
  return (
    // Contenedor global de la web: define el fondo base y el color de texto.
    <div className="min-h-screen bg-[#f7fbfb] text-slate-950">
      {/* Navegacion fija superior compartida por todas las secciones. */}
      <Navbar />

      {/* Orden principal de la landing page de la clinica dental. */}
      <main>
        <Hero />
        <Tratamientos />
        <Tecnologia />
        <Pacientes />
        <Ubicacion />
      </main>
    </div>
  )
}

export default App
