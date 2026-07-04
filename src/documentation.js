import { renderDocumentationPage } from '../DocumentationContent.js';

export function setupDocumentationModal() {
  document.body.insertAdjacentHTML('beforeend', renderDocumentationPage());

  const documentationModal = document.getElementById('documentation-modal');
  const documentationScroller = documentationModal?.querySelector('main');
  const closeButton = document.getElementById('btn-close-documentation');

  function openDocumentation(event) {
    event?.preventDefault();
    documentationModal.classList.remove('hidden');
    documentationModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('overflow-hidden');
    documentationScroller?.scrollTo({ top: 0 });
  }

  function closeDocumentation() {
    documentationModal.classList.add('hidden');
    documentationModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('overflow-hidden');
  }

  document.addEventListener('click', (event) => {
    const documentationLink = event.target.closest('a[href="#documentacion"]');
    if (documentationLink) {
      openDocumentation(event);
      return;
    }

    const documentationAnchor = event.target.closest('#documentation-modal a[href^="#docs-"]');
    if (documentationAnchor) {
      event.preventDefault();
      documentationModal
        .querySelector(documentationAnchor.getAttribute('href'))
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  });

  documentationModal?.addEventListener('click', (event) => {
    if (event.target === documentationModal) {
      closeDocumentation();
    }
  });

  closeButton?.addEventListener('click', closeDocumentation);

  return {
    documentationModal,
    closeDocumentation
  };
}
