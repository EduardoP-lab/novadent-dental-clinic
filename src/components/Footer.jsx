// Enlaces internos del footer. Mantienen navegacion rapida hacia secciones clave.
const footerLinks = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Pacientes', href: '#pacientes' },
  { label: 'Ubicacion', href: '#ubicacion' },
]

// Redes sociales de ejemplo. Cambia los href por los perfiles reales de la clinica.
const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7.5 2.8h9A4.7 4.7 0 0 1 21.2 7.5v9a4.7 4.7 0 0 1-4.7 4.7h-9a4.7 4.7 0 0 1-4.7-4.7v-9A4.7 4.7 0 0 1 7.5 2.8Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M17.3 6.7h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.6" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14 8.4V6.9c0-.9.7-1.6 1.6-1.6H18V2.6h-2.8A4.2 4.2 0 0 0 11 6.8v1.6H8.4v3.1H11v9.9h3v-9.9h3l.5-3.1H14Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M15.5 3c.4 2.7 1.9 4.3 4.5 4.6v3.2a8.2 8.2 0 0 1-4.5-1.4v5.8a6 6 0 1 1-6-6c.4 0 .7 0 1 .1v3.4a2.7 2.7 0 1 0 1.6 2.5V3h3.4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/526621234567',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.1 20 5.3 16.5A8.1 8.1 0 1 1 8.6 20l-4.5 0Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9.2 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.6 1 1.4 1.8 2.5 2.4l.5-.5c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.5.3-1.1.5-1.7.5-2.9 0-7.1-4-7.1-7 0-.6.2-1.2.5-1.7Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    // Footer final de la landing. Cierra la experiencia con CTA, enlaces y redes.
    <footer className="footer-section relative isolate overflow-hidden px-4 pt-16 pb-8 sm:px-6 sm:pt-20 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Bloque principal tipo glass con marca, CTA y navegacion. */}
        <div className="footer-shell">
          <div className="footer-brand">
            {/* Logo reutilizado en version footer. */}
            <a href="#inicio" className="inline-flex items-center gap-3" aria-label="Volver al inicio">
              <span className="footer-brand-mark grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950">
                <svg className="h-7 w-7" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path
                    d="M24 8C14.9 8 9 13.8 9 22.2c0 7.9 4.8 17.8 9.2 17.8 2.4 0 2.1-8.4 5.8-8.4s3.4 8.4 5.8 8.4C34.2 40 39 30.1 39 22.2 39 13.8 33.1 8 24 8Z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 17.5c2.6-1.8 7.3-2.5 12 0"
                    stroke="#14B8A6"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>
              </span>
              <span>
                <span className="block text-xl font-black text-white">NovaDent</span>
                <span className="mt-1 block text-xs font-black uppercase tracking-[0.22em] text-teal-200">
                  Clinica dental
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-xl text-base font-medium leading-7 text-slate-300">
              Odontologia moderna, clara y humana para cuidar tu sonrisa con tecnologia, precision y calma.
            </p>
          </div>

          {/* CTA final para convertir al usuario despues de recorrer la pagina. */}
          <div className="footer-cta-card">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-teal-200">
              Listo para empezar
            </span>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
              Agenda tu valoracion y recibe un plan claro.
            </h2>
            <a
              href="#cita"
              className="footer-main-cta mt-6 inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-black text-slate-950"
            >
              Agendar cita
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

          {/* Enlaces internos para navegar rapidamente sin volver al header. */}
          <nav className="footer-links" aria-label="Navegacion del footer">
            <span className="footer-column-title">Explorar</span>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Enlaces externos de redes sociales con iconos SVG. */}
          <div className="footer-socials">
            <span className="footer-column-title">Redes</span>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior con datos legales y microcopy. */}
        <div className="footer-bottom">
          <p>© {currentYear} NovaDent. Todos los derechos reservados.</p>
          <p>Diseno moderno para una experiencia dental mas clara.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
