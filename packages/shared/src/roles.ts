/**
 * Roles del sistema (RBAC). Los tres ámbitos de acceso del dosier
 * (público / socios / gestión interna) se materializan aquí.
 *
 * Ver investigacion/01-requisitos-y-vision.md §1.3
 */
export enum Rol {
  // Ámbito socios
  SOCIO = 'SOCIO',
  TUTOR = 'TUTOR', // titular de familia que gestiona beneficiarios

  // Ámbito gestión interna
  RECEPCION = 'RECEPCION',
  TECNICO_SALA = 'TECNICO_SALA',
  MONITOR_NATACION = 'MONITOR_NATACION',
  MANTENIMIENTO = 'MANTENIMIENTO',
  COORDINADOR = 'COORDINADOR',
  ADMIN = 'ADMIN',
}

/** Roles que pertenecen a la gestión interna del centro. */
export const ROLES_GESTION: Rol[] = [
  Rol.RECEPCION,
  Rol.TECNICO_SALA,
  Rol.MONITOR_NATACION,
  Rol.MANTENIMIENTO,
  Rol.COORDINADOR,
  Rol.ADMIN,
];

/** Roles del ámbito de socios. */
export const ROLES_SOCIO: Rol[] = [Rol.SOCIO, Rol.TUTOR];

export const esGestion = (rol: Rol): boolean => ROLES_GESTION.includes(rol);
