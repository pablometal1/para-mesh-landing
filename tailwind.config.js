export default {
  content: [
    './index.html',
    './gallery.html',
    './DocumentationContent.js',
    './src/**/*.{js,vue}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#07101f',
        panel: '#0b1425',
        line: 'rgba(91,141,255,.22)',
        brand: '#2f73ff',
        cyan: '#57c7ff'
      },
      boxShadow: {
        glow: '0 0 80px rgba(47,115,255,.35)',
        card: '0 24px 80px rgba(0,0,0,.35)'
      }
    }
  },
  plugins: []
};
