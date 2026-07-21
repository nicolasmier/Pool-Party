# 03 — Catálogo de funcionalidades

Organizado por los tres ámbitos de acceso. Cada funcionalidad marca prioridad
sugerida: **[MVP]** (imprescindible v1), **[F2]** (fase 2), **[F3]** (futuro).

---

## A. Parte pública (sin autenticación)

- **[MVP]** Catálogo de **actividades** con descripción, categoría, nivel,
  monitor, sala/espacio y aforo.
- **[MVP]** **Horarios** semanales (parrilla de actividades dirigidas y horarios de
  piscina/sala).
- **[MVP]** **Tarifas y cuotas** (individual, familiar, jubilado, joven…).
- **[MVP]** **Noticias / eventos** del centro.
- **[MVP]** **Información del centro**: ubicación (mapa), horario de apertura,
  servicios, normativa, contacto.
- **[MVP]** **Formulario de contacto / captación de leads** y solicitud de alta o
  de clase de prueba.
- **[F2]** **Blog / contenidos** (consejos de salud, SEO para captación).
- **[F2]** Consulta de **disponibilidad en tiempo real** de plazas sin login
  (transparencia comercial).

---

## B. Parte privada — socios registrados (y familias)

### B.1 Cuenta y familia
- **[MVP]** Registro / login seguro; recuperación de contraseña.
- **[MVP]** **Perfil** y datos personales; gestión de consentimientos RGPD.
- **[MVP]** **Modelo familiar**: un titular gestiona **beneficiarios** (hijos
  menores, pareja) con perfiles y permisos propios.
- **[MVP]** Estado de la **cuota** y datos de facturación; histórico de pagos.
- **[F2]** **Pagos online** (alta, renovación, inscripción a cursos) vía pasarela.
- **[F2]** Autogestión de **baja / suspensión temporal** de cuota.

### B.2 Reservas e inscripciones
- **[MVP]** **Reserva de clases dirigidas** con selección de puesto (si aplica) y
  aforo en tiempo real.
- **[MVP]** **Lista de espera** con promoción automática al liberarse plaza.
- **[MVP]** **Cancelación** con política de antelación y **penalización por no-show**
  configurable.
- **[MVP]** **Mis reservas** (próximas e histórico); recordatorios.
- **[F2]** Reserva de **instalaciones/recursos** (carriles de piscina, pistas,
  salas) por franja.
- **[F2]** **Inscripción a cursos** (natación y otros) con listas de espera y pago.
- **[F3]** **Check-in por QR** al llegar (acceso ligado a reserva y cuota al día).

### B.3 Escuela de natación (socio y familia)
- **[MVP]** Ver **curso/nivel** en el que está inscrito el socio o cada hijo.
- **[MVP]** **Boletín de evolución**: objetivos/competencias evaluadas por el
  monitor con notas.
- **[MVP]** **Asistencia** a las sesiones del curso.
- **[F2]** **Adjuntos** del monitor (foto/vídeo del gesto técnico) — con
  consentimiento de imagen (ver doc 05).
- **[F2]** Notificación de **recomendación de cambio de nivel** e inscripción al
  siguiente curso.

### B.4 Entrenamiento personalizado (sala)
- **[MVP]** Ver la **rutina asignada** por el técnico (ejercicios, series, reps,
  descanso), con biblioteca de ejercicios (descripción/vídeo).
- **[MVP]** **Registro de progreso** por el socio (cargas, repeticiones,
  sensaciones) y visualización de evolución.
- **[F2]** **Objetivos** (pérdida de peso, fuerza…) y ajuste de rutina.
- **[F3]** Integración con **wearables** / apps de salud (Apple Health, Google Fit).

### B.5 Comunicación
- **[MVP]** **Quejas y sugerencias**: crear, adjuntar, seguir estado y recibir
  respuesta del centro.
- **[MVP]** **Aviso de incidencias** en la instalación (máquina rota, vestuario,
  limpieza…) con foto y ubicación; seguimiento del estado.
- **[MVP]** **Notificaciones/comunicados** del centro (cierres, cambios de horario,
  eventos) push/email.
- **[F2]** **Mensajería** socio ↔ entrenador/monitor.

---

## C. Parte privada — gestión interna (staff / dirección)

### C.1 Configuración y catálogo
- **[MVP]** Alta/edición de **actividades**, salas, recursos y **horarios**.
- **[MVP]** Gestión de **aforos** y reglas de reserva (antelación, penalizaciones).
- **[MVP]** Gestión de **tarifas/cuotas** y campañas.

### C.2 Socios y accesos
- **[MVP]** Gestión de **socios y familias** (altas, bajas, estados de cuota).
- **[MVP]** Gestión de **reservas** desde recepción (crear/cancelar en nombre del
  socio).
- **[F2]** **Control de accesos** (QR/RFID) ligado a cuota y reserva; **control de
  aforo** en tiempo real con alertas.

### C.3 Escuela de natación (técnicos)
- **[MVP]** Gestión de **cursos, niveles y grupos**; asignación de alumnos.
- **[MVP]** **Evaluación por rúbrica** de objetivos/competencias; registro de
  evolución y **control de asistencia** desde la piscina (móvil/tablet).
- **[F2]** **Traslados** de alumnos entre grupos/niveles; gestión de lista de
  espera del siguiente curso.

### C.4 Entrenamiento (técnicos de sala)
- **[MVP]** **Crear y asignar rutinas**; biblioteca de ejercicios.
- **[F2]** Plantillas de rutina por objetivo; seguimiento del socio y avisos de
  adherencia.

### C.5 Mantenimiento e incidencias
- **[MVP]** Bandeja de **incidencias** reportadas (socios y staff) → **órdenes de
  trabajo** con estado, asignación y prioridad.
- **[F2]** **Mantenimiento preventivo** (planes por equipo/instalación), inventario
  de repuestos, documentación técnica.

### C.6 Comunicación y quejas
- **[MVP]** Bandeja de **quejas/sugerencias** con flujo (recibida → en curso →
  resuelta) y respuesta al socio.
- **[MVP]** Envío de **comunicados** y notificaciones segmentadas.

### C.7 Informes y analítica
- **[MVP]** Ocupación por actividad/franja, no-shows, incidencias abiertas.
- **[F2]** Cuadro de mando: altas/bajas (churn), satisfacción, ingresos, uso de la
  app.
- **[F3]** Analítica predictiva de demanda y riesgo de baja.

### C.8 Administración del sistema
- **[MVP]** Gestión de **usuarios internos, roles y permisos (RBAC)**.
- **[MVP]** **Auditoría** de acciones sensibles (datos de menores, salud, cambios de
  cuota).

---

## D. Funcionalidades transversales
- **[MVP]** Notificaciones (push/email) y preferencias por canal.
- **[MVP]** Accesibilidad (WCAG 2.1 AA) y multi-idioma.
- **[F2]** Portal de **club de ventajas** / descuentos (fidelización, ref. Go Fit).
- **[F3]** Clases **virtuales / contenido on-demand** (ref. Go Fit / Trainingym).
