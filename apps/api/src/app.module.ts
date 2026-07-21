import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { PerfilModule } from './perfil/perfil.module';

// Base del proyecto: autenticación + perfil (+ roles/RBAC en common).
// Los demás módulos de dominio se irán añadiendo por fases (ver dosier).
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AutenticacionModule,
    PerfilModule,
  ],
})
export class AppModule {}
