// Datos de ubicacion de la clinica. Se concentran aqui para cambiarlos facil.
const clinicLocation = {
  name: 'NovaDent Hermosillo',
  address: 'Zona centro, Hermosillo, Sonora',
  schedule: 'Lunes a viernes, 9:00 AM - 7:00 PM',
  phone: '+52 662 123 4567',
  coordinates: {
    lat: 29.072967,
    lng: -110.955919,
  },
}

// Mapa embebido de OpenStreetMap: no requiere API key y funciona dentro del iframe.
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=-110.9659%2C29.0669%2C-110.9459%2C29.0789&layer=mapnik&marker=${clinicLocation.coordinates.lat}%2C${clinicLocation.coordinates.lng}`

// Link de Google Maps para abrir indicaciones de llegada en otra pestana.
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${clinicLocation.coordinates.lat},${clinicLocation.coordinates.lng}`

function Ubicacion() {
  return (
    // Seccion de ubicacion enlazada desde la Navbar.
    <section
      id="ubicacion"
      className="location-section relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Grid principal: informacion a la izquierda y mapa a la derecha en desktop. */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        {/* Columna de informacion de contacto y llegada. */}
        <div
          className="location-info"
          data-aos="fade-right"
        >
          <span className="location-kicker inline-flex rounded-full border border-teal-100 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-teal-800 shadow-sm backdrop-blur-xl">
            Ubicacion
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Encuentranos facil y llega sin complicarte.
          </h2>

          <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-600 sm:text-lg">
            Estamos en una zona accesible de Hermosillo, con una experiencia pensada para que tu visita sea clara desde que agendas hasta que llegas.
          </p>

          {/* Tarjetas informativas: direccion, horario y contacto. */}
          <div className="mt-8 grid gap-3">
            <div
              className="location-detail-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="location-detail-icon">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-teal-700">
                  Direccion
                </h3>
                <p className="mt-1 font-bold text-slate-950">{clinicLocation.address}</p>
              </div>
            </div>

            <div
              className="location-detail-card"
              data-aos="fade-up"
              data-aos-delay="170"
            >
              <span className="location-detail-icon">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 6v6l4 2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-teal-700">
                  Horario
                </h3>
                <p className="mt-1 font-bold text-slate-950">{clinicLocation.schedule}</p>
              </div>
            </div>

            <div
              className="location-detail-card"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <span className="location-detail-icon">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.1"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-teal-700">
                  Contacto
                </h3>
                <p className="mt-1 font-bold text-slate-950">{clinicLocation.phone}</p>
              </div>
            </div>
          </div>

          {/* CTA externo para abrir navegacion en Google Maps. */}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="location-cta mt-7 inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-black text-slate-950 shadow-[0_18px_40px_rgba(20,184,166,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            Como llegar
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
              />
            </svg>
          </a>
        </div>

        {/* Columna de mapa. El iframe se estira por CSS para llenar todo el marco. */}
        <div
          className="location-map-shell"
          data-aos="fade-left"
          data-aos-delay="160"
        >
          <div className="location-map-frame">
            <iframe
              title={`Mapa de ${clinicLocation.name}`}
              src={mapSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Pin visual decorativo sobre el centro del mapa. */}
            <div className="location-map-pin" aria-hidden="true">
              <span />
            </div>
            {/* Tarjeta flotante que identifica la clinica sobre el mapa. */}
            <div className="location-floating-card">
              <span>NovaDent</span>
              <strong>Hermosillo</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ubicacion
