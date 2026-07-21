# Dosier de investigación — App de gestión de centro deportivo (LocalSports)

> Documento vivo. Recopila la visión del proyecto, un benchmark del sector
> (Go Fit y otras franquicias), el catálogo de funcionalidades, una propuesta
> técnica, las consideraciones legales/seguridad, un plan de desarrollo por
> fases y el cuestionario para los gestores del centro.

**Fecha de elaboración:** 21 de julio de 2026
**Estado:** Borrador para validación con la propiedad / gestores del centro.

---

## Índice de documentos

| Nº | Documento | Contenido |
|----|-----------|-----------|
| 01 | [Requisitos y visión](01-requisitos-y-vision.md) | Toda la información aportada por el promotor, objetivos, alcance, actores y roles. |
| 02 | [Benchmark de mercado](02-benchmark-mercado.md) | Cómo funcionan Go Fit, Basic-Fit y otras cadenas; software del sector (Trainingym, Provis, Sportrick…); apps de natación. |
| 03 | [Catálogo de funcionalidades](03-funcionalidades.md) | Funcionalidades detalladas por área (pública, socios, gestión interna). |
| 04 | [Arquitectura y stack técnico](04-arquitectura-tecnica.md) | Modelo de datos, autenticación/roles, integraciones, propuesta de stack. |
| 05 | [Legal, seguridad y protección de datos](05-legal-seguridad.md) | RGPD/LOPDGDD, menores y familias, datos de salud, control de aforo, accesibilidad. |
| 06 | [Plan de desarrollo](06-plan-desarrollo.md) | MVP, roadmap por fases, estimaciones, riesgos, métricas de éxito. |
| 07 | [Preguntas para los gestores](07-preguntas-gestores.md) | Cuestionario estructurado para la fase de descubrimiento. |

---

## Resumen ejecutivo (TL;DR)

Se plantea una plataforma (web responsive + app móvil) con **tres ámbitos de acceso**:

1. **Público** — cualquiera: catálogo de actividades, horarios, tarifas, noticias,
   ubicación, formulario de contacto/alta.
2. **Socios registrados** (y familias) — reserva de clases, seguimiento de cursos
   de natación, rutinas personalizadas, quejas/sugerencias, aviso de incidencias,
   datos de facturación y cuota.
3. **Gestión interna** (staff, técnicos, dirección) — configuración de actividades
   y horarios, control de aforo/accesos, evaluación de alumnos, gestión de
   incidencias y mantenimiento, comunicación con socios, informes.

El diferencial frente a soluciones "de estantería" (Trainingym, Provis, Sportrick)
es la **integración vertical** de tres funciones que normalmente van en apps
separadas: escuela de natación con seguimiento pedagógico, rutinas personalizadas
de sala y gestión de incidencias/quejas de instalación, todo bajo un modelo
familiar (un titular gestiona a varios beneficiarios).

Ver detalle y fuentes en cada documento.
