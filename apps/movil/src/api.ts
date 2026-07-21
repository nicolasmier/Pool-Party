// Cliente de la API para la app nativa.
// En dispositivo físico, sustituir localhost por la IP del equipo (p.ej. 192.168.x.x).
export const API_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3001';

let token: string | null = null;

export function setToken(t: string | null) {
  token = t;
}

/** URL absoluta para mostrar una imagen servida por la API (p.ej. /uploads/x.jpg). */
export function mediaUrl(path?: string | null): string | undefined {
  if (!path) return undefined;
  return path.startsWith('http') ? path : `${API_URL}${path}`;
}

export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_URL}/api${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init.headers ?? {}),
    },
  });
  if (!res.ok) throw new Error(`API ${path} → ${res.status}`);
  return res.json() as Promise<T>;
}

/** Sube la foto de perfil (multipart). `uri` procede del selector de imágenes. */
export async function subirFoto<T>(uri: string): Promise<T> {
  const nombre = uri.split('/').pop() ?? 'foto.jpg';
  const ext = (nombre.split('.').pop() ?? 'jpg').toLowerCase();
  const tipo = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';

  const form = new FormData();
  // React Native admite este objeto como parte del FormData.
  form.append('foto', { uri, name: nombre, type: tipo } as unknown as Blob);

  const res = await fetch(`${API_URL}/api/perfil/mio/foto`, {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: form,
  });
  if (!res.ok) throw new Error(`subir foto → ${res.status}`);
  return res.json() as Promise<T>;
}
