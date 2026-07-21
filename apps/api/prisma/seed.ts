import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // ─── Usuario de gestión (admin) ────────────────────────────
  const hashAdmin = await bcrypt.hash('admin1234', 10);
  await prisma.usuario.upsert({
    where: { email: 'admin@localsports.local' },
    update: {},
    create: {
      email: 'admin@localsports.local',
      contrasena: hashAdmin,
      roles: ['ADMIN', 'COORDINADOR'],
      perfil: { create: { nombre: 'Admin', apellidos: 'Del Centro' } },
    },
  });

  // ─── Socio de ejemplo ──────────────────────────────────────
  const hashSocio = await bcrypt.hash('socio1234', 10);
  await prisma.usuario.upsert({
    where: { email: 'socio@localsports.local' },
    update: {},
    create: {
      email: 'socio@localsports.local',
      contrasena: hashSocio,
      roles: ['SOCIO'],
      perfil: {
        create: {
          nombre: 'Ana',
          apellidos: 'García',
          fechaNacimiento: new Date('1992-05-10'),
          telefono: '600123456',
        },
      },
    },
  });

  // eslint-disable-next-line no-console
  console.log('Seed completado. Admin: admin@localsports.local / admin1234');
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
