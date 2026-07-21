# Estado del proyecto — retomar aquí

> Última actualización: 21 jul 2026. Lee este archivo primero para continuar.

## Dónde estamos

**Arranque básico** del monorepo LocalSports. Implementado: **autenticación +
perfil + roles (RBAC)**. El resto del alcance está diseñado en `/investigacion` y
se desarrollará por fases.

Decisiones tomadas con el promotor:
- Todo el código y el modelo de datos **en español**.
- Modelo de datos reducido al **perfil personal** (datos típicos + foto opcional).
- **8 roles** del centro (enum `Rol`), maquinaria RBAC lista.
- Frontend de socios = **app nativa** (Expo / React Native).
- Stack: NestJS + PostgreSQL + Prisma · Next.js (web) · Expo (móvil) · React (admin).

## Casos de uso implementados

| # | Caso de uso | Estado |
|---|-------------|--------|
| CU-01 | Registrarse como socio (`POST /autenticacion/registro`) | API ✅ (sin pantalla) |
| CU-02 | Iniciar sesión (`POST /autenticacion/login`) | API + móvil ✅ |
| CU-03 | Ver mi sesión/identidad (`GET /autenticacion/yo`) | API ✅ |
| CU-04 | Ver mi perfil (`GET /perfil/mio`) | API + móvil ✅ |
| CU-05 | Editar mi perfil + foto opcional (`PATCH /perfil/mio`, `POST /perfil/mio/foto`) | API + móvil ✅ |
| CU-06 | Consultar portal público | Web ✅ (estático) |

## Pendiente / siguiente

1. **Instalar y ejecutar por primera vez** (no se ha hecho aún):
   ```bash
   cp .env.example .env
   pnpm install
   pnpm db:up
   pnpm --filter @localsports/api prisma migrate dev --name init
   pnpm --filter @localsports/api db:seed
   pnpm dev                                   # web + admin + api
   pnpm --filter @localsports/movil dev       # app móvil (Expo)
   ```
   Credenciales seed: `admin@localsports.local / admin1234`, `socio@localsports.local / socio1234`.

2. **Login de personal en el panel admin** → primer caso de uso **restringido por
   rol** (activa de verdad el `RolesGuard`).
3. **Gestión de usuarios y roles** por el ADMIN.
4. Registro de socio con pantalla propia (CU-01 en la web/móvil).
5. Primer módulo de dominio: **actividades y horarios** (portal público con datos).

## Puntos a vigilar al primer arranque

- La subida de foto multipart desde React Native (`subirFoto` en `apps/movil/src/api.ts`).
- El tipo `Express.Multer.File` en `perfil.controller.ts` (requiere `@types/multer`).
- En móvil físico, `EXPO_PUBLIC_API_URL` debe apuntar a la IP del equipo, no a localhost.
- Versiones de dependencias: son las previstas; ajustar si `pnpm install` se queja.

## Mapa rápido

- Investigación y plan: [`investigacion/00-README.md`](investigacion/00-README.md)
- Arquitectura técnica: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- Puesta en marcha: [`README.md`](README.md)
