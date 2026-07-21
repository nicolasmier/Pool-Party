import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ActualizarPerfilDto } from './dto/actualizar-perfil.dto';

@Injectable()
export class PerfilService {
  constructor(private prisma: PrismaService) {}

  /** Perfil del usuario autenticado (incluye email de la cuenta). */
  async miPerfil(usuarioId: string) {
    const perfil = await this.prisma.perfil.findUnique({
      where: { usuarioId },
      include: { usuario: { select: { email: true, roles: true } } },
    });
    if (!perfil) throw new NotFoundException('Perfil no encontrado');
    return perfil;
  }

  /** Actualiza los datos personales del propio usuario. */
  async actualizar(usuarioId: string, dto: ActualizarPerfilDto) {
    return this.prisma.perfil.update({
      where: { usuarioId },
      data: {
        ...dto,
        fechaNacimiento: dto.fechaNacimiento ? new Date(dto.fechaNacimiento) : undefined,
      },
    });
  }

  /** Guarda la URL de la foto de perfil subida. */
  async actualizarFoto(usuarioId: string, fotoUrl: string) {
    return this.prisma.perfil.update({ where: { usuarioId }, data: { fotoUrl } });
  }
}
