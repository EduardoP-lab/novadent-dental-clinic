import { useState } from 'react'

const tratamientos = [
  {
    title: 'Limpieza dental',
    description: 'Remueve placa, sarro y manchas superficiales para mantener encias sanas.',
  },
  {
    title: 'Blanqueamiento',
    description: 'Aclara el tono dental con tecnicas controladas y enfoque conservador.',
  },
  {
    title: 'Resinas esteticas',
    description: 'Restaura caries o fracturas pequenas con color similar al diente.',
  },
  {
    title: 'Ortodoncia',
    description: 'Corrige posicion dental y mordida con planes progresivos y revisiones.',
  },
  {
    title: 'Alineadores',
    description: 'Alternativa removible y discreta para movimientos dentales planificados.',
  },
  {
    title: 'Implantes dentales',
    description: 'Reemplaza piezas perdidas con una base fija y restauracion personalizada.',
  },
  {
    title: 'Endodoncia',
    description: 'Trata el nervio dental para conservar piezas con infeccion o dolor profundo.',
  },
  {
    title: 'Periodoncia',
    description: 'Cuida encias y soporte dental cuando hay inflamacion o perdida de hueso.',
  },
  {
    title: 'Coronas dentales',
    description: 'Protege dientes debilitados y recupera forma, funcion y estetica.',
  },
  {
    title: 'Odontopediatria',
    description: 'Atencion preventiva y amable para ninos, con enfoque en buenos habitos.',
  },
]

function Tratamientos() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section
      id="tratamientos"
      className="treatments-section relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="treatments-kicker inline-flex rounded-full border border-teal-100 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-teal-800 shadow-sm backdrop-blur-xl">
              Tratamientos
            </span>
            <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Cuidado dental completo, sin vueltas.
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-slate-600 sm:text-lg">
              Opciones claras para prevenir, restaurar y mejorar tu sonrisa con un plan adecuado a cada paciente.
            </p>
          </div>

          <a
            href="#cita"
            className="hidden rounded-full border border-slate-200 bg-white/75 px-6 py-4 text-sm font-black text-slate-900 shadow-sm backdrop-blur-xl transition duration-300 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 sm:inline-flex"
          >
            Agendar valoracion
          </a>
        </div>

        <div
          id="tratamientos-lista"
          className="mt-9 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5"
        >
          {tratamientos.map((tratamiento, index) => {
            const isMobileHidden = index > 2 && !showAll

            return (
              <article
                key={tratamiento.title}
                className={`treatment-card group min-h-[12rem] flex-col justify-between rounded-3xl border border-white/80 bg-white/72 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_24px_70px_rgba(20,184,166,0.14)] sm:flex ${
                  isMobileHidden ? 'hidden' : 'flex treatment-card-reveal'
                }`}
                style={{ '--delay': `${index * 45}ms` }}
              >
                <div>
                  <div className="treatment-icon grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white shadow-[0_14px_30px_rgba(15,23,42,0.22)]">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 3.8c-4.2 0-6.9 2.8-6.9 6.6 0 3.9 2.7 9.8 5 9.8 1.3 0 1-4.4 1.9-4.4s.6 4.4 1.9 4.4c2.3 0 5-5.9 5-9.8 0-3.8-2.7-6.6-6.9-6.6Z"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="1.9"
                      />
                      <path
                        d="M9.1 8.4c1.4-.9 3.8-1.2 5.8 0"
                        stroke="#5EEAD4"
                        strokeLinecap="round"
                        strokeWidth="1.9"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-950">
                    {tratamiento.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                    {tratamiento.description}
                  </p>
                </div>

                <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-teal-700">
                  Ver detalle
                  <span className="h-px w-6 bg-teal-300 transition-all duration-300 group-hover:w-9" />
                </span>
              </article>
            )
          })}
        </div>

        <button
          type="button"
          className="treatments-toggle !mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-black text-slate-950 shadow-[0_18px_40px_rgba(20,184,166,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 sm:hidden"
          aria-controls="tratamientos-lista"
          aria-expanded={showAll}
          onClick={() => setShowAll((current) => !current)}
        >
          {showAll ? 'Ver menos' : 'Ver todos'}
          <svg
            className={`h-5 w-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m6 9 6 6 6-6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Tratamientos