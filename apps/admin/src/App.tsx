// Panel de GESTIÓN interna (staff/dirección). Acceso reforzado por rol.
// Versión básica: aquí irá el login de personal y, por fases, la gestión de
// usuarios, socios, actividades, natación, etc. (ver dosier de investigación).
export function App() {
  const previsto = [
    'Usuarios, roles y perfiles',
    'Socios y familias',
    'Actividades y horarios',
    'Escuela de natación',
    'Entrenamiento y rutinas',
    'Incidencias y mantenimiento',
    'Quejas y sugerencias',
    'Comunicados',
    'Informes',
  ];
  return (
    <div style={{ fontFamily: 'system-ui', padding: 24, maxWidth: 720, margin: '0 auto' }}>
      <h1>Gestión del centro</h1>
      <p style={{ color: '#888' }}>
        Acceso restringido a personal. Arranque básico; funcionalidades previstas por fases:
      </p>
      <ul>
        {previsto.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  );
}
