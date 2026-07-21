# 05 — Legal, seguridad y protección de datos

> Aviso: este documento recoge buenas prácticas y referencias, **no es
> asesoramiento jurídico**. Antes de producción, validar con un asesor legal / DPO.

## 5.1 Marco normativo aplicable (España/UE)

- **RGPD** (Reglamento (UE) 2016/679) y **LOPDGDD** (Ley Orgánica 3/2018).
- **LSSI-CE** (comercio electrónico, cookies, comunicaciones comerciales).
- **Accesibilidad**: WCAG 2.1 AA (y normativa de accesibilidad del sector público
  si el centro es municipal).

## 5.2 Datos de menores y modelo familiar (crítico)

El centro trata datos de niños en la escuela de natación → régimen reforzado:

- **Edad de consentimiento autónomo: 14 años** (LOPDGDD). Por debajo, el
  consentimiento lo prestan **padres/tutores**; entre 14–17, en tratamientos
  sensibles conviene el consentimiento de tutor **y** del menor.
- **Consentimiento expreso** y **separado** por finalidad. En particular, separar el
  **consentimiento de imagen** (foto/vídeo del gesto técnico, cartelería, redes,
  prensa) del resto de datos, permitiendo elegir destino por destino.
- Datos habituales en club deportivo: nombre, fecha de nacimiento, **datos de salud**
  (certificados médicos, alergias, lesiones), imágenes, contacto de tutores.
- **DPO obligatorio** en ciertos supuestos (p. ej. tratamiento de datos de menores a
  escala relevante o biometría a gran escala). Evaluar con asesor.

**Implicación de producto:** el módulo de natación debe permitir registrar y
gestionar consentimientos granulares, y **bloquear** funciones (p. ej. adjuntar
foto de un menor) si el consentimiento de imagen no está otorgado.

Fuentes:
- [AEPD — Menores y educación](https://www.aepd.es/preguntas-frecuentes/10-menores-y-educacion)
- [Imagen y menores en clubes deportivos (COEDPI)](https://coedpi.es/2025/06/09/imagen-y-menores-en-los-clubes-deportivos-que-dice-la-ley-y-por-que-el-consentimiento-expreso-importa/)
- [Protección de datos de menores en clubes deportivos (Audidat)](https://www.audidat.com/blog/proteccion-de-datos/proteccion-datos-menores-clubes-deportivos/)
- [Protección de datos club deportivo 2026 (Grupo Atico34)](https://protecciondatos-lopd.com/empresas/club-deportivo/)

## 5.3 Datos de salud (categoría especial, art. 9 RGPD)

- Lesiones, certificados médicos, alergias, aptos médicos → **datos especialmente
  protegidos**: base jurídica reforzada, minimización, cifrado, acceso restringido
  por rol y **auditoría** de accesos.
- No usarlos para finalidades distintas (p. ej. marketing).

## 5.4 Control de accesos y biometría

- **Biometría** (facial/huella) para acceso: exige **Evaluación de Impacto (EIPD)**
  **obligatoria** antes de implantar y, a gran escala, **DPO**. Debe ofrecerse
  **alternativa no biométrica** (QR/RFID) por proporcionalidad.
- Recomendación: **MVP con QR** (dato mínimo), dejar biometría para una fase
  posterior sujeta a EIPD.

Fuentes:
- [Normativa gimnasios España 2026 (FitNova)](https://www.fitnova.eu/blog/normativa-gimnasios-espana)

## 5.5 Principios de privacidad por diseño a implementar

- **Minimización**: recoger solo lo necesario por finalidad.
- **Consentimientos granulares** y revocables; registro de consentimiento.
- **Derechos ARCO-POL** (acceso, rectificación, supresión, oposición,
  portabilidad, limitación): flujos en la app.
- **Retención**: política de conservación y borrado (p. ej. tras baja).
- **Registro de Actividades de Tratamiento (RAT)** y contratos de **encargado de
  tratamiento** con proveedores cloud/pagos.
- **Cifrado** en tránsito (TLS) y en reposo para datos sensibles.
- **Aviso legal, política de privacidad y política de cookies** en la parte
  pública.

## 5.6 Seguridad de la aplicación

- Autenticación robusta (hash de contraseñas, MFA para staff), gestión de sesiones.
- **RBAC** y principio de mínimo privilegio; separación clara staff/socio.
- **Auditoría** de acciones sensibles (menores, salud, cuotas, cambios de rol).
- Protección OWASP Top 10 (inyección, XSS, control de acceso roto…).
- Rate limiting y protección del pico de reservas frente a abuso.
- Backups cifrados y plan de continuidad.
- Gestión de vulnerabilidades y dependencias.

## 5.7 Accesibilidad e inclusión

- WCAG 2.1 AA: contraste, navegación por teclado, lectores de pantalla, textos
  alternativos.
- Público diverso (mayores, personas con discapacidad): lenguaje claro, tamaños de
  toque adecuados, flujos simples.
