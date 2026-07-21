# 06 — Plan de desarrollo

> Roadmap por fases orientado a entregar valor pronto (MVP) y reducir riesgo. Las
> estimaciones son órdenes de magnitud, a ajustar tras el descubrimiento (doc 07).

## 6.1 Enfoque

- **Discovery primero** (2–4 semanas): entrevistas a gestores (doc 07),
  observación de recepción/piscina/sala, decisión posicionamiento y alcance real,
  auditoría legal (DPO), inventario de sistemas existentes (accesos, pagos, GMAO).
- **Entregas incrementales** con demos frecuentes al centro.
- **Prioridad por valor/coste**: reservas y natación/familia son el corazón; el
  resto se añade por fases.

## 6.2 Fases

### Fase 0 — Descubrimiento y diseño (2–4 sem.)
- Entrevistas y cuestionario a gestores; mapa de procesos actuales.
- Definición de posicionamiento, roles y permisos.
- Auditoría RGPD (menores, salud, accesos) y decisión build-vs-integrate.
- Arquitectura de información, wireframes y prototipo navegable.
- **Entregable**: especificación funcional priorizada + prototipo + plan legal.

### Fase 1 — MVP (aprox. 3–4 meses)
Objetivo: que un socio pueda informarse, reservar y comunicarse, y que el centro
lo gestione.
- **Portal público**: actividades, horarios, tarifas, noticias, contacto/alta.
- **Cuenta y familia**: registro/login, perfil, modelo familiar, estado de cuota,
  consentimientos RGPD.
- **Reservas**: clases con aforo, lista de espera, cancelación + no-show.
- **Natación (núcleo)**: cursos/niveles/grupos, evaluación por rúbrica, asistencia,
  boletín visible para la familia.
- **Entrenamiento (núcleo)**: rutina asignada + biblioteca de ejercicios + registro
  de progreso.
- **Comunicación**: quejas/sugerencias e incidencias con seguimiento; comunicados.
- **Gestión interna**: configuración de catálogo/horarios, gestión de socios y
  reservas, bandejas de incidencias y quejas, RBAC + auditoría.
- **Entregable**: web responsive/PWA + panel de gestión + API. Piloto con un grupo
  reducido de socios.

### Fase 2 — Consolidación (aprox. +2–3 meses)
- **Pagos online** y domiciliación (cuotas, cursos).
- **App móvil nativa** + **check-in QR** ligado a cuota/reserva.
- **Control de aforo/accesos** en tiempo real; integración con tornos/lectores.
- **Mantenimiento preventivo** (GMAO) y traslados de alumnos en natación.
- **Analítica**: cuadro de mando (ocupación, churn, satisfacción).
- **Mensajería** socio ↔ técnico; adjuntos con consentimiento de imagen.

### Fase 3 — Diferenciación (backlog)
- Club de ventajas / fidelización.
- Clases virtuales / contenido on-demand.
- Integración con wearables (Apple Health / Google Fit).
- Biometría de acceso (previa EIPD) y analítica predictiva de demanda/churn.

## 6.3 Equipo mínimo sugerido
- 1 Product/PM (a tiempo parcial) + interlocutor del centro.
- 1–2 desarrolladores backend, 1–2 frontend/móvil.
- 1 diseñador UX/UI (fases 0–1).
- Asesoría legal/DPO (puntual).
- QA (puede compartirse).

## 6.4 Riesgos y mitigaciones
| Riesgo | Impacto | Mitigación |
|--------|---------|-----------|
| Datos de menores/salud mal tratados | Alto (legal) | DPO desde fase 0, privacidad por diseño, auditoría. |
| Pico de reservas → sobreventa/caídas | Alto | Reserva transaccional, colas, pruebas de carga. |
| Integración con accesos/pagos existentes | Medio | Descubrir sistemas actuales pronto; APIs del fabricante. |
| Alcance excesivo (todo a la vez) | Medio | MVP estricto, roadmap por fases. |
| Baja adopción por socios | Medio | UX simple, onboarding, valor claro (reservas/progreso). |
| Datos de partida sucios (socios/horarios) | Medio | Migración y saneamiento en fase 1. |

## 6.5 Métricas de éxito (KPIs)
- % de reservas hechas por autoservicio (vs. recepción).
- Reducción de no-shows tras política de penalización.
- Adopción: % de socios activos en la app / mes.
- Tiempo medio de resolución de incidencias.
- Satisfacción (quejas resueltas, NPS).
- Churn (bajas) y su correlación con uso de la app.
- % de familias que consultan el boletín de natación.
