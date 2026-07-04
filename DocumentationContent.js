/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const MODIFIER_DOCS = [
  {
    name: 'Wave Studio',
    type: 'wave_studio',
    es: {
      use: 'Centro principal para ondas decorativas: flujo vertical, lobulos radiales, onda helicoidal, agua, dunas, ruido organico y pliegues.',
      controls: 'Preset visual, amplitud, frecuencia, fase, desplazamiento, fades, variacion vertical/radial, asimetria, seed, armonicos, twist y preservar espesor.',
      goodFor: 'Agua, dunas, ceramica artesanal, pantallas decorativas y superficies organicas.'
    },
    en: {
      use: 'Main studio for decorative waves: vertical flow, radial lobes, helical waves, water ripples, dunes, organic noise and pleats.',
      controls: 'Visual preset, amplitude, frequency, phase, offset, fades, vertical/radial variation, asymmetry, seed, harmonics, twist and wall preservation.',
      goodFor: 'Water, dunes, handmade ceramics, decorative lamp shades and organic surfaces.'
    }
  },
  {
    name: 'Ondulaciones',
    type: 'wave_profile_waves',
    es: {
      use: 'Replica la antigua funcion de ondas del perfil como modificador apilable, con orientacion vertical u horizontal.',
      controls: 'Orientacion, frecuencia hasta 100 ciclos, amplitud, suavizado de extremos y preservar espesor.',
      goodFor: 'Texturas repetitivas simples, anillos horizontales, ondas verticales y ajustes rapidos.'
    },
    en: {
      use: 'Turns the former profile-wave feature into a stackable modifier with vertical or horizontal orientation.',
      controls: 'Orientation, frequency up to 100 cycles, amplitude, edge smoothing and wall preservation.',
      goodFor: 'Simple repeating textures, horizontal rings, vertical waves and fast adjustments.'
    }
  },
  {
    name: 'Spiral Vase Grooves',
    type: 'spiral_vase_grooves',
    es: {
      use: 'Crea ranuras helicoidales o nervios salientes usando la opcion Invertir.',
      controls: 'Estilo simple/doble, torsion, ancho, profundidad, bisel, invertir, densidad radial/vertical, fades y suavizado.',
      goodFor: 'Floreros modernos, vasos con ranuras continuas y pantallas con textura espiral.'
    },
    en: {
      use: 'Creates helical grooves or raised ribs using the Invert option.',
      controls: 'Single/double style, twist, width, depth, bevel, invert, radial/vertical density, fades and smoothing.',
      goodFor: 'Modern vases, continuous spiral grooves and lamp shades with helical texture.'
    }
  },
  {
    name: 'Diagonal Ribbed Panel',
    type: 'diagonal_ribbed_panel',
    es: {
      use: 'Genera nervios en arreglo circular y los recorta con una diagonal proyectada sobre el modelo.',
      controls: 'Cantidad, profundidad, ancho, dureza, modo ranura, cobertura, pendiente, offset, limites verticales, suavizado e inclinacion.',
      goodFor: 'Floreros con lineas cortadas en diagonal y paneles decorativos modernos.'
    },
    en: {
      use: 'Generates circular ribs and clips them with a projected diagonal boundary.',
      controls: 'Count, depth, width, sharpness, groove mode, coverage, slope, offset, vertical limits, softness and rib angle.',
      goodFor: 'Vases with diagonal rib cuts and modern decorative ribbed panels.'
    }
  },
  {
    name: 'Boca inclinada',
    type: 'rim_tilt',
    es: {
      use: 'Inclina la boca superior como si el modelo estuviera cortado por un plano inclinado.',
      controls: 'Activar, intensidad, direccion, altura de influencia, suavizado y preservar base.',
      goodFor: 'Floreros asimetricos, pantallas con boca dinamica y piezas escultoricas.'
    },
    en: {
      use: 'Tilts the upper rim as if the model were cut by an angled plane.',
      controls: 'Enable, intensity, direction, influence height, smoothing and preserve bottom.',
      goodFor: 'Asymmetric vases, dynamic lamp-shade rims and sculptural objects.'
    }
  },
  {
    name: 'Boca ondulada',
    type: 'rim_wave',
    es: {
      use: 'Genera un borde superior ondulado alrededor de la boca.',
      controls: 'Amplitud, cantidad de ondas, rotacion, altura de influencia, suavizado y preservar base.',
      goodFor: 'Bordes organicos, floreros decorativos y pantallas suaves.'
    },
    en: {
      use: 'Creates a wavy upper rim around the opening.',
      controls: 'Amplitude, wave count, rotation, influence height, smoothing and preserve bottom.',
      goodFor: 'Organic rims, decorative vases and soft lamp-shade profiles.'
    }
  },
  {
    name: 'Aro de boca',
    type: 'rim_torus',
    es: {
      use: 'Agrega un aro 3D redondeado tipo torus en la boca superior.',
      controls: 'Grosor, altura, desplazamiento exterior, blend, redondez, resolucion, modo exterior/interior/centrado y mantener boca abierta.',
      goodFor: 'Reforzar o decorar la boca de vasos, floreros y pantallas imprimibles.'
    },
    en: {
      use: 'Adds a rounded 3D torus-like lip to the upper opening.',
      controls: 'Thickness, height, outward offset, blend, roundness, resolution, outside/inside/centered mode and preserve opening.',
      goodFor: 'Reinforcing or decorating the rim of printable cups, vases and lamp shades.'
    }
  },
  {
    name: 'Corte ondulado',
    type: 'wave_cut_mask',
    es: {
      use: 'Mezcla geometria base y geometria modificada usando una frontera ondulada.',
      controls: 'Posicion vertical, amplitud, frecuencia, rotacion, suavizado e invertir arriba/abajo.',
      goodFor: 'Zonas lisas y zonas con relieve separadas por una transicion ondulada.'
    },
    en: {
      use: 'Blends base geometry and modified geometry using a wavy height boundary.',
      controls: 'Vertical position, amplitude, frequency, rotation, softness and invert top/bottom.',
      goodFor: 'Smooth and textured areas separated by a wavy transition.'
    }
  },
  {
    name: 'Imagen Heightmap',
    type: 'image_heightmap',
    es: {
      use: 'Convierte una imagen en relieve real sobre la superficie del modelo dentro de la pila de modificadores.',
      controls: 'Cargar/quitar imagen, intensidad, escala, offset, repeticion, suavizado, brillo, contraste, gamma, opacidad y modo de mezcla.',
      goodFor: 'Relieves desde ilustraciones, patrones decorativos, logotipos, flores, texturas y mascaras combinadas.'
    },
    en: {
      use: 'Converts an image into real geometric relief inside the modifier stack.',
      controls: 'Load/remove image, intensity, scale, offset, repeat, smoothing, brightness, contrast, gamma, opacity and blend mode.',
      goodFor: 'Relief from illustrations, decorative patterns, logos, flowers, textures and combined masks.'
    }
  },
  {
    name: 'Limpiar bordes',
    type: 'edge_effect_cleaner',
    es: {
      use: 'Restaura la forma limpia original cerca de la boca y la base despues de aplicar modificadores.',
      controls: 'Eliminar abajo, eliminar arriba, intensidad y tipo de transicion.',
      goodFor: 'Quitar puntas, nervios o relieves molestos en bordes.'
    },
    en: {
      use: 'Restores the clean original shape near rim and base after modifiers.',
      controls: 'Bottom cleanup, top cleanup, strength and transition type.',
      goodFor: 'Removing unwanted tips, ribs or relief near edges.'
    }
  },
  {
    name: 'Twist / Torsion Z',
    type: 'twist',
    es: {
      use: 'Retuerce el modelo progresivamente desde la base hasta arriba.',
      controls: 'Angulo total de torsion.',
      goodFor: 'Pantallas helicoidales, vasos dinamicos y piezas escultoricas.'
    },
    en: {
      use: 'Progressively twists the model from bottom to top.',
      controls: 'Total twist angle.',
      goodFor: 'Helical shades, dynamic cups and sculptural pieces.'
    }
  },
  {
    name: 'Ruido / Relieve',
    type: 'noise',
    es: {
      use: 'Agrega relieve procedural con estilos organico, anillos ceramicos o facetas.',
      controls: 'Estilo, profundidad y escala/frecuencia.',
      goodFor: 'Acabados artesanales, superficies tactiles y piezas menos perfectas.'
    },
    en: {
      use: 'Adds procedural relief with organic, ceramic ring or faceted styles.',
      controls: 'Style, depth and scale/frequency.',
      goodFor: 'Handmade finishes, tactile surfaces and less-perfect objects.'
    }
  },
  {
    name: 'Pinch / Bend / Skew',
    type: 'pinch, bend, skew',
    es: {
      use: 'Deformaciones globales para pellizcar, curvar o cizallar el cuerpo.',
      controls: 'Intensidad, posicion o amplitud segun el modificador.',
      goodFor: 'Cinturas, inclinaciones, gestos escultoricos y formas biomorficas.'
    },
    en: {
      use: 'Global deformations to pinch, bend or skew the body.',
      controls: 'Strength, position or amplitude depending on the modifier.',
      goodFor: 'Waists, leaning forms, sculptural gestures and biomorphic shapes.'
    }
  },
  {
    name: 'Hexagonal / Honeycomb',
    type: 'hexagonal, honeycomb',
    es: {
      use: 'Patrones geometricos y celulares aplicados como relieve.',
      controls: 'Relieve, frecuencia X, frecuencia Y y nitidez.',
      goodFor: 'Pantallas tecnicas, superficies celulares, mosaicos y diseno generativo.'
    },
    en: {
      use: 'Geometric and cellular patterns applied as relief.',
      controls: 'Relief, X frequency, Y frequency and sharpness.',
      goodFor: 'Technical shades, cellular surfaces, mosaics and generative design.'
    }
  },
  {
    name: 'Procedural Polygons',
    type: 'procedural_polygons',
    es: {
      use: 'Genera celdas poligonales procedurales con caras planas y juntas biseladas.',
      controls: 'Relieve, frecuencia, contraste, separacion, suavizado interior e invertir hacia adentro.',
      goodFor: 'Floreros facetados, ceramica generativa y superficies tipo mosaico organico.'
    },
    en: {
      use: 'Creates procedural polygon cells with flat facets and beveled seams.',
      controls: 'Relief, frequency, contrast, gap, inner smoothing and inward inversion.',
      goodFor: 'Faceted vases, generative ceramics and organic mosaic surfaces.'
    }
  },
  {
    name: 'Triangular / Escamas / Diamante / Cuadricula',
    type: 'triangular, scales, diamond, grid',
    es: {
      use: 'Patrones repetitivos de facetas, escamas, rombos y bloques.',
      controls: 'Relieve, frecuencia X, frecuencia Y y nitidez.',
      goodFor: 'Texturas tactiles, objetos graficos y disenos decorativos.'
    },
    en: {
      use: 'Repeating patterns of facets, scales, diamonds and blocks.',
      controls: 'Relief, X frequency, Y frequency and sharpness.',
      goodFor: 'Tactile textures, graphic objects and decorative designs.'
    }
  },
  {
    name: 'Gyroid',
    type: 'gyroid',
    es: {
      use: 'Agrega canales fluidos inspirados en estructuras triperiodicas.',
      controls: 'Amplitud y frecuencia.',
      goodFor: 'Lamparas organicas, macetas generativas y piezas tecnico-organicas.'
    },
    en: {
      use: 'Adds flowing channels inspired by triply periodic structures.',
      controls: 'Amplitude and frequency.',
      goodFor: 'Organic lamps, generative planters and technical-organic objects.'
    }
  },
  {
    name: 'Helical Flutes / Helical Bulged Flutes',
    type: 'helical_flutes, helical_bulged_flutes',
    es: {
      use: 'Crea estrias helicoidales simples o estrias finas combinadas con lobulos grandes.',
      controls: 'Cantidad, profundidad, ancho, torsion, lobulos, suavidad, preservar pared y fades.',
      goodFor: 'Pantallas organicas, columnas decorativas y piezas de alto valor visual.'
    },
    en: {
      use: 'Creates simple helical flutes or fine ribs combined with large lobes.',
      controls: 'Count, depth, width, twist, lobes, softness, wall preservation and fades.',
      goodFor: 'Organic shades, decorative columns and high-visual-value objects.'
    }
  },
  {
    name: 'Corte portalampara',
    type: 'bottom_lamp_hole',
    es: {
      use: 'Agrega un hueco cilindrico inferior para portalamparas, cables o herrajes.',
      controls: 'Activar, radio del hueco y altura de base.',
      goodFor: 'Pantallas, lamparas de mesa y piezas con montaje electrico.'
    },
    en: {
      use: 'Adds a cylindrical bottom hole for bulb holders, cables or hardware.',
      controls: 'Enable, hole radius and base height.',
      goodFor: 'Lamp shades, table lamps and objects with electrical mounting.'
    }
  }
];

const COPY = {
  es: {
    langName: 'Espanol',
    title: 'Documentacion de PARA-MESH',
    subtitle: 'Guia de uso, flujo de trabajo y referencia de modificadores.',
    close: 'Cerrar',
    navTitle: 'Secciones',
    sections: [
      ['Que es', 'docs-es-overview'],
      ['Flujo', 'docs-es-workflow'],
      ['Interfaz', 'docs-es-interface'],
      ['Plantillas', 'docs-es-presets'],
      ['Orden de pila', 'docs-es-stack'],
      ['Medidas', 'docs-es-measures'],
      ['Modo lampara', 'docs-es-lamp'],
      ['Calidad y exportacion', 'docs-es-quality'],
      ['Heightmap', 'docs-es-heightmap'],
      ['Render', 'docs-es-render'],
      ['Impresion 3D', 'docs-es-print'],
      ['Modificadores', 'docs-es-modifiers']
    ],
    overviewTitle: 'PARA-MESH es un CAD parametrico creativo para impresion 3D.',
    overviewText: 'Permite disenar vasos, floreros, jarrones, macetas, pantallas de lamparas y objetos escultoricos a partir de una malla base editable. Defines dimensiones, perfil, seccion transversal, calidad geometrica y una pila de modificadores.',
    workflowTitle: 'Flujo basico',
    workflow: [
      ['Base', 'Ajusta altura, radios, pared, modo vaso/lampara, calidad geometrica y fondo.'],
      ['Perfil', 'Dibuja la silueta con el editor spline 2D o con el editor directo sobre el modelo.'],
      ['Seccion', 'Cambia la seccion transversal: curva, dura, poligonal o libre.'],
      ['Modificadores', 'Apila ondas, ranuras, torsion, relieves, cortes, patrones y herramientas de fabricacion.']
    ],
    interfaceTitle: 'Interfaz y paneles',
    interfaceText: 'El panel izquierdo concentra geometria base y ajustes. El panel derecho usa pestanas para Diseno, Modificadores y Render. Los modificadores pueden arrastrarse arriba/abajo para cambiar el orden. Los editores spline pueden abrirse en ventana flotante y el perfil tambien puede editarse directamente en el modelo 3D.',
    presetsTitle: 'Plantillas rapidas',
    presetsText: 'La ventana de plantillas funciona como una galeria grande. Puedes cargar plantillas predefinidas, guardar disenos propios con captura del viewport, eliminar plantillas de usuario y ocultar plantillas predefinidas sin borrar datos internos del proyecto.',
    stackTitle: 'Orden de la pila de modificadores',
    stackText: 'Los modificadores se aplican de arriba hacia abajo. Cada modificador trabaja sobre la geometria que dejo el anterior, por eso el orden puede cambiar el resultado.',
    stackTips: [
      ['Forma general primero', 'Usa Twist, Bend, Skew, Wave Studio o deformaciones globales antes de los detalles si quieres modificar todo el cuerpo.'],
      ['Detalles despues', 'Agrega ranuras, heightmaps, poligonos o relieves cuando la forma principal ya este definida.'],
      ['Detalles deformados', 'Si quieres que un detalle tambien sea deformado, pon el detalle antes. Ejemplo: Aro de boca primero y Boca inclinada despues para que el aro quede inclinado.']
    ],
    measuresTitle: 'Medidas Base y Final',
    measuresText: 'En Informacion del Slicer, Base muestra las dimensiones principales definidas por altura y radios. Final muestra el tamano real de la geometria exportable, incluyendo modificadores, heightmaps, nervios, ranuras y relieves. Valida siempre el modelo final en el slicer.',
    lampTitle: 'Modo vaso y modo lampara',
    lampText: 'En modo vaso la pieza conserva espesor normal. En modo lampara se usa una pared exterior delgada y ajustable para pantallas translucidas. Puedes sellar base y usar el modificador Corte portalampara para huecos de montaje.',
    qualityTitle: 'Calidad, preview y exportacion',
    qualityText: 'Calidad geometrica controla la densidad de la malla antes de aplicar modificadores. Calidad preview permite editar mas fluido. La exportacion STL/3MF tiene niveles Estandar, Alta y Ultra independientes del preview. Ultra puede generar archivos grandes.',
    heightmapTitle: 'Heightmap e Imagen Heightmap',
    heightmapText: 'El Heightmap global queda como opcion avanzada. La opcion recomendada es Imagen Heightmap dentro de la pila de modificadores, porque permite combinar varias imagenes, renombrarlas, ordenar capas y usar modos de mezcla: Sumar, Maximo y Restar.',
    renderTitle: 'Render de producto',
    renderText: 'La pestana Render permite generar imagenes de producto sin salir de PARA-MESH. Incluye material visual, escenas de estudio, HDRI cargable, exposicion, calidad de render, sombras, luces Key/Fill/Rim, luces de area, Light Probe, oclusion ambiental, bloom, contraste, saturacion, luz interna calida para lamparas y exportacion PNG en resoluciones predefinidas. Usa Estudio blanco o Catalogo neutro para fichas de producto, Estudio oscuro o Escritorio nocturno para lamparas, y Ultra cuando necesites sombras mas finas y mayor detalle visual.',
    printTitle: 'Consejos de impresion 3D',
    printTips: [
      'Para pantallas de lampara, usa pared fina, material translucido y patrones que no cierren demasiado la luz.',
      'Para vasos o floreros, conserva pared suficiente, revisa base sellada y evita ranuras demasiado profundas si necesitas estanqueidad.',
      'Si ves bordes pixelados en detalles finos, sube Calidad geometrica o revisa la densidad del modificador.'
    ],
    modifiersTitle: 'Referencia de modificadores',
    controlsLabel: 'Controles',
    goodForLabel: 'Ideal para'
  },
  en: {
    langName: 'English',
    title: 'PARA-MESH Documentation',
    subtitle: 'User guide, workflow and modifier reference.',
    close: 'Close',
    navTitle: 'Sections',
    sections: [
      ['What it is', 'docs-en-overview'],
      ['Workflow', 'docs-en-workflow'],
      ['Interface', 'docs-en-interface'],
      ['Presets', 'docs-en-presets'],
      ['Stack order', 'docs-en-stack'],
      ['Measures', 'docs-en-measures'],
      ['Lamp mode', 'docs-en-lamp'],
      ['Quality and export', 'docs-en-quality'],
      ['Heightmap', 'docs-en-heightmap'],
      ['Render', 'docs-en-render'],
      ['3D printing', 'docs-en-print'],
      ['Modifiers', 'docs-en-modifiers']
    ],
    overviewTitle: 'PARA-MESH is a creative parametric CAD tool for 3D printing.',
    overviewText: 'It helps design cups, vases, planters, lamp shades and sculptural objects from an editable base mesh. You define dimensions, profile, cross section, geometric quality and a stack of modifiers.',
    workflowTitle: 'Basic workflow',
    workflow: [
      ['Base', 'Set height, radii, wall thickness, vase/lamp mode, geometric quality and background.'],
      ['Profile', 'Draw the silhouette with the 2D spline editor or direct 3D profile editor.'],
      ['Cross section', 'Change the cross section: curved, hard, polygonal or free.'],
      ['Modifiers', 'Stack waves, grooves, twist, relief, cuts, patterns and manufacturing tools.']
    ],
    interfaceTitle: 'Interface and panels',
    interfaceText: 'The left panel contains base geometry and settings. The right panel uses tabs for Design, Modifiers and Render. Modifiers can be dragged up or down to change order. Spline editors can open as floating windows and the profile can also be edited directly on the 3D model.',
    presetsTitle: 'Quick presets',
    presetsText: 'The preset window works as a large gallery. You can load factory presets, save your own designs with a viewport screenshot, delete user presets and hide factory presets without removing internal project data.',
    stackTitle: 'Modifier stack order',
    stackText: 'Modifiers are applied from top to bottom. Each modifier works on the geometry produced by the previous one, so order can change the result.',
    stackTips: [
      ['Global shape first', 'Use Twist, Bend, Skew, Wave Studio or global deformations before details if you want to affect the whole body.'],
      ['Details later', 'Add grooves, heightmaps, polygons or relief after the main shape is defined.'],
      ['Deformed details', 'If a detail must also be deformed, place the detail first. Example: Rim Torus first and Rim Tilt after it, so the rim tilts with the opening.']
    ],
    measuresTitle: 'Base and Final Measures',
    measuresText: 'In Slicer Information, Base shows the main dimensions defined by height and radii. Final shows the real exportable geometry size, including modifiers, heightmaps, ribs, grooves and relief. Always validate the final model in the slicer.',
    lampTitle: 'Vase mode and lamp mode',
    lampText: 'Vase mode keeps normal wall thickness. Lamp mode uses a thin adjustable outside wall for translucent shades. You can seal the base and use the lamp holder cut modifier for mounting holes.',
    qualityTitle: 'Quality, preview and export',
    qualityText: 'Geometric Quality controls mesh density before modifiers. Preview Quality keeps editing fluid. STL/3MF export has Standard, High and Ultra levels independent from preview. Ultra can create large files.',
    heightmapTitle: 'Heightmap and Image Heightmap',
    heightmapText: 'The global Heightmap remains an advanced option. The recommended workflow is Image Heightmap inside the modifier stack because it supports multiple images, custom names, layer order and blend modes: Add, Maximum and Subtract.',
    renderTitle: 'Product render',
    renderText: 'The Render tab can create product images without leaving PARA-MESH. It includes visual material, studio scenes, custom HDRI, exposure, render quality, shadows, Key/Fill/Rim lights, area lights, Light Probe, ambient occlusion, bloom, contrast, saturation, warm internal lamp light and PNG export at preset resolutions. Use White Studio or Neutral Catalog for product sheets, Dark Studio or Night Desk for lamps, and Ultra when you need finer shadows and richer visual detail.',
    printTitle: '3D printing tips',
    printTips: [
      'For lamp shades, use thin walls, translucent material and patterns that do not block too much light.',
      'For cups or vases, keep enough wall thickness, check the sealed base and avoid overly deep grooves if watertightness matters.',
      'If fine details look pixelated, increase Geometric Quality or adjust the modifier density.'
    ],
    modifiersTitle: 'Modifier reference',
    controlsLabel: 'Controls',
    goodForLabel: 'Good for'
  }
};

function renderCards(items) {
  return items.map(([title, text]) => `
    <div class="rounded-2xl border border-white/10 bg-white/[.035] p-4 shadow-card">
      <strong class="text-white">${title}:</strong>
      <span class="text-slate-300">${text}</span>
    </div>
  `).join('');
}

function renderModifierDocs(lang) {
  const copy = COPY[lang];
  return MODIFIER_DOCS.map((item) => {
    const doc = item[lang];
    return `
      <article class="rounded-2xl border border-white/10 bg-panel/70 p-4 shadow-card transition hover:-translate-y-0.5 hover:border-brand/40 hover:bg-panel">
        <div class="flex items-start justify-between gap-3">
          <h4 class="text-sm font-black text-white">${item.name}</h4>
          <code class="shrink-0 rounded-lg border border-brand/20 bg-brand/10 px-2 py-1 text-[10px] font-bold text-cyan">${item.type}</code>
        </div>
        <p class="mt-3 text-xs leading-relaxed text-slate-300">${doc.use}</p>
        <p class="mt-3 text-[11px] leading-relaxed text-slate-400"><strong class="text-cyan">${copy.controlsLabel}:</strong> ${doc.controls}</p>
        <p class="mt-1 text-[11px] leading-relaxed text-slate-400"><strong class="text-cyan">${copy.goodForLabel}:</strong> ${doc.goodFor}</p>
      </article>
    `;
  }).join('');
}

function renderNav(lang) {
  const copy = COPY[lang];
  return `
    <div class="rounded-2xl border border-white/10 bg-white/[.035] p-3 shadow-card">
      <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan">${copy.langName}</p>
      <div class="mt-2 space-y-1">
        ${copy.sections.map(([label, id]) => `
          <a href="#${id}" class="block rounded-xl px-3 py-2 text-[11px] font-bold text-slate-300 transition hover:bg-brand/10 hover:text-white">${label}</a>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPanel(id, title, body) {
  return `
    <div id="${id}" class="scroll-mt-20 rounded-[2rem] border border-white/10 bg-panel/70 p-5 shadow-card">
      <h3 class="text-lg font-black text-white">${title}</h3>
      <p class="mt-3 text-sm leading-relaxed text-slate-300">${body}</p>
    </div>
  `;
}

function renderLanguage(lang) {
  const copy = COPY[lang];
  const prefix = `docs-${lang}`;
  return `
    <section id="${prefix}" class="space-y-5 scroll-mt-20">
      <div id="${prefix}-overview" class="scroll-mt-20 rounded-[2rem] border border-brand/30 bg-gradient-to-br from-brand/15 to-white/[.035] p-6 shadow-glow">
        <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan">${copy.langName}</p>
        <h3 class="mt-3 text-3xl font-black tracking-tight text-white">${copy.overviewTitle}</h3>
        <p class="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">${copy.overviewText}</p>
      </div>

      <div id="${prefix}-workflow" class="scroll-mt-20 rounded-[2rem] border border-white/10 bg-panel/70 p-5 shadow-card">
        <h3 class="text-lg font-black text-white">${copy.workflowTitle}</h3>
        <div class="mt-4 grid md:grid-cols-2 xl:grid-cols-4 gap-3 text-xs leading-relaxed">${renderCards(copy.workflow)}</div>
      </div>

      ${renderPanel(`${prefix}-interface`, copy.interfaceTitle, copy.interfaceText)}

      ${renderPanel(`${prefix}-presets`, copy.presetsTitle, copy.presetsText)}

      <div id="${prefix}-stack" class="scroll-mt-20 rounded-[2rem] border border-white/10 bg-panel/70 p-5 shadow-card">
        <h3 class="text-lg font-black text-white">${copy.stackTitle}</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-300">${copy.stackText}</p>
        <div class="mt-3 grid md:grid-cols-3 gap-3 text-xs leading-relaxed">${renderCards(copy.stackTips)}</div>
      </div>

      ${renderPanel(`${prefix}-measures`, copy.measuresTitle, copy.measuresText)}

      <div class="grid md:grid-cols-2 gap-4">
        ${renderPanel(`${prefix}-lamp`, copy.lampTitle, copy.lampText)}
        ${renderPanel(`${prefix}-quality`, copy.qualityTitle, copy.qualityText)}
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        ${renderPanel(`${prefix}-heightmap`, copy.heightmapTitle, copy.heightmapText)}
        ${renderPanel(`${prefix}-render`, copy.renderTitle, copy.renderText)}
      </div>

      <div id="${prefix}-print" class="scroll-mt-20 rounded-[2rem] border border-white/10 bg-panel/70 p-5 shadow-card">
        <h3 class="text-lg font-black text-white">${copy.printTitle}</h3>
        <div class="mt-3 grid md:grid-cols-3 gap-3 text-xs leading-relaxed">
          ${copy.printTips.map((tip) => `<p class="rounded-2xl border border-white/10 bg-white/[.035] p-4 text-slate-300">${tip}</p>`).join('')}
        </div>
      </div>

      <div id="${prefix}-modifiers" class="scroll-mt-20">
        <div class="flex items-end justify-between gap-4 mb-3">
          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan">${copy.langName}</p>
            <h3 class="text-lg font-black text-white">${copy.modifiersTitle}</h3>
          </div>
          <p class="text-[11px] text-slate-400">${MODIFIER_DOCS.length} items</p>
        </div>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">${renderModifierDocs(lang)}</div>
      </div>
    </section>
  `;
}

export function renderDocumentationPage() {
  return `
    <div id="documentation-modal" class="fixed inset-0 z-[70] hidden bg-slate-950/90 backdrop-blur-sm pointer-events-auto" role="dialog" aria-modal="true" aria-hidden="true">
      <div class="relative h-full flex flex-col overflow-hidden bg-ink text-slate-100">
        <div class="mesh-bg absolute inset-0 opacity-50"></div>
        <div class="absolute left-1/2 top-16 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]"></div>

        <header class="relative z-10 min-h-16 shrink-0 border-b border-white/10 bg-ink/70 px-5 py-4 backdrop-blur-xl flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 class="text-xl font-black tracking-tight text-white">Para<span class="text-brand">-Mesh</span> Docs</h2>
            <p class="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan">Documentacion bilingue / Bilingual documentation</p>
          </div>
          <div class="flex items-center gap-2">
            <a href="#docs-es" class="rounded-xl bg-brand px-3 py-2 text-[11px] font-black text-white shadow-glow transition hover:bg-blue-500">Espanol</a>
            <a href="#docs-en" class="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-black text-white transition hover:border-brand/60 hover:bg-brand/10">English</a>
            <button id="btn-close-documentation" class="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-black text-white transition hover:border-brand/60 hover:bg-brand/10">Cerrar</button>
          </div>
        </header>

        <div class="relative z-10 flex-1 grid lg:grid-cols-[270px_1fr] overflow-hidden">
          <aside class="hidden lg:block overflow-y-auto border-r border-white/10 bg-ink/45 p-4 space-y-3 backdrop-blur">
            ${renderNav('es')}
            ${renderNav('en')}
          </aside>
          <main class="overflow-y-auto px-5 py-6 space-y-10 scroll-smooth lg:px-8">
            ${renderLanguage('es')}
            <div class="h-px bg-white/10"></div>
            ${renderLanguage('en')}
          </main>
        </div>
      </div>
    </div>
  `;
}
