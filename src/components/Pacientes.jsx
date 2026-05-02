import { useMemo, useState } from 'react'

// Resenas mostradas en el carrusel. Se mantienen locales para editar facil.
const reviews = [
  {
    name: 'Mariana Lopez',
    treatment: 'Limpieza dental',
    comment:
      'Me explicaron todo con calma y la limpieza fue muy cuidadosa. Senti el consultorio moderno, limpio y con un trato muy humano.',
  },
  {
    name: 'Carlos Ramirez',
    treatment: 'Implante dental',
    comment:
      'Llegue con muchas dudas y sali con un plan claro. El seguimiento fue ordenado y cada paso estuvo bien explicado.',
  },
  {
    name: 'Ana Torres',
    treatment: 'Blanqueamiento',
    comment:
      'Buscaba un cambio natural, no exagerado. Me gusto que revisaran mi sensibilidad antes y despues del tratamiento.',
  },
  {
    name: 'Jorge Medina',
    treatment: 'Ortodoncia',
    comment:
      'El proceso se sintio muy profesional. Las revisiones fueron puntuales y siempre sabia que ajuste seguia.',
  },
  {
    name: 'Sofia Herrera',
    treatment: 'Resinas esteticas',
    comment:
      'El resultado se ve muy natural. Casi no se nota donde estaba la fractura y la mordida quedo comoda.',
  },
]

// Componente pequeno para renderizar las 5 estrellas de cada resena.
function Stars() {
  return (
    <div className="flex gap-1" aria-label="Calificacion de cinco estrellas">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className="patient-star h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="m12 3.5 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L12 3.5Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  )
}

function Pacientes() {
  // Indice de la resena activa al centro del carrusel.
  const [current, setCurrent] = useState(0)

  const total = reviews.length

  // Calcula que tarjeta va al centro, izquierda, derecha u oculta.
  // useMemo evita recalcular posiciones si el indice actual no cambio.
  const visibleReviews = useMemo(
    () =>
      reviews.map((review, index) => {
        const diff = (index - current + total) % total
        // current = centro, next = derecha, prev = izquierda, hidden = fuera de escena.
        const state = diff === 0 ? 'current' : diff === 1 ? 'next' : diff === total - 1 ? 'prev' : 'hidden'

        return { ...review, index, state }
      }),
    [current, total],
  )

  // Navegacion circular hacia la tarjeta anterior.
  const goToPrevious = () => {
    setCurrent((value) => (value - 1 + total) % total)
  }

  // Navegacion circular hacia la tarjeta siguiente.
  const goToNext = () => {
    setCurrent((value) => (value + 1) % total)
  }

  return (
    // Seccion de pacientes enlazada desde la Navbar.
    <section
      id="pacientes"
      className="patients-section relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado centrado de la seccion. */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="patients-kicker inline-flex rounded-full border border-teal-100 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-teal-800 shadow-sm backdrop-blur-xl">
            Pacientes
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Historias reales de cuidado y confianza.
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-slate-600 sm:text-lg">
            Resenas breves de pacientes que valoran una atencion clara, moderna y tranquila.
          </p>
        </div>

        {/* Contenedor del slider con perspectiva 3D desde CSS. */}
        <div className="patients-carousel-wrap mt-10">
          {/* Flecha izquierda del carrusel. */}
          <button
            type="button"
            className="patient-control patient-control-prev"
            aria-label="Ver resena anterior"
            onClick={goToPrevious}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 6 9 12l6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
              />
            </svg>
          </button>

          {/* Slides posicionados por clases: current, prev, next o hidden. */}
          <div className="patients-carousel" aria-live="polite">
            {visibleReviews.map((review) => (
              // Click en un lateral lo convierte en el slide central.
              <article
                key={review.name}
                className={`patient-slide patient-slide-${review.state}`}
                aria-hidden={review.state === 'hidden'}
                tabIndex={review.state === 'hidden' ? -1 : 0}
                onClick={() => setCurrent(review.index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setCurrent(review.index)
                  }
                }}
              >
                <div className="patient-card">
                  {/* Glow decorativo que da profundidad al slide activo. */}
                  <div className="patient-card-glow" aria-hidden="true" />

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <Stars />
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-teal-800">
                      {review.treatment}
                    </span>
                  </div>

                  <p className="relative z-10 mt-6 text-xl font-black leading-8 text-slate-950 sm:text-2xl sm:leading-9">
                    "{review.comment}"
                  </p>

                  <div className="relative z-10 mt-7 flex items-center gap-4">
                    {/* Avatar textual generado con iniciales del nombre. */}
                    <div className="patient-avatar grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-[0_14px_30px_rgba(15,23,42,0.24)]">
                      {review.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')}
                    </div>
                    <div>
                      <h3 className="font-black text-slate-950">{review.name}</h3>
                      <p className="text-sm font-semibold text-slate-500">Paciente NovaDent</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Flecha derecha del carrusel. */}
          <button
            type="button"
            className="patient-control patient-control-next"
            aria-label="Ver resena siguiente"
            onClick={goToNext}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m9 6 6 6-6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
              />
            </svg>
          </button>
        </div>

        {/* Dots inferiores para saltar directo a una resena concreta. */}
        <div className="mt-7 flex justify-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              className={`patient-dot ${current === index ? 'patient-dot-active' : ''}`}
              aria-label={`Ver resena ${index + 1}`}
              aria-current={current === index}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pacientes
