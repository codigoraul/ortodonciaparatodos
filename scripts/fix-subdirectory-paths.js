import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function processHtmlFile(filePath) {
    const relativePath = relative(join(__dirname, '../dist'), dirname(filePath));
    const isRoot = relativePath === '';
    let content = readFileSync(filePath, 'utf8');
    
    if (isRoot) {
        // Para el index.html principal
        // Remover todos los ../
        content = content.replace(/href="\.\.\/([^"]+)"/g, 'href="$1"');
        content = content.replace(/src="\.\.\/([^"]+)"/g, 'src="$1"');
        content = content.replace(/url\(\.\.\/([^)]+)\)/g, 'url($1)');
        
        // Remover slashes iniciales
        content = content.replace(/href="\//g, 'href="');
        content = content.replace(/src="\//g, 'src="');
        content = content.replace(/url\(\//g, 'url(');
        
        // Corregir rutas de assets
        content = content.replace(/href="(css|js|img|assets|fontawesome)/g, 'href="$1');
        content = content.replace(/src="(css|js|img|assets|fontawesome)/g, 'src="$1');
        content = content.replace(/url\((css|js|img|assets|fontawesome)/g, 'url($1');
        
        // Corregir rutas de enlaces internos
        content = content.replace(/href="\.\/([^"]+)"/g, 'href="$1"');
        content = content.replace(/src="\.\/([^"]+)"/g, 'src="$1"');
        content = content.replace(/url\(\.\/([^)]+)\)/g, 'url($1)');
        
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

        // Corregir específicamente la ruta de la imagen de fondo del breadcrumb
        content = content.replace(/background-image:url\(\/assets\/img\/bg-title\.png\)/g, 'background-image:url(assets/img/bg-title.png)');
    } else {
        // Para archivos en subdirectorios
        // Remover slashes iniciales de las rutas
        content = content.replace(/href="\/([^"]+)"/g, 'href="../$1"');
        content = content.replace(/src="\/([^"]+)"/g, 'src="../$1"');
        content = content.replace(/url\(\/([^)]+)\)/g, 'url(../$1)');
        
        // Corregir rutas de assets
        content = content.replace(/href="\.\.\/(css|js|img|assets|fontawesome)/g, 'href="../$1');
        content = content.replace(/src="\.\.\/(css|js|img|assets|fontawesome)/g, 'src="../$1');
        content = content.replace(/url\(\.\.\/(css|js|img|assets|fontawesome)/g, 'url(../$1');
        
        // Corregir rutas de enlaces internos
        content = content.replace(/href="\.\/([^"]+)"/g, 'href="$1"');
        content = content.replace(/src="\.\/([^"]+)"/g, 'src="$1"');
        content = content.replace(/url\(\.\/([^)]+)\)/g, 'url($1)');
        
        // Corregir rutas de imágenes en el slider
        content = content.replace(/url\(\.\/([^)]+)\)/g, 'url($1)');
        
        // Corregir rutas de enlaces en el menú
        content = content.replace(/href="\.\/([^"]+)"/g, 'href="$1"');
        
        // Corregir rutas de imágenes en el footer
        content = content.replace(/src="\.\.\/img\/([^"]+)"/g, 'src="../img/$1"');
        
        // Corregir rutas de enlaces en el footer
        content = content.replace(/href="\.\.\/index\.html"/g, 'href="../index.html"');
        
        // Corregir rutas de scripts
        content = content.replace(/src="\.\.\/js\/([^"]+)"/g, 'src="../js/$1"');
        
        // Corregir rutas de assets
        content = content.replace(/src="\.\.\/assets\/([^"]+)"/g, 'src="../assets/$1"');

        // Corregir específicamente la ruta de la imagen de fondo del breadcrumb
        content = content.replace(/background-image:url\(\/assets\/img\/bg-title\.png\)/g, 'background-image:url(../assets/img/bg-title.png)');
    }
    
    writeFileSync(filePath, content);
}

function processDirectory(dir) {
    const files = readdirSync(dir);
    
    files.forEach(file => {
        const filePath = join(dir, file);
        const stat = statSync(filePath);
        
        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.html')) {
            processHtmlFile(filePath);
        }
    });
}

// Procesar el directorio dist
const distDir = join(__dirname, '../dist');
processDirectory(distDir);

console.log('Procesamiento completado: Rutas ajustadas correctamente para todos los archivos.'); 