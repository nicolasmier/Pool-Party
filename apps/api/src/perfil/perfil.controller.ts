import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PerfilService } from './perfil.service';
import { ActualizarPerfilDto } from './dto/actualizar-perfil.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { UsuarioActual, UsuarioAutenticado } from '../common/decorators/usuario-actual.decorator';

// Zona privada: requiere estar autenticado. Cada usuario gestiona su propio perfil.
@UseGuards(JwtAuthGuard)
@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfil: PerfilService) {}

  @Get('mio')
  mio(@UsuarioActual() usuario: UsuarioAutenticado) {
    return this.perfil.miPerfil(usuario.usuarioId);
  }

  @Patch('mio')
  actualizar(@UsuarioActual() usuario: UsuarioAutenticado, @Body() dto: ActualizarPerfilDto) {
    return this.perfil.actualizar(usuario.usuarioId, dto);
  }

  // Subida de foto de perfil (opcional). Campo del formulario: "foto".
  @Post('mio/foto')
  @UseInterceptors(
    FileInterceptor('foto', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const usuario = (req as unknown as { user: UsuarioAutenticado }).user;
          cb(null, `${usuario.usuarioId}-${Date.now()}${extname(file.originalname)}`);
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
      fileFilter: (_req, file, cb) => {
        cb(null, /^image\/(jpeg|png|webp)$/.test(file.mimetype));
      },
    }),
  )
  subirFoto(
    @UsuarioActual() usuario: UsuarioAutenticado,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (!file) throw new BadRequestException('Sube una imagen JPEG, PNG o WEBP (máx. 5 MB)');
    return this.perfil.actualizarFoto(usuario.usuarioId, `/uploads/${file.filename}`);
  }
}
