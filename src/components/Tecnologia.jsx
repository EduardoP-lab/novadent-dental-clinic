import dentalTechnology from '../assets/dental-technology.png'

// Items que explican, sin saturar, las tecnologias clave de la clinica.
const technologies = [
  {
    title: 'Escaneo intraoral',
    description: 'Registros digitales precisos sin moldes incomodos.',
  },
  {
    title: 'Diagnostico digital',
    description: 'Imagenes claras para explicar tu caso y planear mejor.',
  },
  {
    title: 'Magnificacion clinica',
    description: 'Mayor detalle en procedimientos restaurativos y de precision.',
  },
]

function Tecnologia() {
  return (
    // Seccion enlazada desde la Navbar con id="tecnologia".
    <section
      id="tecnologia"
      className="technology-section relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Grid responsive: texto a la izquierda y visual tecnologico a la derecha. */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        {/* Copy principal y lista de beneficios tecnologicos. */}
        <div
          className="technology-copy"
          data-aos="fade-right"
        >
          <span className="technology-kicker inline-flex rounded-full border border-teal-100 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-teal-800 shadow-sm backdrop-blur-xl">
            Tecnologia
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Precision digital para tratamientos mas claros.
          </h2>

          <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg">
            Usamos herramientas digitales para evaluar mejor, planear con mas detalle y mostrarte lo que sucede antes de iniciar un tratamiento.
          </p>

          {/* Tarjetas compactas de tecnologias. El delay se usa para entrada escalonada. */}
          <div className="mt-8 grid gap-3">
            {technologies.map((technology, index) => (
              <article
                key={technology.title}
                className="technology-item flex gap-4 rounded-3xl border border-white/80 bg-white/72 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur-2xl"
                data-aos="fade-up"
                data-aos-delay={120 + index * 80}
                style={{ '--delay': `${index * 90}ms` }}
              >
                <span className="technology-dot mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="m7 12 3 3 7-7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.4"
                    />
                  </svg>
                </span>

                <div>
                  <h3 className="text-base font-black text-slate-950">
                    {technology.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
                    {technology.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Marco visual con imagen realista generada y efectos ligeros de escaneo/HUD. */}
        <div
          className="technology-visual-wrap"
          data-aos="fade-left"
          data-aos-delay="180"
        >
          <div className="technology-frame">
            <img
              src={dentalTechnology}
              alt="Consultorio dental moderno con escaner intraoral, pantalla digital y equipo avanzado"
              className="technology-image h-full w-full object-cover"
            />
            {/* Barrido luminoso que simula analisis digital. */}
            <div className="technology-scan" aria-hidden="true" />

            {/* Etiquetas flotantes decorativas sobre la imagen. */}
            <div className="technology-hud technology-hud-main" aria-hidden="true">
              <span>Escaneo 3D</span>
              <strong>Activo</strong>
            </div>
            <div className="technology-hud technology-hud-side" aria-hidden="true">
              <span>Plan digital</span>
              <strong>Preciso</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tecnologia
