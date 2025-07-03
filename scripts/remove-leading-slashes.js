import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Solo procesar el index.html principal
const indexPath = join(__dirname, '../dist/index.html');
let content = readFileSync(indexPath, 'utf8');

// Remover todos los ../
content = content.replace(/href="\.\.\/([^"]+)"/g, 'href="$1"');
content = content.replace(/src="\.\.\/([^"]+)"/g, 'src="$1"');

// Remover slashes iniciales
content = content.replace(/href="\//g, 'href="');
content = content.replace(/src="\//g, 'src="');

// Corregir rutas de assets
content = content.replace(/href="(css|js|img|assets|fontawesome)/g, 'href="$1');
content = content.replace(/src="(css|js|img|assets|fontawesome)/g, 'src="$1');

// Corregir rutas de enlaces internos
content = content.replace(/href="\.\/([^"]+)"/g, 'href="$1"');
content = content.replace(/src="\.\/([^"]+)"/g, 'src="$1"');

// Corregir rutas de imágenes en el slider
content = content.replace(/url\(\.\/([^)]+)\)/g, 'url($1)');

// Corregir rutas de enlaces en el menú
content = content.replace(/href="\.\/([^"]+)"/g, 'href="$1"');

// Corregir rutas de imágenes en el footer
content = content.replace(/src="\.\.\/img\/([^"]+)"/g, 'src="img/$1"');

// Corregir rutas de enlaces en el footer
content = content.replace(/href="\.\.\/index\.html"/g, 'href="index.html"');

// Corregir rutas de scripts
content = content.replace(/src="\.\.\/js\/([^"]+)"/g, 'src="js/$1"');

// Corregir rutas de assets
content = content.replace(/src="\.\.\/assets\/([^"]+)"/g, 'src="assets/$1"');

writeFileSync(indexPath, content);

console.log('Procesamiento completado: Rutas ajustadas correctamente para el index.html principal.'); 