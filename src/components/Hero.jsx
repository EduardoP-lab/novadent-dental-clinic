const treatments = [
  'Limpieza dental',
  'Blanqueamiento',
  'Ortodoncia',
  'Implantes',
]

const careSteps = [
  { label: 'Revision', value: 'Diagnostico claro' },
  { label: 'Plan', value: 'Tratamiento a medida' },
  { label: 'Control', value: 'Seguimiento puntual' },
]

function Hero() {
  return (
    <section
      id="inicio"
      className="hero-section relative isolate min-h-screen overflow-hidden bg-[#f7fbfb] px-4 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36"
    >
      <div className="hero-grid relative z-10 mx-auto lg:grid sm:flex sm:flex-col max-w-7xl items-center gap-7 sm:gap-9 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div className="hero-copy max-w-3xl">
          <div className="hero-kicker inline-flex max-w-full items-center gap-3 rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
            <span className="hero-kicker-dot" aria-hidden="true" />
            <span className="text-xs font-black uppercase tracking-[0.24em] text-teal-800">
              Odontologia moderna en un espacio humano
            </span>
          </div>

          <h1 className="hero-title mt-5 text-4xl font-black leading-[0.98] text-slate-950 sm:mt-7 sm:text-6xl sm:leading-[0.95] lg:text-7xl">
            Sonrisas sanas con tecnologia y cuidado real.
          </h1>

          <p className="hero-text mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:mt-6 sm:text-xl sm:leading-8">
            Atencion dental integral para prevenir, restaurar y mejorar tu sonrisa
            con diagnostico claro, tratamientos precisos y una experiencia tranquila
            desde la primera cita.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row lg:justify-start justify-center">
            <a
              href="#cita"
              className="hero-main-cta group inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-black text-slate-950 shadow-[0_20px_45px_rgba(20,184,166,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              Agendar cita
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.4"
                />
              </svg>
            </a>

            <a
              href="#tratamientos"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 py-4 text-sm font-black text-slate-800 shadow-sm backdrop-blur-xl transition duration-300 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              Ver tratamientos
            </a>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-9 sm:gap-3 xl:grid-cols-4">
            {treatments.map((treatment, index) => (
              <span
                key={treatment}
                className="hero-chip rounded-2xl border border-white/80 bg-white/72 px-3 py-3 text-center text-xs font-black text-slate-700 shadow-[0_14px_35px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:px-4 sm:text-sm"
                style={{ '--delay': `${index * 90}ms` }}
              >
                {treatment}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-stage relative mx-auto grid w-full max-w-[36rem] place-items-center lg:max-w-none">
          <div className="scan-ring" aria-hidden="true" />
          <div className="dental-visual" aria-hidden="true">
            <div className="tooth-aura" />
            <svg className="hero-tooth" viewBox="0 0 220 240" fill="none">
              <path
                className="tooth-shadow"
                d="M111 29c-51 0-82 33-82 78 0 50 31 105 57 105 17 0 13-55 25-55s8 55 25 55c26 0 57-55 57-105 0-45-31-78-82-78Z"
              />
              <path
                className="tooth-body"
                d="M111 23c-51 0-82 33-82 78 0 50 31 105 57 105 17 0 13-55 25-55s8 55 25 55c26 0 57-55 57-105 0-45-31-78-82-78Z"
              />
              <path
                className="tooth-highlight"
                d="M72 85c10-23 38-35 73-24"
              />
              <path
                className="tooth-line"
                d="M79 115c17 13 47 17 72 0"
              />
            </svg>

            <div className="pulse-chip pulse-chip-oral">
              <span>Salud bucal</span>
            </div>
            <div className="pulse-chip pulse-chip-aesthetic">
              <span>Estetica dental</span>
            </div>
            <div className="pulse-chip pulse-chip-plan">
              <span>Plan seguro</span>
            </div>
          </div>

          <div className="care-panel">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-700">
                  Ruta de atencion
                </p>
                <h2 className="mt-2 text-xl font-black text-slate-950">
                  Consulta clara de principio a fin
                </h2>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="m7 12 3 3 7-7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.4"
                  />
                </svg>
              </span>
            </div>

            <div className="mt-5 grid gap-3">
              {careSteps.map((step) => (
                <div
                  key={step.label}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white/70 px-4 py-3"
                >
                  <span className="text-sm font-black text-slate-950">{step.label}</span>
                  <span className="text-right text-sm font-semibold text-slate-500">
                    {step.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
