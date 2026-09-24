// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import basePrefix from './integrations/base-prefix.mjs';

// BASE_PATH=/prueba → build para vista previa en ortodonciaparatodos.cl/prueba (ver .github/workflows/deploy.yml)
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://ortodonciaparatodos.cl',
  base,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://ortodonciaparatodos.cl/') item.priority = 1.0;
        if (/\/(tratamientos|aranceles)\//.test(item.url)) item.priority = 0.9;
        return item;
      },
    }),
    basePrefix(),
  ],
});
