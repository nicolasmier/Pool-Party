import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegistroDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  contrasena!: string;

  @IsString()
  nombre!: string;

  @IsString()
  apellidos!: string;
}

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  contrasena!: string;
}
