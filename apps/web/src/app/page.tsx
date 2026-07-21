// Portal PÚBLICO (sin autenticación). Versión básica: presentación del centro.
// Las secciones con datos (actividades, horarios) se añadirán por fases.
export default function HomePage() {
  return (
    <>
      <h1>Bienvenido/a a nuestro centro deportivo</h1>
      <p>
        Consulta nuestra oferta y hazte socio. La app de socios (móvil) te permite ver tu
        perfil y, próximamente, reservar clases y seguir tu progreso.
      </p>

      <h2>Próximamente en la web</h2>
      <ul>
        <li>Actividades y horarios</li>
        <li>Tarifas y cuotas</li>
        <li>Noticias y eventos</li>
        <li>Contacto y alta de socio</li>
      </ul>

      <p style={{ marginTop: '2rem', color: '#666' }}>
        Socios: descarga la <strong>app móvil</strong>. Personal del centro:{' '}
        <a href="http://localhost:3003">acceso a gestión →</a>
      </p>
    </>
  );
}
