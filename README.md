# LocalSports — Plataforma de gestión de centro deportivo

Monorepo con tres ámbitos de acceso (público, socios y gestión interna) sobre una
API única. La investigación, el benchmark y el plan de desarrollo están en
[`/investigacion`](investigacion/00-README.md).

> **Estado: arranque básico.** La base implementada es **autenticación + perfil +
> roles**. El resto de funcionalidades (reservas, natación, entrenamiento,
> incidencias, quejas…) se añadirán por fases según el
> [plan de desarrollo](investigacion/06-plan-desarrollo.md).

## Arquitectura

```
localsports/
├── apps/
│   ├── api/       → API NestJS + Prisma (PostgreSQL). Núcleo.        :3001
│   ├── web/       → Portal PÚBLICO (Next.js).                        :3000
│   ├── movil/     → App NATIVA de socios (Expo / React Native).
│   └── admin/     → Panel de GESTIÓN interna (React, Vite).          :3003
├── packages/
│   └── shared/    → Roles (RBAC) compartidos.
├── investigacion/ → Dosier: requisitos, benchmark, legal, roadmap, preguntas.
└── docker-compose.yml → PostgreSQL local.
```

La API expone `http://localhost:3001/api`. Los frontends la consumen.

### Módulos de la API (apps/api/src)
- `autenticacion` — registro/login, JWT, base del RBAC.
- `perfil` — datos personales del usuario (foto opcional).
- `common` — decoradores y guards de RBAC (`@Roles` + `RolesGuard`).
- `prisma` — acceso a base de datos.

Los tres ámbitos se aplican con guards: público sin guard, socios con
`JwtAuthGuard`, gestión con `JwtAuthGuard + RolesGuard`.

### Modelo de datos (básico)
`Usuario` (cuenta + roles) ─1:1─ `Perfil` (nombre, apellidos, fecha de nacimiento,
teléfono, dirección, foto opcional). Enum `Rol` con los 8 roles del centro.

## Puesta en marcha (desarrollo)

Requisitos: Node ≥ 20, pnpm 9, Docker.

```bash
cp .env.example .env
pnpm install
pnpm db:up                                            # PostgreSQL en Docker
pnpm --filter @localsports/api prisma migrate dev --name init
pnpm --filter @localsports/api db:seed
pnpm dev                                               # web + admin + api
```

La app móvil se arranca aparte (Expo):

```bash
pnpm --filter @localsports/movil dev                   # abre Expo (QR / emulador)
```

Credenciales del seed:
- Gestión: `admin@localsports.local` / `admin1234`
- Socio: `socio@localsports.local` / `socio1234`

> Nota: aún no se ejecutó `pnpm install` en este entorno; las versiones de
> dependencias son las previstas y pueden ajustarse al instalar.
