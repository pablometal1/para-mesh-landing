import { setupDocumentationModal } from './documentation.js';
import galleryMetadata from '../assets/gallery/gallery.json';

const { documentationModal, closeDocumentation } = setupDocumentationModal();
const repositoryGalleryApi =
  'https://api.github.com/repos/pablometal1/para-mesh-landing/contents/assets/gallery?ref=main';

export default {
  data() {
    return {
      gumroadUrl: 'https://gumroad.com/l/para-mesh',
      nav: [
        { label: 'Inicio', href: 'index.html#inicio', active: false },
        { label: 'Funciones', href: 'index.html#funciones', active: false },
        { label: 'Galería', href: 'gallery.html', active: true },
        { label: 'Precios', href: 'index.html#precios', active: false },
        { label: 'Documentación', href: '#documentacion', active: false }
      ],
      images: [],
      galleryStatus: 'loading',
      viewerOpen: false,
      currentIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || { src: '', title: '', text: '' };
    }
  },
  mounted() {
    this.loadGallery();
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    async loadGallery() {
      const metadata = await this.loadGalleryMetadata();
      const githubImages = await this.loadGitHubGalleryImages(metadata);
      if (githubImages.length) {
        this.images = githubImages;
        this.galleryStatus = 'ready';
        return;
      }

      const jsonImages = this.normalizeImages([...metadata.values()]);
      if (jsonImages.length) {
        this.images = jsonImages;
        this.galleryStatus = 'ready';
        return;
      }

      this.galleryStatus = 'empty';
    },
    async loadGalleryMetadata() {
      if (!Array.isArray(galleryMetadata)) return new Map();

      return new Map(
        this.normalizeImages(galleryMetadata).map((image) => [
          this.getFilenameKey(image.src),
          image
        ])
      );
    },
    async loadGitHubGalleryImages(metadata) {
      try {
        const response = await fetch(repositoryGalleryApi, { cache: 'no-store' });
        if (!response.ok) return [];

        const files = await response.json();
        if (!Array.isArray(files)) return [];

        const allowedExtensions = /\.(jpe?g|png|webp|gif|avif)$/i;
        return files
          .filter((file) => file.type === 'file' && allowedExtensions.test(file.name))
          .map((file) => {
            const src = file.download_url;
            const metadataKey = this.getFilenameKey(file.name);
            const savedMetadata = metadata.get(metadataKey);

            return {
              src,
              title: savedMetadata?.title || this.formatGalleryTitle(file.name),
              text: savedMetadata?.text || ''
            };
          })
          .sort((a, b) => a.title.localeCompare(b.title, 'es'));
      } catch (error) {
        return [];
      }
    },
    normalizeImages(images) {
      return images
        .filter((image) => image && image.src)
        .map((image) => ({
          src: image.src,
          title: image.title || this.formatGalleryTitle(image.src),
          text: image.text || ''
        }));
    },
    getFilenameKey(src) {
      return decodeURIComponent(src).split('/').pop().toLowerCase();
    },
    formatGalleryTitle(src) {
      const filename = decodeURIComponent(src).split('/').pop().replace(/\.[^.]+$/, '');
      return filename
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
    },
    openViewer(index) {
      this.currentIndex = index;
      this.viewerOpen = true;
      document.body.classList.add('overflow-hidden');
    },
    closeViewer() {
      this.viewerOpen = false;
      document.body.classList.remove('overflow-hidden');
    },
    previousImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    handleKeydown(event) {
      if (event.key === 'Escape') {
        if (this.viewerOpen) {
          this.closeViewer();
        } else if (!documentationModal.classList.contains('hidden')) {
          closeDocumentation();
        }
      }

      if (!this.viewerOpen) return;

      if (event.key === 'ArrowLeft') {
        this.previousImage();
      }

      if (event.key === 'ArrowRight') {
        this.nextImage();
      }
    }
  }
}
