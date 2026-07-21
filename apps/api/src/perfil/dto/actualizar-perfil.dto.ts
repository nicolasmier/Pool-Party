import { IsOptional, IsString, IsDateString } from 'class-validator';

/** Datos típicos del perfil. Todos opcionales al actualizar; la foto es voluntaria. */
export class ActualizarPerfilDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  apellidos?: string;

  @IsOptional()
  @IsDateString()
  fechaNacimiento?: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsString()
  fotoUrl?: string;
}
