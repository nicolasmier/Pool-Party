import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/** Exige un JWT válido. Marca la frontera entre público y privado. */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
