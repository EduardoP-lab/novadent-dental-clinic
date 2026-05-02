import './App.css'
import './normalize.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tecnologia from './components/Tecnologia'
import Tratamientos from './components/Tratamientos'

function App() {
  return (
    <div className="min-h-screen bg-[#f7fbfb] text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Tratamientos />
        <Tecnologia />
      </main>
    </div>
  )
}

export default App
