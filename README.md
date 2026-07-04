# Para-Mesh Landing Page

Sitio estático de Para-Mesh preparado para publicarse en GitHub Pages.

## Estructura

- `index.html`: página principal.
- `gallery.html`: galería pública.
- `DocumentationContent.js`: contenido del modal de documentación.
- `assets/`: imágenes del sitio.
- `assets/gallery/gallery.json`: títulos y descripciones opcionales para la galería.

## Probar en local

Instala dependencias:

```bash
npm install
```

Levanta Vite en modo desarrollo:

```bash
npm run dev
```

Compila producción:

```bash
npm run build
```

Previsualiza el build:

```bash
npm run preview
```

La URL local usa la misma base que GitHub Pages:

```text
http://127.0.0.1:5173/para-mesh-landing/
```

Evita abrir `gallery.html` directamente con doble clic, porque la galería carga datos con `fetch` y necesita un servidor.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube todos los archivos de este proyecto a la rama `main`.
3. En GitHub, ve a `Settings` -> `Pages`.
4. En `Build and deployment`, elige `GitHub Actions`.
5. El workflow `.github/workflows/pages.yml` compila Vite y publica `dist`.

Con esa configuración, GitHub Pages publica el sitio automáticamente en cada push a `main`.

## Cambiar enlace de Gumroad

En `index.html` y `gallery.html`, busca:

```js
gumroadUrl: 'https://gumroad.com/l/para-mesh'
```

Cámbialo por tu URL real de Gumroad.

## Agregar imágenes a la galería

En GitHub Pages, alcanza con subir las imágenes dentro de `assets/gallery/` en la rama `main`.

La página lee automáticamente esa carpeta desde la API pública de GitHub y muestra los archivos JPG, PNG, WebP, GIF o AVIF.

Si querés personalizar el título o la descripción, agrega una entrada opcional en `assets/gallery/gallery.json`:

```json
{
  "src": "assets/gallery/mi-imagen.png",
  "title": "Mi imagen",
  "text": "Descripción opcional"
}
```

Si una imagen no está en `gallery.json`, la página genera el título desde el nombre del archivo.
