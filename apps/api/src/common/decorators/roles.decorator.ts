import { SetMetadata } from '@nestjs/common';
import { Rol } from '@localsports/shared';

export const ROLES_KEY = 'roles';

/** Restringe un endpoint a uno o varios roles. Ej: @Roles(Rol.ADMIN, Rol.COORDINADOR) */
export const Roles = (...roles: Rol[]) => SetMetadata(ROLES_KEY, roles);
