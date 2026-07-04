import { setupDocumentationModal } from './documentation.js';
import appUiImage from '../assets/app-ui.PNG';
import diagonalVaseImage from '../assets/diagonal-vase.png';
import heightmapVaseImage from '../assets/heightmap-vase.png';
import splineSweepPotImage from '../assets/spline-sweep-pot.png';

const { documentationModal, closeDocumentation } = setupDocumentationModal();

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !documentationModal.classList.contains('hidden')) {
    closeDocumentation();
  }
});

export default {
  data() {
    return {
      gumroadUrl: 'https://gumroad.com/l/para-mesh',
      nav: [
        { label: 'Funciones', href: '#funciones' },
        { label: 'Galería', href: 'gallery.html' },
        { label: 'Precios', href: '#precios' },
        { label: 'Documentación', href: '#documentacion' }
      ],
      heroBenefits: [
        { icon: '⚙', title: 'Paramétrico', text: 'Ajusta medidas, perfiles y detalles al instante.' },
        { icon: '◇', title: 'Flexible', text: 'Combina revolución, modificadores y spline sweep.' },
        { icon: '▣', title: 'Imprimible', text: 'Exporta STL/3MF y valida el área de impresión.' }
      ],
      features: [
        { icon: '⬡', title: 'Revolución paramétrica', text: 'Crea vasos, floreros, macetas y pantallas con control total sobre altura, radios, pared y perfil.' },
        { icon: '▰', title: 'Modificadores apilables', text: 'Aplica ondas, flutes, cortes, bocas onduladas, aros y efectos no destructivos.' },
        { icon: '▧', title: 'Image Heightmap', text: 'Convierte imágenes en relieves reales con suavizado, repetición, mezcla y control de profundidad.' },
        { icon: '⌁', title: 'Barrido por spline', text: 'Genera formas orgánicas, tubos, asas, raíces y floreros escultóricos siguiendo curvas 3D.' },
        { icon: '▤', title: 'Perfiles de impresora', text: 'Define el área de impresión de tu máquina y recibe advertencias de tamaño automáticamente.' },
        { icon: '⇩', title: 'Exportación STL / 3MF', text: 'Exporta modelos listos para laminar con calidad independiente de la vista previa.' }
      ],
      gallery: [
        { src: diagonalVaseImage, title: 'Vaso diagonal', text: 'Ranuras y corte visual en minutos.' },
        { src: splineSweepPotImage, title: 'Maceta raíz', text: 'Forma orgánica con barrido por spline.' },
        { src: heightmapVaseImage, title: 'Relieve compuesto', text: 'Múltiples heightmaps apilables.' },
        { src: appUiImage, title: 'Interfaz completa', text: 'Control visual, medidas y exportación.' }
      ],
      priceItems: [
        'Modelado por revolución y barrido por spline.',
        'Modificadores apilables e Image Heightmap.',
        'Perfiles de impresora y chequeos básicos.',
        'Exportación STL y 3MF.',
        'Ideal para vasos, floreros, macetas y pantallas.'
      ]
    };
  }
}
