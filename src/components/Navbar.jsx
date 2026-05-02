import { useState } from 'react'

// Enlaces principales de la navegacion. Cada href apunta al id de una seccion.
const navItems = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Pacientes', href: '#pacientes' },
  { label: 'Ubicacion', href: '#ubicacion' },
]

function Navbar() {
  // Controla si el menu mobile esta abierto o cerrado.
  const [isOpen, setIsOpen] = useState(false)

  // Cierra el menu al navegar, para que mobile no quede con el panel abierto.
  const closeMenu = () => setIsOpen(false)

  return (
    // Header fijo. pointer-events-none permite que no bloquee clicks fuera de la navbar.
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      {/* Capsula principal con efecto glass y borde animado desde CSS. */}
      <nav className="nav-shell pointer-events-auto relative mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-[2rem] border border-white/65 bg-white/75 px-4 py-3 shadow-[0_18px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:px-5">
        {/* Marca/logo de la clinica. El SVG es decorativo y usa aria-hidden. */}
        <a
          href="#inicio"
          aria-label="Ir al inicio"
          className="group relative z-10 flex items-center gap-3"
          onClick={closeMenu}
        >
          <span className="brand-mark grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-[0_14px_35px_rgba(15,23,42,0.26)]">
            <svg
              className="h-7 w-7"
              viewBox="0 0 48 48"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M24 8C14.9 8 9 13.8 9 22.2c0 7.9 4.8 17.8 9.2 17.8 2.4 0 2.1-8.4 5.8-8.4s3.4 8.4 5.8 8.4C34.2 40 39 30.1 39 22.2 39 13.8 33.1 8 24 8Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M18 17.5c2.6-1.8 7.3-2.5 12 0"
                stroke="#5EEAD4"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <span className="leading-none">
            <span className="block text-lg font-black tracking-[0.01em] text-slate-950 sm:text-xl">
              NovaDent
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
              Clinica dental
            </span>
          </span>
        </a>

        {/* Menu de escritorio: se oculta en mobile y aparece desde lg. */}
        <div className="relative z-10 hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/65 p-1 shadow-inner shadow-slate-200/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link rounded-full px-5 py-3 text-sm font-bold text-slate-700 transition-colors duration-300 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA principal en desktop. */}
        <div className="relative z-10 hidden items-center lg:flex">
          <a
            href="#cita"
            className="cta-button group rounded-full px-5 py-3 text-sm font-black text-slate-950 shadow-[0_15px_35px_rgba(20,184,166,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <span>Agenda cita</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Boton hamburguesa: cambia el estado del menu mobile y actualiza atributos ARIA. */}
        <button
          type="button"
          className="menu-button relative z-20 grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white/75 text-slate-950 shadow-sm transition duration-300 hover:border-teal-200 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 lg:hidden"
          aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className={`hamburger ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

      </nav>

      {/* Panel mobile separado del nav para que no lo recorte el overflow-hidden de la capsula. */}
      <div
        id="mobile-navigation"
        className={`mobile-panel mx-auto mt-3 max-w-7xl rounded-[1.6rem] border border-white/70 bg-white/90 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl transition duration-500 lg:hidden ${
          isOpen ? 'mobile-panel-open pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="grid gap-2">
          {navItems.map((item, index) => (
            // Delay escalonado para que cada enlace entre con una pequena diferencia.
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link rounded-2xl px-4 py-4 text-base font-black text-slate-800 transition duration-300 hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              style={{ '--delay': `${index * 70}ms` }}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA secundario dentro del menu mobile. */}
        <div className="mt-3 border-t border-slate-200 pt-3">
          <a
            href="#cita"
            className="block rounded-2xl bg-teal-100 px-4 py-4 text-center text-sm font-black text-teal-900 transition duration-300 hover:bg-teal-200"
            onClick={closeMenu}
          >
            Agendar cita
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
