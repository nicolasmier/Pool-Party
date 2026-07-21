import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { LoginDto, RegistroDto } from './dto/autenticacion.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { UsuarioActual, UsuarioAutenticado } from '../common/decorators/usuario-actual.decorator';

@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly auth: AutenticacionService) {}

  @Post('registro')
  registrar(@Body() dto: RegistroDto) {
    return this.auth.registrar(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.auth.login(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('yo')
  yo(@UsuarioActual() usuario: UsuarioAutenticado) {
    return usuario;
  }
}
