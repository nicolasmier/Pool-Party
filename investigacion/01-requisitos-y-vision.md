# 01 — Requisitos y visión del proyecto

## 1.1 Descripción aportada por el promotor (fuente original)

> App para la gestión de un centro deportivo con tres partes:
> - Una **parte pública** para usuarios en general.
> - Una **parte privada para usuarios registrados**.
> - Una **parte privada para la gestión interna** del centro.
>
> Todos pueden acceder a la parte pública; el acceso a las dos partes privadas
> depende de cómo se autentifique cada usuario.
>
> **Objetivo:** crear un espacio donde:
> - Consultar actividades del centro y horarios.
> - Apuntarse a clases.
> - Ver notas sobre la evolución en los cursos de natación en los que el usuario
>   (o su familia) esté apuntado.
> - Manifestar quejas o sugerencias.
> - Notificar problemas en la instalación deportiva.
> - Tener un seguimiento de las rutinas de ejercicio personalizadas.
> - Etc.

Esta es la base de partida. El resto del dosier la amplía con benchmark del
sector y buenas prácticas.

## 1.2 Objetivos de negocio (propuestos, a validar)

- **Fidelizar** al socio: cuanto más usa la app (reservas, progreso, rutinas),
  menor es la tasa de baja (*churn*).
- **Reducir carga administrativa**: autoservicio de reservas, altas, avisos e
  incidencias reduce el trabajo de recepción.
- **Mejorar la experiencia** de familias con hijos en la escuela de natación
  (seguimiento pedagógico visible para los padres).
- **Anticipar el mantenimiento**: incidencias reportadas por socios y staff se
  convierten en órdenes de trabajo trazables.
- **Datos para decidir**: ocupación por franja, actividades más demandadas,
  satisfacción, para optimizar horarios y personal.

## 1.3 Actores y roles

| Actor | Ámbito | Descripción |
|-------|--------|-------------|
| **Visitante anónimo** | Público | Consulta oferta, horarios y tarifas; puede iniciar un alta o contacto. |
| **Socio individual** | Privado socios | Titular de una cuota; reserva, ve sus rutinas, reporta incidencias. |
| **Titular de familia / tutor** | Privado socios | Gestiona a varios beneficiarios (hijos menores, pareja); ve el progreso de natación de sus hijos. |
| **Beneficiario menor** | (indirecto) | No accede por sí mismo (o acceso limitado según edad); sus datos los gestiona el tutor. |
| **Recepción / atención al cliente** | Gestión | Altas, cobros, gestión de reservas presenciales, primera línea de incidencias. |
| **Técnico de sala / entrenador** | Gestión | Diseña y asigna rutinas; hace seguimiento del socio. |
| **Monitor / técnico de natación** | Gestión | Evalúa alumnos, registra evolución, gestiona cambios de nivel. |
| **Mantenimiento** | Gestión | Recibe y resuelve incidencias de instalación (órdenes de trabajo). |
| **Coordinador / dirección** | Gestión | Configura actividades y horarios, ve informes, gestiona comunicación y quejas. |
| **Administrador del sistema** | Gestión | Gestiona usuarios, roles, permisos y configuración global. |

> **Nota de diseño:** conviene un modelo de **permisos por rol (RBAC)** flexible,
> porque en centros pequeños una misma persona acumula varios roles.

## 1.4 Alcance funcional (áreas)

1. **Portal público**: oferta de actividades, horarios, tarifas, noticias/eventos,
   ubicación y contacto, captación de leads/altas.
2. **Reservas e inscripciones**: clases colectivas, cursos, instalaciones
   (pistas, carriles), lista de espera, cancelaciones.
3. **Escuela de natación**: matrícula por niveles, evaluación y evolución, boletines
   para las familias.
4. **Entrenamiento personalizado**: rutinas de sala, seguimiento de progreso,
   biblioteca de ejercicios.
5. **Comunicación**: quejas/sugerencias, avisos de incidencias, notificaciones y
   comunicados del centro.
6. **Gestión interna**: configuración, control de accesos/aforo, mantenimiento,
   informes.
7. **Cuenta y facturación**: cuotas, pagos, gestión de datos personales y familia.

## 1.5 Requisitos no funcionales (propuestos)

- **Multidispositivo**: web responsive + app móvil (o PWA). El móvil es el canal
  principal para el socio (reservas, QR de acceso, notificaciones).
- **Multi-idioma** (al menos ES; prever EN/idioma cooficial si aplica).
- **Accesibilidad** (WCAG 2.1 AA): centro deportivo = público diverso, mayores,
  personas con discapacidad.
- **Rendimiento**: picos de reserva a la apertura del cupo (todos reservan a la
  misma hora) → diseñar para concurrencia.
- **Disponibilidad**: el acceso físico y las reservas son críticos; alta
  disponibilidad en horario de apertura.
- **Trazabilidad/auditoría**: quién hizo qué (reservas, evaluaciones, cambios de
  datos), especialmente con datos de menores y salud.
- **Privacidad por diseño** (ver [documento 05](05-legal-seguridad.md)).
