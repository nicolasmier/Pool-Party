# Arquitectura (resumen técnico)

Complementa el dosier ([investigacion/04](../investigacion/04-arquitectura-tecnica.md)).
Aquí, cómo se refleja en el código en su estado actual (**arranque básico**).

## Ámbitos de acceso → guards

| Ámbito | Frontend | Protección en API |
|--------|----------|-------------------|
| Público | `apps/web` (Next.js) | Sin guard. |
| Socios | `apps/movil` (Expo / React Native) | `JwtAuthGuard`. |
| Gestión | `apps/admin` (React) | `JwtAuthGuard` + `RolesGuard` (`@Roles(...)`). |

## Estado actual (implementado)

| Módulo API | Cubre |
|------------|-------|
| `autenticacion` | Registro/login, JWT, base del RBAC. |
| `perfil` | Ver y editar datos personales del propio usuario (foto opcional). |

Modelo de datos: `Usuario` (1:1) `Perfil`, enum `Rol`.

## Pendiente (por fases — ver dosier)
Reservas, escuela de natación, entrenamiento, incidencias, quejas/sugerencias,
comunicaciones, cuotas/pagos, control de accesos. Cada uno se añadirá como módulo
de la API + su modelo de datos.

## Decisiones abiertas (a cerrar con los gestores — doc 07)
- Pagos: integrar Redsys/Stripe (fase posterior).
- Accesos físicos: protocolo del fabricante instalado; QR en la app.
- Datos de salud/menores: al introducirlos, cifrado en reposo + auditoría (doc 05).

## Próximos pasos técnicos sugeridos
1. `pnpm install` y `prisma migrate dev` para validar el esquema.
2. Completar la pantalla de edición de perfil en la app móvil.
3. Login de personal en el panel de gestión.
4. Añadir el primer módulo de dominio (p. ej. actividades/horarios).
