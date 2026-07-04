<template>
  <div v-cloak>

      <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="index.html#inicio" class="flex items-center gap-3">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan text-sm font-black shadow-glow">3D</div>
            <div class="text-xl font-black tracking-tight">Para<span class="text-brand">-Mesh</span></div>
          </a>

          <nav class="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a v-for="item in nav" :href="item.href" class="transition hover:text-white" :class="{ 'text-white': item.active }" v-text="item.label"></a>
          </nav>

          <a :href="gumroadUrl" target="_blank" rel="noopener" class="rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-500">
            Comprar en Gumroad
          </a>
        </div>
        <nav class="flex gap-5 overflow-x-auto border-t border-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-300 md:hidden">
          <a v-for="item in nav" :href="item.href" class="shrink-0 transition hover:text-white" :class="{ 'text-white': item.active }" v-text="item.label"></a>
        </nav>
      </header>

      <main>
        <section class="relative isolate overflow-hidden pt-28 lg:pt-36">
          <div class="mesh-bg absolute inset-0 -z-10 opacity-80"></div>
          <div class="absolute left-1/2 top-28 -z-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]"></div>

          <div class="mx-auto max-w-7xl px-5 pb-14 lg:px-8">
            <div class="max-w-4xl">
              <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan">
                Galería Para-Mesh
              </div>
              <h1 class="text-5xl font-black leading-[1.02] tracking-tight text-white md:text-6xl xl:text-7xl">
                Imágenes y modelos creados con <span class="bg-gradient-to-r from-brand to-cyan bg-clip-text text-transparent">Para-Mesh</span>.
              </h1>
              <p class="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Explora piezas paramétricas creadas con Para-Mesh: floreros, vasos, lámparas y superficies decorativas listas para impresión 3D.
              </p>
            </div>
          </div>
        </section>

        <section class="pb-24">
          <div class="mx-auto max-w-7xl px-5 lg:px-8">
            <div v-if="galleryStatus === 'loading'" class="rounded-2xl border border-white/10 bg-white/[.035] p-6 text-sm text-slate-300">
              Cargando imágenes de la galería...
            </div>

            <div v-else-if="images.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <article v-for="(image, index) in images" :key="image.src" class="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] shadow-card">
                <button type="button" class="block w-full text-left" @click="openViewer(index)">
                  <span class="block aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand/15 to-white/5">
                    <img :src="image.src" :alt="image.title" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </span>
                  <span class="block p-5">
                    <span class="block font-black text-white" v-text="image.title"></span>
                    <span v-if="image.text" class="mt-2 block text-sm leading-6 text-slate-400" v-text="image.text"></span>
                  </span>
                </button>
              </article>
            </div>

            <div v-else class="rounded-2xl border border-dashed border-white/15 bg-white/[.025] p-8 text-sm leading-6 text-slate-400">
              Todavía no hay imágenes publicadas. Agrega archivos JPG, PNG, WebP, GIF o AVIF en <span class="font-semibold text-slate-200">assets/gallery/</span>.
            </div>
          </div>
        </section>
      </main>

      <footer id="documentacion" class="border-t border-white/10 py-10">
        <div class="mx-auto grid max-w-7xl gap-8 px-5 text-sm text-slate-400 md:grid-cols-4 lg:px-8">
          <div>
            <div class="text-2xl font-black text-white">Para<span class="text-brand">-Mesh</span></div>
            <p class="mt-3 leading-6">Software 3D paramétrico para impresión 3D y diseño decorativo.</p>
          </div>
          <div>
            <h4 class="font-bold text-white">Producto</h4>
            <div class="mt-3 grid gap-2"><a href="index.html#funciones">Funciones</a><a href="gallery.html">Galería</a><a href="index.html#precios">Precios</a></div>
          </div>
          <div>
            <h4 class="font-bold text-white">Recursos</h4>
            <div class="mt-3 grid gap-2"><a href="#documentacion">Documentación</a><a href="#">Guía rápida</a><a href="#">Soporte</a></div>
          </div>
          <div>
            <h4 class="font-bold text-white">Legal</h4>
            <div class="mt-3 grid gap-2"><a href="#">Términos de uso</a><a href="#">Política de privacidad</a><span>© 2026 Para-Mesh</span></div>
          </div>
        </div>
      </footer>

      <div v-if="viewerOpen" class="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" @click.self="closeViewer">
        <button type="button" class="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl font-bold text-white transition hover:bg-white/20" aria-label="Cerrar visor" @click="closeViewer">×</button>

        <button type="button" class="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-4xl font-bold text-white transition hover:bg-white/20 md:left-8" aria-label="Imagen anterior" @click.stop="previousImage">‹</button>

        <figure class="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4">
          <img :src="currentImage.src" :alt="currentImage.title" class="max-h-[78vh] w-auto max-w-full rounded-2xl border border-white/10 object-contain shadow-card" />
          <figcaption class="max-w-3xl text-center">
            <h2 class="text-xl font-black text-white" v-text="currentImage.title"></h2>
            <p v-if="currentImage.text" class="mt-2 text-sm leading-6 text-slate-300" v-text="currentImage.text"></p>
            <p class="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan" v-text="`${currentIndex + 1} / ${images.length}`"></p>
          </figcaption>
        </figure>

        <button type="button" class="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-4xl font-bold text-white transition hover:bg-white/20 md:right-8" aria-label="Imagen siguiente" @click.stop="nextImage">›</button>
      </div>
  </div>
</template>

<script src="./GalleryApp-options.js"></script>
