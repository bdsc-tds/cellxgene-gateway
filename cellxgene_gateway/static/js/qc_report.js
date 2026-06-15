// Script to handle lightbox image viewer and back-to-top button for QC report page

(function () {
  const lightbox = document.getElementById('qc-lightbox');
  const lbImg = document.getElementById('qc-lb-img');
  const btnClose = document.getElementById('qc-lb-close');
  const btnPrev = document.getElementById('qc-lb-prev');
  const btnNext = document.getElementById('qc-lb-next');

  // All qc-card elements in the active tab pane and current index
  let gallery = [];
  let current = 0;

  // Opens lightbox with all cards from the clicked card's tab pane
  function openLightbox(cards, index) {
    gallery = cards;
    current = index;
    lbImg.src = gallery[current].dataset.src;
    lbImg.alt = gallery[current].querySelector('img').alt;
    lightbox.hidden = false;
    lightbox.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }

  // Closes lightbox and restores page scroll
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  // Navigates to a given index, wrapping around at both ends
  function showImage(index) {
    current = (index + gallery.length) % gallery.length;
    lbImg.src = gallery[current].dataset.src;
    lbImg.alt = gallery[current].querySelector('img').alt;
    lightbox.scrollTop = 0;
  }

  // Delegate click on all qc-cards to open lightbox
  document.addEventListener('click', function (e) {
    const card = e.target.closest('.qc-card');
    if (!card) return;
    const pane = card.closest('.tab-pane');
    const cards = Array.from(pane ? pane.querySelectorAll('.qc-card') : [card]);
    const index = cards.indexOf(card);
    openLightbox(cards, index >= 0 ? index : 0);
  });

  // Close, previous, and next button handlers
  btnClose.addEventListener('click', closeLightbox);
  btnPrev.addEventListener('click', () => showImage(current - 1));
  btnNext.addEventListener('click', () => showImage(current + 1));

  // Close lightbox on backdrop click (click on overlay but not the image)
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation: Escape to close, arrow keys to navigate
  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(current - 1);
    if (e.key === 'ArrowRight') showImage(current + 1);
  });

  // Back to top button
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 80);
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
