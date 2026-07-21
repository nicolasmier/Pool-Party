export const metadata = {
  title: 'LocalSports — Centro Deportivo',
  description: 'Actividades, horarios y servicios del centro deportivo.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
        <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #eee' }}>
          <strong>LocalSports</strong> · Centro Deportivo
        </header>
        <main style={{ padding: '2rem', maxWidth: 960, margin: '0 auto' }}>{children}</main>
      </body>
    </html>
  );
}
