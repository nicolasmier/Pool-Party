import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Rol } from '@localsports/shared';
import { ROLES_KEY } from '../decorators/roles.decorator';

/** Comprueba que el usuario tenga al menos uno de los roles requeridos. */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requeridos = this.reflector.getAllAndOverride<Rol[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requeridos || requeridos.length === 0) return true;

    const { user } = context.switchToHttp().getRequest();
    const roles: string[] = user?.roles ?? [];
    const ok = requeridos.some((r) => roles.includes(r));
    if (!ok) throw new ForbiddenException('No tienes permisos para esta acción');
    return true;
  }
}
