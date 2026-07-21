import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Rol } from '@localsports/shared';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegistroDto } from './dto/autenticacion.dto';

@Injectable()
export class AutenticacionService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async registrar(dto: RegistroDto) {
    const existe = await this.prisma.usuario.findUnique({ where: { email: dto.email } });
    if (existe) throw new ConflictException('El email ya está registrado');

    const contrasena = await bcrypt.hash(dto.contrasena, 10);
    const usuario = await this.prisma.usuario.create({
      data: {
        email: dto.email,
        contrasena,
        roles: [Rol.SOCIO],
        perfil: {
          create: { nombre: dto.nombre, apellidos: dto.apellidos },
        },
      },
    });
    return this.emitirTokens(usuario.id, usuario.email, usuario.roles);
  }

  async login(dto: LoginDto) {
    const usuario = await this.prisma.usuario.findUnique({ where: { email: dto.email } });
    if (!usuario || !usuario.activo) throw new UnauthorizedException('Credenciales inválidas');

    const ok = await bcrypt.compare(dto.contrasena, usuario.contrasena);
    if (!ok) throw new UnauthorizedException('Credenciales inválidas');

    return this.emitirTokens(usuario.id, usuario.email, usuario.roles);
  }

  private async emitirTokens(sub: string, email: string, roles: string[]) {
    const payload = { sub, email, roles };
    const accessToken = await this.jwt.signAsync(payload, {
      secret: process.env.JWT_ACCESS_SECRET ?? 'dev-secret',
      expiresIn: process.env.JWT_ACCESS_TTL ?? '15m',
    });
    return { accessToken, usuario: { id: sub, email, roles } };
  }
}
