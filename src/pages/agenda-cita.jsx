import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

// Estado inicial del formulario. Cada propiedad corresponde a un campo solicitado.
const initialForm = {
  nombre: "",
  correo: "",
  telefono: "",
  fechaNacimiento: "",
  mensaje: "",
};

// Helper para limitar el input date a la fecha actual.
const today = new Date().toISOString().split("T")[0];

// Reglas de validacion centralizadas para mantener el JSX limpio.
function validateForm(values) {
  const errors = {};

  if (!values.nombre.trim()) {
    errors.nombre = "Escribe tu nombre completo.";
  } else if (values.nombre.trim().length < 3) {
    errors.nombre = "El nombre debe tener al menos 3 caracteres.";
  }

  if (!values.correo.trim()) {
    errors.correo = "Escribe tu correo electronico.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.correo)) {
    errors.correo = "Escribe un correo valido.";
  }

  const phoneDigits = values.telefono.replace(/\D/g, "");
  if (!phoneDigits) {
    errors.telefono = "Escribe tu telefono celular.";
  } else if (phoneDigits.length < 10) {
    errors.telefono = "El telefono debe tener al menos 10 digitos.";
  }

  if (!values.fechaNacimiento) {
    errors.fechaNacimiento = "Selecciona tu fecha de nacimiento.";
  } else if (values.fechaNacimiento > today) {
    errors.fechaNacimiento = "La fecha no puede estar en el futuro.";
  }

  if (!values.mensaje.trim()) {
    errors.mensaje = "Cuentanos brevemente que necesitas.";
  } else if (values.mensaje.trim().length < 12) {
    errors.mensaje = "El mensaje debe tener al menos 12 caracteres.";
  }

  return errors;
}

function AgendaCita() {
  // Datos escritos por el usuario.
  const [form, setForm] = useState(initialForm);

  // Campos tocados: permite mostrar errores solo despues de interactuar.
  const [touched, setTouched] = useState({});

  // Estado de envio simulado para feedback visual.
  const [status, setStatus] = useState("idle");

  const errors = useMemo(() => validateForm(form), [form]);
  const isValid = Object.keys(errors).length === 0;

  // Calcula progreso del formulario para la barra visual superior.
  const completedFields = Object.values(form).filter((value) =>
    value.trim(),
  ).length;
  const progress = Math.round(
    (completedFields / Object.keys(initialForm).length) * 100,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Actualiza cada campo y reinicia el estado de exito si el usuario vuelve a editar.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus("idle");
  };

  const handleBlur = (event) => {
    setTouched((current) => ({ ...current, [event.target.name]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({
      nombre: true,
      correo: true,
      telefono: true,
      fechaNacimiento: true,
      mensaje: true,
    });

    if (!isValid) return;

    setStatus("sent");
  };

  return (
    // Pagina de agenda. El padding superior deja respirar la Navbar fija.
    <section className="appointment-page relative isolate min-h-screen overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
        {/* Columna izquierda: contexto, progreso y resumen compacto. */}
        <aside
          className="appointment-aside"
          data-aos="fade-right"
        >
          <Link
            to="/"
            className="appointment-back inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/72 px-4 py-2 text-sm font-black text-slate-800 shadow-sm backdrop-blur-xl transition duration-300 hover:border-teal-200 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M19 12H5m6-6-6 6 6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
              />
            </svg>
            Volver
          </Link>

          <span className="appointment-kicker mt-8 inline-flex rounded-full border border-teal-100 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-teal-800 shadow-sm backdrop-blur-xl">
            Agenda tu cita
          </span>

          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Cuéntanos qué necesitas y preparamos tu valoración.
          </h1>

          <p className="mt-4 text-base font-medium leading-7 text-slate-600 sm:text-lg">
            Completa tus datos y un mensaje breve. Esta pantalla deja la
            solicitud lista para conectarse despues con correo, CRM o WhatsApp.
          </p>

          {/* Tarjeta de progreso del formulario. */}
          <div
            className="appointment-progress-card mt-8"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-black text-slate-950">
                Progreso
              </span>
              <span className="text-sm font-black text-teal-700">
                {progress}%
              </span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
              <span
                className="appointment-progress-bar block h-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Resumen vivo para que el usuario vea lo que está enviando. */}
          <div
            className="appointment-summary mt-4"
            data-aos="fade-up"
            data-aos-delay="190"
          >
            <span className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
              Resumen
            </span>
            <dl className="mt-4 grid gap-3">
              <div>
                <dt>Paciente</dt>
                <dd>{form.nombre || "Pendiente"}</dd>
              </div>
              <div>
                <dt>Contacto</dt>
                <dd>{form.telefono || form.correo || "Pendiente"}</dd>
              </div>
              <div>
                <dt>Mensaje</dt>
                <dd>
                  {form.mensaje
                    ? `${form.mensaje.slice(0, 42)}${form.mensaje.length > 42 ? "..." : ""}`
                    : "Pendiente"}
                </dd>
              </div>
            </dl>
          </div>
        </aside>

        {/* Formulario principal de agenda. */}
        <form
          className="appointment-form"
          noValidate
          onSubmit={handleSubmit}
          data-aos="fade-left"
          data-aos-delay="160"
        >
          <div className="appointment-form-glow" aria-hidden="true" />

          <div className="relative z-10 grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                value={form.nombre}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Ej. Mariana Lopez"
              />
              {touched.nombre && errors.nombre && (
                <p className="appointment-error">{errors.nombre}</p>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="correo">Correo electronico</label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  autoComplete="email"
                  value={form.correo}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                />
                {touched.correo && errors.correo && (
                  <p className="appointment-error">{errors.correo}</p>
                )}
              </div>

              <div className="grid gap-2">
                <label htmlFor="telefono">Telefono celular</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  value={form.telefono}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="662 123 4567"
                />
                {touched.telefono && errors.telefono && (
                  <p className="appointment-error">{errors.telefono}</p>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
              <input
                id="fechaNacimiento"
                name="fechaNacimiento"
                type="date"
                max={today}
                value={form.fechaNacimiento}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.fechaNacimiento && errors.fechaNacimiento && (
                <p className="appointment-error">{errors.fechaNacimiento}</p>
              )}
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between gap-4">
                <label htmlFor="mensaje">Mensaje</label>
                <span className="text-xs font-black text-slate-400">
                  {form.mensaje.length}/320
                </span>
              </div>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="6"
                maxLength="320"
                value={form.mensaje}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Cuéntanos si buscas limpieza, dolor dental, revisión, estética, ortodoncia u otro motivo."
              />
              {touched.mensaje && errors.mensaje && (
                <p className="appointment-error">{errors.mensaje}</p>
              )}
            </div>

            {status === "sent" && (
              <div className="appointment-success" role="status">
                Solicitud lista. El siguiente paso sería conectar este
                formulario a tu backend, correo o WhatsApp.
              </div>
            )}

            <button
              type="submit"
              className="appointment-submit inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-black text-slate-950"
            >
              Enviar solicitud
              <svg
                className="h-5 w-5"
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
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AgendaCita;
