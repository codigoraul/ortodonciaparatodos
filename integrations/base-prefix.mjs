// Permite publicar el sitio en una subcarpeta (ej. /prueba) sin tocar el código fuente.
// Solo actúa cuando `base` ≠ '/': prefija las URLs absolutas del HTML generado,
// el .htaccess y el manifest, y marca todas las páginas como noindex (es una vista previa).
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)])));
  return files.flat();
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');

export default function basePrefix() {
  let base = '/';
  return {
    name: 'base-prefix',
    hooks: {
      'astro:config:done': ({ config }) => {
        base = config.base;
      },
      'astro:build:done': async ({ dir, logger }) => {
        const prefix = base.replace(/\/+$/, '');
        if (!prefix) return;
        // Tras la "/" inicial no debe venir otra "/" (URL protocol-relative) ni el prefijo ya aplicado por Astro
        const notPrefixed = `(?!\\/|${escapeRe(prefix.slice(1))}\\/)`;
        const attrRe = new RegExp(`\\b(href|src|poster|action|content|data-[\\w-]+)="\\/${notPrefixed}`, 'g');
        const srcsetRe = /\bsrcset="([^"]*)"/g;
        const srcsetUrlRe = new RegExp(`(^|,\\s*)\\/${notPrefixed}`, 'g');
        const jsonUrlRe = new RegExp(`"\\/${notPrefixed}`, 'g');
        let count = 0;

        for (const file of await walk(fileURLToPath(dir))) {
          const ext = extname(file);
          const name = basename(file);
          let txt = await readFile(file, 'utf8');
          const orig = txt;

          if (ext === '.html') {
            txt = txt
              .replace(attrRe, (_, attr) => `${attr}="${prefix}/`)
              .replace(srcsetRe, (_, v) => `srcset="${v.replace(srcsetUrlRe, (__, sep) => `${sep}${prefix}/`)}"`)
              .replace(/<meta name="robots" content="[^"]*"\s*\/?>/, '<meta name="robots" content="noindex, nofollow" />');
          } else if (name === '.htaccess') {
            txt = txt.replace(/^(ErrorDocument\s+\d+\s+)\/(?!\/)/gm, `$1${prefix}/`);
          } else if (name === 'site.webmanifest' || name === 'robots.txt') {
            txt = name === 'robots.txt' ? 'User-agent: *\nDisallow: /\n' : txt.replace(jsonUrlRe, `"${prefix}/`);
          }

          if (txt !== orig) {
            await writeFile(file, txt);
            count++;
          }
        }
        logger.info(`URLs prefijadas con "${prefix}" en ${count} archivos`);
      },
    },
  };
}
