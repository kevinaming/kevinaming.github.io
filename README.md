# Calendario de Charlas de Alfabetización Digital 2026–2027

Sitio web estático — sin backend, sin base de datos, sin servicios que requieran autenticación. Todo el contenido (calendario, horario, almanaque, buscador) vive en archivos HTML, CSS y JavaScript planos.

## Estructura del proyecto

```
charlas-alfabetizacion-digital/
├── index.html          ← página principal
├── css/
│   └── styles.css      ← todos los estilos
├── js/
│   ├── data.js          ← índice de búsqueda (constantes JS)
│   ├── i18n.js           ← diccionario y traductor ES/EN
│   ├── qrcode.js          ← generador de códigos QR (vendored)
│   └── main.js          ← lógica de pestañas, buscador, almanaque, pizarra, QR e ICS
└── README.md
```

La única dependencia externa es la hoja de tipografías de Google Fonts (Fraunces, Work Sans, IBM Plex Mono), cargada por CDN público — no requiere clave ni cuenta.

## Cómo desplegar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser público o privado con GitHub Pro/Team/Enterprise).
2. Copia el contenido de esta carpeta (`index.html`, `css/`, `js/`) a la raíz del repositorio.
3. Sube los archivos:
   ```bash
   git init
   git add .
   git commit -m "Publicar calendario de charlas de alfabetización digital"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repositorio>.git
   git push -u origin main
   ```
4. En GitHub, ve a **Settings → Pages**.
5. En "Build and deployment", selecciona **Deploy from a branch**.
6. Elige la rama `main` y la carpeta `/ (root)`, luego **Save**.
7. En un par de minutos el sitio quedará publicado en:
   `https://<tu-usuario>.github.io/<tu-repositorio>/`

## Cómo probarlo localmente antes de publicar

Como el sitio usa rutas relativas (`css/styles.css`, `js/data.js`, `js/main.js`), basta con abrir `index.html` directamente en el navegador — no hace falta servidor. Si prefieres simular exactamente cómo se verá en GitHub Pages, puedes levantar un servidor simple:

```bash
cd charlas-alfabetizacion-digital
python3 -m http.server 8000
```

y visitar `http://localhost:8000` en el navegador.

## Actualizar el contenido

- **Fechas, temas y rotaciones**: viven directamente en `index.html` (la tabla semanal, las pestañas/paneles de cada grupo y el almanaque ya están renderizados como HTML estático).
- **Índice del buscador**: `js/data.js` (constante `SEARCH_INDEX`).
- **Traducciones ES/EN**: `js/i18n.js`.
- **Estilos, colores, tipografía**: `css/styles.css`.
- **Comportamiento de pestañas, buscador, almanaque, modo pizarra y exportación a calendario**: `js/main.js`.

No hay build step ni compilación: cualquier edición a estos archivos se refleja de inmediato al recargar la página.
