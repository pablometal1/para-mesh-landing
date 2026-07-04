<template>
  <div v-cloak>

      <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" class="flex items-center gap-3">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan text-sm font-black shadow-glow">3D</div>
            <div class="text-xl font-black tracking-tight">Para<span class="text-brand">-Mesh</span></div>
          </a>

          <nav class="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a v-for="item in nav" :href="item.href" class="transition hover:text-white" v-text="item.label"></a>
          </nav>

          <a :href="gumroadUrl" target="_blank" rel="noopener" class="rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-500">
            Comprar en Gumroad
          </a>
        </div>
        <nav class="flex gap-5 overflow-x-auto border-t border-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-300 md:hidden">
          <a v-for="item in nav" :href="item.href" class="shrink-0 transition hover:text-white" v-text="item.label"></a>
        </nav>
      </header>

      <main>
        <section id="inicio" class="relative isolate overflow-hidden pt-28 lg:pt-36">
          <div class="mesh-bg absolute inset-0 -z-10 opacity-80"></div>
          <div class="absolute left-1/2 top-28 -z-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]"></div>

          <div class="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-28">
            <div>
              <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan">
                Software 3D paramétrico
              </div>
              <h1 class="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-white md:text-6xl xl:text-7xl">
                Modelado paramétrico 3D para <span class="bg-gradient-to-r from-brand to-cyan bg-clip-text text-transparent">impresión 3D</span> y diseño decorativo.
              </h1>
              <p class="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Crea en minutos lo que en software 3D tradicional puede llevar horas, sin una curva de aprendizaje compleja.
              </p>

              <div class="mt-9 flex flex-col gap-4 sm:flex-row">
                <a :href="gumroadUrl" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-2xl bg-brand px-7 py-4 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Comprar en Gumroad
                  <span class="ml-2">→</span>
                </a>
                <a href="#funciones" class="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:border-brand/60 hover:bg-brand/10">
                  Ver funciones
                </a>
              </div>

              <div class="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-300">
                <div v-for="benefit in heroBenefits" class="rounded-2xl border border-white/10 bg-white/[.03] p-4">
                  <div class="mb-3 text-2xl text-cyan" v-text="benefit.icon"></div>
                  <div class="font-semibold text-white" v-text="benefit.title"></div>
                  <div class="mt-1 text-xs leading-5 text-slate-400" v-text="benefit.text"></div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-brand/30 to-cyan/10 blur-3xl"></div>
              <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-card backdrop-blur">
                <img src="../assets/hero-banner.png" alt="Hero de Para-Mesh" class="w-full rounded-[1.5rem] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="funciones" class="border-y border-white/10 bg-white/[.025] py-20">
          <div class="mx-auto max-w-7xl px-5 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
              <div class="mb-4 inline-flex rounded-full bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan">Potencia paramétrica</div>
              <h2 class="text-4xl font-black tracking-tight text-white md:text-5xl">Todo lo que necesitas para crear sin límites.</h2>
              <p class="mt-5 text-lg text-slate-300">Perfiles, modificadores, heightmaps y exportación listos para un flujo real de impresión 3D.</p>
            </div>

            <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <article v-for="feature in features" class="group rounded-3xl border border-white/10 bg-panel/70 p-6 shadow-card transition hover:-translate-y-1 hover:border-brand/40 hover:bg-panel">
                <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-2xl text-cyan" v-text="feature.icon"></div>
                <h3 class="text-xl font-black text-white" v-text="feature.title"></h3>
                <p class="mt-3 leading-7 text-slate-400" v-text="feature.text"></p>
              </article>
            </div>
          </div>
        </section>

        <section id="galeria" class="py-20">
          <div class="mx-auto max-w-7xl px-5 lg:px-8">
            <div class="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div class="mb-4 inline-flex rounded-full bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan">Galería</div>
                <h2 class="text-4xl font-black tracking-tight text-white md:text-5xl">Modelos creados con Para-Mesh</h2>
              </div>
              <p class="max-w-xl text-slate-300">Desde vasos paramétricos hasta macetas orgánicas creadas con barrido por spline.</p>
            </div>

            <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <article v-for="item in gallery" class="overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] shadow-card">
                <div class="aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand/15 to-white/5">
                  <img :src="item.src" :alt="item.title" class="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div class="p-5">
                  <h3 class="font-black text-white" v-text="item.title"></h3>
                  <p class="mt-2 text-sm leading-6 text-slate-400" v-text="item.text"></p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section class="py-20">
          <div class="mx-auto max-w-7xl px-5 lg:px-8">
            <div class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] p-3 shadow-card">
              <img src="../assets/feature-showcase.png" alt="Funciones principales de Para-Mesh" class="w-full rounded-[1.5rem] object-cover" />
            </div>
          </div>
        </section>

        <section id="precios" class="py-20">
          <div class="mx-auto max-w-7xl px-5 lg:px-8">
            <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div class="mb-4 inline-flex rounded-full bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan">Para makers y diseñadores</div>
                <h2 class="text-4xl font-black tracking-tight text-white md:text-5xl">Diseña más rápido. Exporta sin complicaciones.</h2>
                <p class="mt-6 text-lg leading-8 text-slate-300">Para-Mesh no busca reemplazar un CAD completo: está especializado en crear objetos decorativos imprimibles mucho más rápido, con una interfaz visual y parámetros fáciles de ajustar.</p>
              </div>

              <div class="rounded-[2rem] border border-brand/30 bg-gradient-to-br from-brand/15 to-white/[.035] p-8 shadow-glow">
                <div class="flex items-start justify-between gap-6">
                  <div>
                    <h3 class="text-2xl font-black text-white">Para-Mesh Early Access</h3>
                    <p class="mt-2 text-slate-300">Pago único. Sin suscripciones.</p>
                  </div>
                  <div class="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-cyan">STL / 3MF</div>
                </div>

                <ul class="mt-8 space-y-4 text-slate-300">
                  <li v-for="item in priceItems" class="flex gap-3"><span class="text-cyan">✓</span><span v-text="item"></span></li>
                </ul>

                <a :href="gumroadUrl" target="_blank" rel="noopener" class="mt-8 flex w-full items-center justify-center rounded-2xl bg-brand px-7 py-4 text-base font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Comprar en Gumroad
                  <span class="ml-2">→</span>
                </a>
                <p class="mt-4 text-center text-sm text-slate-400">Cambia la URL del botón por tu enlace real de Gumroad.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="pb-24">
          <div class="mx-auto max-w-7xl px-5 lg:px-8">
            <div class="topo overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-panel to-ink p-8 shadow-card md:p-12">
              <div class="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h2 class="text-4xl font-black tracking-tight text-white">Crea sin límites. <br />Imprime sin complicaciones.</h2>
                  <p class="mt-4 max-w-2xl text-lg text-slate-300">Transforma ideas en modelos 3D listos para laminar usando perfiles, splines, modificadores y relieves desde imágenes.</p>
                </div>
                <a :href="gumroadUrl" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-2xl bg-brand px-8 py-4 text-base font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Comprar en Gumroad
                  <span class="ml-2">→</span>
                </a>
              </div>
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
            <div class="mt-3 grid gap-2"><a href="#funciones">Funciones</a><a href="gallery.html">Galería</a><a href="#precios">Precios</a></div>
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
  </div>
</template>

<script src="./HomeApp-options.js"></script>
