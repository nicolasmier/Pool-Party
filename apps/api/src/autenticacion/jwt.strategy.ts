import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsuarioAutenticado } from '../common/decorators/usuario-actual.decorator';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_SECRET ?? 'dev-secret',
    });
  }

  /** El objeto devuelto se inyecta en request.user. */
  async validate(payload: {
    sub: string;
    email: string;
    roles: string[];
  }): Promise<UsuarioAutenticado> {
    return { usuarioId: payload.sub, email: payload.email, roles: payload.roles };
  }
}
