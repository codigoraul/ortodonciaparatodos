#!/bin/bash

# Obtener la fecha actual
DATE=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_NAME="basico_backup_$DATE.zip"
BACKUP_DIR="$HOME/Documents/RespaldosASTRO"

# Crear directorio de respaldos
echo "📁 Creando directorio de respaldos..."
mkdir -p "$BACKUP_DIR"

# Crear el archivo zip
echo "📦 Creando respaldo..."
zip -r "$BACKUP_DIR/$BACKUP_NAME" . \
    -x "node_modules/*" \
    -x ".git/*" \
    -x "dist/*" \
    -x ".DS_Store" \
    -x "*.zip" \
    -x "backups/*"

# Verificar si el respaldo se creó correctamente
if [ -f "$BACKUP_DIR/$BACKUP_NAME" ]; then
    echo "✅ Respaldo creado exitosamente!"
    echo "📁 Ubicación: $BACKUP_DIR/$BACKUP_NAME"
    echo ""
    echo "📝 Instrucciones para mover al disco externo:"
    echo "1. Abre el Finder"
    echo "2. Ve a la carpeta: $BACKUP_DIR"
    echo "3. Arrastra el archivo $BACKUP_NAME a tu disco DISCODURO-R"
    echo ""
    echo "📝 Recomendaciones:"
    echo "1. Mantén al menos 3 respaldos recientes"
    echo "2. Verifica periódicamente que los respaldos sean accesibles"
    echo "3. Considera tener un segundo disco para respaldos adicionales"
else
    echo "❌ Error al crear el respaldo. Por favor intenta nuevamente."
fi 