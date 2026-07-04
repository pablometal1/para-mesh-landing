# Para-Mesh Landing Page

Sitio estático de Para-Mesh preparado para publicarse en GitHub Pages.

## Estructura

- `index.html`: página principal.
- `gallery.html`: galería pública.
- `DocumentationContent.js`: contenido del modal de documentación.
- `assets/`: imágenes del sitio.
- `assets/gallery/gallery.json`: listado estático de imágenes para la galería.

## Probar en local

Sirve la carpeta con un servidor local:

```bash
python -m http.server 8080
```

Luego abre:

```text
http://localhost:8080
```

Evita abrir `gallery.html` directamente con doble clic, porque la galería carga `gallery.json` con `fetch` y necesita un servidor.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube todos los archivos de este proyecto a la rama `main`.
3. En GitHub, ve a `Settings` -> `Pages`.
4. En `Build and deployment`, elige `GitHub Actions`.
5. El workflow incluido en `.github/workflows/pages.yml` publicará el sitio automáticamente en cada push a `main`.

También puedes publicar sin Actions desde `Settings` -> `Pages` usando `Deploy from a branch`, rama `main`, carpeta `/root`.

## Cambiar enlace de Gumroad

En `index.html` y `gallery.html`, busca:

```js
gumroadUrl: 'https://gumroad.com/l/para-mesh'
```

Cámbialo por tu URL real de Gumroad.

## Agregar imágenes a la galería

1. Copia las imágenes dentro de `assets/gallery/`.
2. Agrega cada imagen en `assets/gallery/gallery.json`:

```json
{
  "src": "assets/gallery/mi-imagen.png",
  "title": "Mi imagen",
  "text": "Descripción opcional"
}
```

Formatos recomendados: JPG, PNG, WebP, GIF o AVIF.

GitHub Pages es hosting estático, por eso la galería usa `gallery.json` en lugar de PHP.
