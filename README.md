# ortodonciaparatodos.cl — Astro

Rediseño 2026 del sitio de **Ortodoncia Para Todos** (Temuco). Astro 5, estático, sin frameworks de UI.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist listo para subir al hosting (Apache)
npm run preview
```

Subir **todo el contenido de `dist/`** (incluye `.htaccess`, oculto) a `public_html`.

## Dónde editar

| Qué | Archivo |
|---|---|
| Teléfonos, WhatsApp, dirección, agenda, redes, EmailJS | `src/data/site.ts` → `SITE` |
| Menú | `src/data/site.ts` → `NAV` |
| Equipo (fotos en `src/assets/equipo/`) | `src/data/site.ts` → `SPECIALISTS`, `STAFF` |
| Aranceles | `src/data/site.ts` → `PRICE_PLANS` |
| Videos (mp4 en `public/videos/`, pósters en `public/videos/posters/`) | `src/data/site.ts` → `VIDEOS` |
| Preguntas frecuentes generales | `src/data/site.ts` → `FAQS_GENERAL` |
| Tratamientos (textos, FAQ, precios) | `src/data/treatments.ts` |
| Artículos de Educación | `src/content/educacion/*.md` (un archivo = un artículo) |
| Colores, tipografía, estilos globales | `src/styles/global.css` |

Para agregar un video: copiar el `.mp4` a `public/videos/`, generar póster
`ffmpeg -ss 2 -i public/videos/NOMBRE.mp4 -frames:v 1 -vf scale=480:-2 public/videos/posters/NOMBRE.jpg`
y sumar una entrada en `VIDEOS`.

## SEO incluido

- URLs del sitio anterior conservadas (`/aranceles/`, `/videos/`, `/educacion/`, `/contacto/`, `/nosotros/`) + nuevas páginas indexables por tratamiento y artículo.
- Canonical con barra final (el servidor redirige `/pagina` → `/pagina/`), `.htaccess` fuerza HTTPS y dominio sin `www`.
- Title/description únicos por página, Open Graph + Twitter con imagen 1200×630 generada.
- Datos estructurados: `Dentist`/`MedicalClinic`, `BreadcrumbList`, `FAQPage`, `MedicalProcedure` con precios, `OfferCatalog`, `VideoObject`, `Article`.
- `sitemap-index.xml` automático + `robots.txt`.
- Imágenes optimizadas (WebP, `srcset`), fuentes locales, videos cargan solo al hacer clic.

## Formulario

EmailJS (mismas credenciales del sitio anterior: `service_raul4q` / `template_rd29wef`). Variables enviadas: `name`, `email`, `phone`, `message`, `time`.

## Créditos de imágenes

Fotos de stock de tratamientos/hero: Freepik (licencia gratuita, requiere atribución si no hay plan Premium). Fotos del equipo, clínica, videos e infografías: del sitio anterior del cliente.
