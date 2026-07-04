# Galería estática

Esta carpeta contiene las imágenes que se muestran en `gallery.html`.

GitHub Pages no ejecuta PHP, así que cada imagen publicada debe agregarse también en `gallery.json`:

```json
{
  "src": "assets/gallery/mi-imagen.png",
  "title": "Mi imagen",
  "text": "Descripción opcional"
}
```

Formatos recomendados: JPG, PNG, WebP, GIF o AVIF.
