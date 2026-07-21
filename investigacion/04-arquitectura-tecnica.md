# 04 — Arquitectura y stack técnico (propuesta)

> Propuesta inicial para debate. Las decisiones finales dependen del equipo
> disponible, presupuesto y de las respuestas de los gestores (doc 07).

## 4.1 Principios de arquitectura

- **API-first**: un backend con API única sirve a web y móvil (evita duplicar
  lógica).
- **Monolito modular** para el MVP (no microservicios prematuros): módulos claros
  (socios, reservas, natación, entrenamiento, incidencias, comunicación) dentro de
  un solo despliegue. Extraer servicios solo si la escala lo exige.
- **RBAC** (control de acceso por roles) transversal: el mismo backend distingue
  los tres ámbitos y los roles internos.
- **Privacidad y seguridad por diseño** (ver doc 05): minimización de datos,
  cifrado, auditoría.

## 4.2 Ámbitos de acceso y autenticación

- **Público**: sin login; contenido cacheable (CDN).
- **Socios**: login con email+contraseña, **MFA opcional**; sesión JWT/refresh.
- **Gestión interna**: login reforzado (MFA recomendado), idealmente en subdominio
  o app separada; roles internos con permisos granulares.
- **Modelo familiar**: el titular es el sujeto de la cuenta; los beneficiarios son
  entidades vinculadas. Los menores de 14 se gestionan **solo** vía tutor
  (LOPDGDD). Considerar **SSO/OIDC** si el centro ya tiene un proveedor de
  identidad.

## 4.3 Modelo de datos (entidades núcleo)

```
Usuario (cuenta login) ──< Rol
Socio ──1:1── Usuario (opcional)         # un socio puede no tener login propio (menor)
Familia ──< Socio                         # titular + beneficiarios
Cuota/Membresía ──> Socio/Familia         # tipo, estado, periodo, pagos
Actividad ──< Sesion (horario) ──< Reserva ──> Socio
Sesion ──> Sala/Recurso, Monitor, Aforo
ListaEspera ──> Sesion, Socio
CursoNatacion ──< Grupo ──< Inscripcion ──> Socio
Nivel ──< Objetivo/Competencia
Evaluacion ──> Inscripcion, Objetivo, Monitor, (Adjunto)
Asistencia ──> Sesion/Inscripcion, Socio
Rutina ──< BloqueEjercicio ──> Ejercicio(biblioteca)
RegistroProgreso ──> Rutina/Ejercicio, Socio
Incidencia ──> Instalacion/Equipo, Reportante ──> OrdenTrabajo
Queja/Sugerencia ──> Socio, Estado, Respuesta
Comunicado/Notificacion ──> Segmento de socios
AccesoFisico (check-in) ──> Socio, Sesion, timestamp
LogAuditoria ──> Usuario, accion, entidad, timestamp
```

Puntos delicados del modelo:
- **Aforo y concurrencia**: la reserva debe ser transaccional (bloqueo optimista o
  contador atómico) para evitar sobreventa en el pico de apertura de cupo.
- **Datos de salud** (lesiones, certificados médicos, alergias): categoría especial
  RGPD → tabla separada, cifrada y con acceso restringido.
- **Menores**: marca de edad y vínculo con tutor; segregar consentimientos.

## 4.4 Stack propuesto (opciones)

| Capa | Opción recomendada | Alternativas |
|------|--------------------|--------------|
| **Backend/API** | Node.js (NestJS) o Python (Django/DRF) | Laravel (PHP), Spring Boot |
| **BD** | PostgreSQL (relacional, transacciones fuertes) | MySQL |
| **Web** | React/Next.js (SSR para SEO del portal público) | Vue/Nuxt |
| **Móvil** | React Native o Flutter (una base para iOS/Android) | PWA como paso previo/económico |
| **Notificaciones** | Firebase Cloud Messaging (push) + email (transaccional) | OneSignal |
| **Pagos** | Redsys/Stripe (SEPA + tarjeta, recurrente para cuotas) | — |
| **Infra** | Cloud gestionado (contenedores) + CDN | On-premise si lo exige el centro |
| **Auth** | Librería propia + OIDC, o Keycloak/Auth0 | — |

> **PWA como atajo**: si el presupuesto inicial es ajustado, una **PWA** (web
> instalable con push) cubre el MVP del socio sin coste de tiendas de apps; la app
> nativa (QR de acceso más fluido, mejor push) puede ser fase 2.

## 4.5 Integraciones a evaluar (construir vs. integrar)
- **Pasarela de pago** y domiciliación SEPA (cuotas recurrentes).
- **Control de accesos físico** (tornos/lectores QR/RFID) — protocolo del
  fabricante instalado en el centro.
- **GMAO** existente para mantenimiento (si el centro ya usa uno).
- **Facturación/contabilidad** del centro (ERP).
- **Email/SMS** transaccional y marketing.

## 4.6 Requisitos técnicos no funcionales
- **Escalado para picos** de reserva (colas, caché, rate limiting).
- **Backups** y plan de recuperación; retención según RGPD.
- **Observabilidad**: logs, métricas, alertas.
- **Entornos** separados (dev/staging/prod) y CI/CD.
- **Tests** de la lógica crítica (reservas/aforo, evaluaciones, cuotas).
