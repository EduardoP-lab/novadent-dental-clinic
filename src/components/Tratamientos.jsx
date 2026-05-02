import { useEffect, useState } from 'react'

const tratamientos = [
  {
    title: 'Limpieza dental',
    description: 'Remueve placa, sarro y manchas superficiales para mantener encias sanas.',
    detail:
      'La limpieza profesional ayuda a controlar placa bacteriana, sarro y manchas externas que el cepillado diario no siempre logra retirar. Es una base importante para prevenir inflamacion de encias, mal aliento y problemas periodontales.',
    includes: ['Revision inicial', 'Retiro de sarro', 'Pulido dental'],
  },
  {
    title: 'Blanqueamiento',
    description: 'Aclara el tono dental con tecnicas controladas y enfoque conservador.',
    detail:
      'El blanqueamiento dental busca mejorar el tono de los dientes de forma controlada, cuidando sensibilidad y estado del esmalte. Antes de realizarlo se valora si hay caries, restauraciones visibles o inflamacion en encias.',
    includes: ['Valoracion del esmalte', 'Control de sensibilidad', 'Indicaciones de cuidado'],
  },
  {
    title: 'Resinas esteticas',
    description: 'Restaura caries o fracturas pequenas con color similar al diente.',
    detail:
      'Las resinas esteticas permiten reparar caries, bordes fracturados o pequenos desgastes con materiales del color del diente. Son utiles cuando se busca conservar estructura dental y mantener una apariencia natural.',
    includes: ['Seleccion de tono', 'Restauracion adhesiva', 'Pulido final'],
  },
  {
    title: 'Ortodoncia',
    description: 'Corrige posicion dental y mordida con planes progresivos y revisiones.',
    detail:
      'La ortodoncia corrige la posicion de los dientes y la mordida mediante fuerzas controladas. El plan se define despues de una evaluacion clinica y ayuda a mejorar funcion, higiene y armonia de la sonrisa.',
    includes: ['Diagnostico de mordida', 'Plan de movimiento', 'Controles periodicos'],
  },
  {
    title: 'Alineadores',
    description: 'Alternativa removible y discreta para movimientos dentales planificados.',
    detail:
      'Los alineadores transparentes son una opcion removible para ciertos casos de ortodoncia. Funcionan con una secuencia de guardas personalizadas y requieren constancia de uso para lograr los movimientos planeados.',
    includes: ['Escaneo o registros', 'Secuencia de alineadores', 'Seguimiento clinico'],
  },
  {
    title: 'Implantes dentales',
    description: 'Reemplaza piezas perdidas con una base fija y restauracion personalizada.',
    detail:
      'Los implantes dentales reemplazan la raiz de una pieza perdida y sirven como soporte para una corona o protesis. Antes del tratamiento se revisa salud general, encia, hueso disponible y necesidades de rehabilitacion.',
    includes: ['Evaluacion del sitio', 'Plan quirurgico', 'Restauracion personalizada'],
  },
  {
    title: 'Endodoncia',
    description: 'Trata el nervio dental para conservar piezas con infeccion o dolor profundo.',
    detail:
      'La endodoncia trata el interior del diente cuando existe infeccion, dolor persistente o dano profundo. Su objetivo es conservar la pieza, limpiar los conductos y sellarlos correctamente para rehabilitar despues.',
    includes: ['Diagnostico del dolor', 'Limpieza de conductos', 'Sellado interno'],
  },
  {
    title: 'Periodoncia',
    description: 'Cuida encias y soporte dental cuando hay inflamacion o perdida de hueso.',
    detail:
      'La periodoncia atiende problemas de encia y soporte dental, como sangrado, inflamacion, movilidad o bolsas periodontales. El enfoque es controlar bacterias, estabilizar tejidos y mejorar habitos de higiene.',
    includes: ['Evaluacion de encias', 'Limpieza profunda', 'Plan de mantenimiento'],
  },
  {
    title: 'Coronas dentales',
    description: 'Protege dientes debilitados y recupera forma, funcion y estetica.',
    detail:
      'Las coronas cubren y protegen dientes debilitados, fracturados o con restauraciones extensas. Tambien se usan sobre implantes. El diseno busca recuperar funcion de mordida y una apariencia compatible con tu sonrisa.',
    includes: ['Preparacion dental', 'Registro de mordida', 'Ajuste de corona'],
  },
  {
    title: 'Odontopediatria',
    description: 'Atencion preventiva y amable para ninos, con enfoque en buenos habitos.',
    detail:
      'La odontopediatria cuida la salud bucal de ninos con un trato tranquilo y preventivo. Incluye revision, educacion de higiene, deteccion temprana de caries y orientacion para que las visitas sean positivas.',
    includes: ['Revision infantil', 'Prevencion de caries', 'Guia para padres'],
  },
]

function Tratamientos() {
  const [showAll, setShowAll] = useState(false)
  const [selectedTreatment, setSelectedTreatment] = useState(null)

  const closeModal = () => setSelectedTreatment(null)

  useEffect(() => {
    if (!selectedTreatment) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedTreatment(null)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.classList.add('scrollBlock')

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.classList.remove('scrollBlock')
    }
  }, [selectedTreatment])

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
                className={`treatment-card group min-h-[12rem] cursor-pointer flex-col justify-between rounded-3xl border border-white/80 bg-white/72 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_24px_70px_rgba(20,184,166,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 sm:flex ${
                  isMobileHidden ? 'hidden' : 'flex treatment-card-reveal'
                }`}
                role="button"
                tabIndex={isMobileHidden ? -1 : 0}
                style={{ '--delay': `${index * 45}ms` }}
                onClick={() => setSelectedTreatment(tratamiento)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setSelectedTreatment(tratamiento)
                  }
                }}
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

      {selectedTreatment && (
        <div
          className="treatment-modal-backdrop fixed inset-0 z-[80] grid place-items-center px-4 py-6"
          role="presentation"
          onClick={closeModal}
        >
          <div
            className="treatment-modal relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/75 bg-white/86 p-5 shadow-[0_30px_110px_rgba(15,23,42,0.28)] backdrop-blur-2xl sm:p-7"
            role="dialog"
            aria-modal="true"
            aria-labelledby="treatment-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="treatment-modal-glow" aria-hidden="true" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-teal-800">
                  Tratamiento
                </span>
                <h3
                  id="treatment-modal-title"
                  className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl"
                >
                  {selectedTreatment.title}
                </h3>
              </div>

              <button
                type="button"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white/75 text-slate-950 shadow-sm transition duration-300 hover:border-teal-200 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                aria-label="Cerrar modal"
                onClick={closeModal}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="m6 6 12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.4"
                  />
                </svg>
              </button>
            </div>

            <p className="relative z-10 mt-5 text-base font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {selectedTreatment.detail}
            </p>

            <div className="relative z-10 mt-6 grid gap-3 sm:grid-cols-3">
              {selectedTreatment.includes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/80 bg-white/72 px-4 py-3 shadow-sm"
                >
                  <span className="text-sm font-black text-slate-950">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="treatment-modal-close inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-black text-slate-950 shadow-[0_18px_40px_rgba(20,184,166,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Tratamientos
