# 02 — Benchmark de mercado

Análisis de cómo resuelven estos problemas las grandes cadenas y el software
especializado del sector, para no reinventar la rueda y detectar el diferencial.

---

## 2.1 Go Fit y su app "My GO fit"

Go Fit es una de las principales cadenas de centros deportivos en España, con un
modelo de gran instalación (piscina, sala, actividades dirigidas, wellness). Su
app "My GO fit" es un buen referente de UX para el socio. Funcionalidades
observadas:

- **Reserva de actividades dirigidas** con antelación (hasta ~49 h), con selección
  de puesto concreto (p. ej. número de bici en ciclo o sección de sala).
- **Gestión de reservas**: elegir puesto, consultar **lista de espera**, cancelar.
  Política de cancelación: obligación de cancelar con **≥45 min** de antelación
  para no penalizar y liberar plaza a la lista de espera.
- **Entrenamiento**: clases virtuales bajo demanda, sesiones en directo,
  audioguías para máquinas de cardio (cinta, elíptica, escalera, bici) y sección
  de meditación/mindfulness.
- **Programas personalizados** por objetivo y nivel; agenda con entrenadores y
  nutricionistas ("My Time Line").
- **Club de ventajas**: descuentos con terceras marcas (fidelización).
- **Comunicación en tiempo real**: comunicados, eventos y anuncios del club vía
  notificaciones push.

**Lecciones para nuestro proyecto:**
- La reserva con **selección de puesto** y **lista de espera** es un estándar
  esperado, no un extra.
- La **política de cancelación con penalización** (no-show) es clave para que el
  cupo funcione.
- La app es también un **canal de contenido** (clases virtuales) y de
  **comunicación**, no solo de reservas.

Fuentes:
- [My GO fit — funcionalidades (GO fit)](https://go-fit.es/noticias/novedades/descubre-todo-lo-que-te-ofrece-la-app-my-go-fit/)
- [FAQ GO fit](https://go-fit.es/faq/)
- [Reserva de actividades (GO fit)](https://go-fit.es/app-my-go-fit/attachment/reserva-actividades/)
- [App GO fit en App Store](https://apps.apple.com/es/app/go-fit/id6478708023)

---

## 2.2 Otras cadenas y modelos de negocio

- **Basic-Fit**: la mayor cadena de Europa, modelo *low-cost* corporativo (sin
  franquicias), ~200 centros en España, clubes **24 h**, apuesta por la
  eficiencia y el autoservicio digital. Tres niveles de cuota (~24,99 € a
  ~34,99 € cada 4 semanas). Ingresos casi 100% por cuotas + algo de clases online.
- **VivaGym / Synergym / Fitness Park**: modelo *mid/low-cost*, decenas/cientos de
  clubes; usan campañas de **socio fundador** (tarifa reducida antes de abrir) para
  acelerar caja.
- **Metropolitan / GO fit / Holmes Place**: modelo *premium*, gran instalación con
  piscina, wellness y servicios de salud; cuota más alta, mayor peso de servicios
  (natación, fisioterapia, nutrición).

**Lecciones:**
- Definir claramente el **posicionamiento** del centro (low-cost vs. premium
  familiar con piscina) porque condiciona qué funciones de la app son
  prioritarias.
- Modelos de **cuota por niveles** y **campañas promocionales** deben poder
  configurarse.
- Con piscina y escuela de natación → perfil **familiar/premium**: el seguimiento
  pedagógico y la experiencia de las familias son un diferencial real.

Fuentes:
- [Basic-Fit: pilares de crecimiento (2Playbook)](https://www.2playbook.com/fitness/clubes-24-horas-mas-eficiencia-pilares-crecimiento-negocio-basic-fit_18311_102.html)
- [Batalla de gimnasios en grandes ciudades (2Playbook)](https://www.2playbook.com/fitness/juego-clusters-en-fitness-es-batalla-gimnasios-en-grandes-ciudades_15221_102.html)
- [El sector del fitness en España (Statista)](https://es.statista.com/estudio/38698/el-sector-del-fitness-en-espana-dossier-de-statista)

---

## 2.3 Software de gestión del sector (competencia / posibles integraciones)

| Software | Enfoque | Funcionalidades destacadas |
|----------|---------|----------------------------|
| **Trainingym** | Gestión + fidelización + entrenamiento | App de socio, rutinas automatizadas por objetivo, +4.000 vídeos HD de ejercicios, clases virtuales, coach virtual de onboarding, seguimiento de cargas/reps/evolución, control de aforo con tablets. |
| **Provis (ProviSport)** | Gestión integral | Control de accesos, reserva de clases, virtual gym, control de aforo. +1.400 centros. |
| **Sportrick** | Piscinas y centros | Gestión de escuela de natación: niveles técnicos, evaluaciones, traslados de alumnos, operaciones del instructor desde la propia piscina; control de accesos. |
| **eAgora** | Polideportivos/municipal | Reservas, inscripciones, mantenimiento, estadísticas en tiempo real; gestor de reclamaciones y sugerencias; avisos de incidencias por parte del usuario. |
| **GPASport / GestiGym / Zcenter** | Gestión deportiva | Reservas de instalaciones, gestión de socios, mantenimiento de instalaciones. |
| **mybuilding24 / GC GMAO / Fracttal** | GMAO (mantenimiento) | Mantenimiento preventivo y correctivo, incidencias, órdenes de trabajo, repuestos, documentación técnica. |

**Lecciones:**
- Todo lo que pedimos existe **por separado** en el mercado; el valor está en
  **integrarlo en una sola experiencia** coherente y a medida del centro.
- Conviene decidir **construir vs. integrar**: p. ej. usar un GMAO existente para
  mantenimiento o una pasarela de pago externa en lugar de desarrollarlo.

Fuentes:
- [Trainingym — entrenamientos](https://trainingym.com/entrenamientos) · [Rutina personalizada (blog)](https://blog.trainingym.com/rutina-ejercicios-personalizada)
- [ProviSport](https://provis.es/)
- [Sportrick — software para piscinas](https://www.sportrick.com/es/tipos-de-negocio/software-para-piscinas/)
- [eAgora — software polideportivo](https://www.eagora.app/software-gestion-polideportivo/)
- [mybuilding24 — mantenimiento clubes](https://mybuilding24.com/es/soluciones/software-de-mantenimiento-para-clubes-e-instalaciones-deportivas/)
- [Comparativa softwares (SoftwareDoit)](https://www.softwaredoit.es/software-centros-deportivos/index.html)

---

## 2.4 Escuela de natación — apps especializadas

Referentes de cómo se hace el **seguimiento pedagógico** (clave para el requisito
"notas sobre evolución en los cursos de natación"):

- **Sportrick**: niveles técnicos, evaluaciones, traslados de alumnos, seguimiento
  del progreso; el instructor opera desde la piscina (sustituciones, asignación de
  niveles).
- **Inat (EMV Proyectos)**: cursos por nivel/edad/fechas/grupo, control de
  asistencia, evaluación del progreso desde app móvil del técnico.
- **Nadus**: registro de avances en tiempo real con **notas, vídeos e imágenes**,
  historial completo por alumno, **rúbricas estandarizadas** por objetivos y
  **validación de cambio de nivel** con recomendaciones automáticas.
- **Smart Swimmer**: estadísticas, monitorización de rendimiento y avances de nivel.

**Lecciones (modelo de datos de natación a adoptar):**
- **Niveles** (p. ej. iniciación → perfeccionamiento) con **objetivos/competencias**
  evaluables mediante **rúbrica**.
- **Evaluaciones periódicas** por el monitor, con adjuntos (foto/vídeo del gesto
  técnico) — cuidado con RGPD de imagen de menores (ver doc 05).
- **Boletín / informe de evolución** visible para la familia.
- **Control de asistencia** por sesión.
- **Recomendación de cambio de nivel** y gestión de listas de espera para el
  siguiente curso.

Fuentes:
- [Sportrick — piscinas](https://www.sportrick.com/es/tipos-de-negocio/software-para-piscinas/)
- [Inat (EMV Proyectos)](https://www.proyectosemv.com/inat)
- [Nadus — gestión de cursillos de natación](https://nadus.app/)
- [Smart Swimmer](https://www.smart-swimmer.com/)

---

## 2.5 Control de accesos y aforo

- **Tecnologías**: código **QR** (desde el móvil del socio), **RFID** (tarjeta/
  pulsera — dominante, >70% de gimnasios españoles con control de accesos; la
  pulsera de silicona RFID es ideal en zona húmeda/piscina), y **biometría**
  (facial/huella) sin contacto.
- **Aforo**: alertas al aproximarse al límite, estadísticas de horas pico, análisis
  predictivo para planificar personal.
- **Legal**: la biometría exige **Evaluación de Impacto (EIPD)** obligatoria y, a
  gran escala, **Delegado de Protección de Datos (DPO)** (ver doc 05).

**Lección:** para el MVP, el **QR desde la app** integrado con reservas y cuota al
día es lo más barato y suficiente; RFID/biometría son fases posteriores y deben
evaluarse legalmente.

Fuentes:
- [FitNova — control de acceso gimnasios](https://www.fitnova.eu/control-acceso-gimnasios) · [Normativa gimnasios España 2026](https://www.fitnova.eu/blog/normativa-gimnasios-espana)
- [Sportrick — control de accesos](https://www.sportrick.com/es/funcionalidades/control-de-accesos-piscinas-gimnasios/)
- [RFID vs QR (GestorGym)](https://gestorgym.com/blog/rfid-vs-qr-gimnasios.html)

---

## 2.6 Síntesis del benchmark

| Función | Estándar del sector | Nuestro diferencial |
|---------|---------------------|---------------------|
| Reserva de clases | Puesto + lista de espera + cancelación con penalización | Igualar el estándar |
| Rutinas personalizadas | Biblioteca de ejercicios + seguimiento de cargas | Integrado con el resto (mismo login) |
| Natación | Apps separadas (Nadus, Inat) | Integrado y visible para la **familia** |
| Incidencias instalación | GMAO separado o módulo de reclamaciones | Reporte del socio → orden de trabajo trazable |
| Quejas/sugerencias | Buzón básico | Flujo con seguimiento y respuesta |
| Acceso | RFID/QR/biometría | QR en MVP, ligado a cuota y reserva |
| Modelo | Socio individual | **Modelo familiar** (titular + beneficiarios) transversal |
