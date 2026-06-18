// Script to handle lightbox image viewer, tab URL sync, and back-to-top button
// for QC report page

(function () {
  // Tab URL sync: update hash when a tab is activated, restore on page load
  const tabButtons = document.querySelectorAll('#qcTabs .nav-link');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('shown.bs.tab', function () {
      const target = btn.getAttribute('data-bs-target'); // e.g. "#pane-1_preprocessing"
      if (target) {
        history.replaceState(null, '', target.replace('pane-', 'tab-'));
      }
    });
  });

  // Restore active tab from URL hash on page load
  const hash = window.location.hash;
  if (hash && hash.startsWith('#tab-')) {
    const stepId = hash.slice('#tab-'.length); // e.g. "1_preprocessing"
    const btn = document.querySelector(`#qcTabs [data-bs-target="#pane-${stepId}"]`);
    if (btn) {
      bootstrap.Tab.getOrCreateInstance(btn).show();
      // Prevent browser from jumping to anchor
      window.scrollTo(0, 0);
    }
  }


  const lightbox = document.getElementById('qc-lightbox');
  const lbImg = document.getElementById('qc-lb-img');
  const btnClose = document.getElementById('qc-lb-close');
  const btnPrev = document.getElementById('qc-lb-prev');
  const btnNext = document.getElementById('qc-lb-next');

  // All qc-card elements in active tab pane and current index
  let gallery = [];
  let current = 0;

  // Reset lightbox to fit-to-screen view (clear zoom state)
  function resetZoom() {
    lbImg.classList.remove('qc-lb-img--zoomed', 'qc-lb-img--zoomed2');
    lbImg.style.maxWidth = '';
    lightbox.style.alignItems = 'center';
    lightbox.scrollTop = 0;
    lightbox.scrollLeft = 0;
  }

  // Open lightbox with all cards from clicked card's tab pane
  function openLightbox(cards, index) {
    gallery = cards;
    current = index;
    lbImg.src = gallery[current].dataset.src;
    lbImg.alt = gallery[current].querySelector('img').alt;
    resetZoom();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }

  // Close lightbox and restore page scroll
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  // Navigate to a given index, resetting zoom each time
  function showImage(index) {
    current = (index + gallery.length) % gallery.length;
    lbImg.src = gallery[current].dataset.src;
    lbImg.alt = gallery[current].querySelector('img').alt;
    resetZoom();
  }

  // Cycle zoom on lightbox image: fit → adaptive intermediate → native → fit
  lbImg.addEventListener('click', function (e) {
    e.stopPropagation();
    const z1 = lbImg.classList.contains('qc-lb-img--zoomed');
    const z2 = lbImg.classList.contains('qc-lb-img--zoomed2');
    if (!z1 && !z2) {
      // fit → intermediate: geometric mean of fit width and native width
      const fitW = lbImg.getBoundingClientRect().width;
      const nativeW = lbImg.naturalWidth;
      const midW = Math.round(Math.sqrt(fitW * nativeW));
      lbImg.style.maxWidth = midW + 'px';
      lbImg.classList.add('qc-lb-img--zoomed');
      lightbox.style.alignItems = 'flex-start';
    } else if (z1) {
      // intermediate → native
      lbImg.style.maxWidth = '';
      lbImg.classList.remove('qc-lb-img--zoomed');
      lbImg.classList.add('qc-lb-img--zoomed2');
    } else {
      // native → fit
      lbImg.classList.remove('qc-lb-img--zoomed2');
      lightbox.style.alignItems = 'center';
      lightbox.scrollTop = 0;
      lightbox.scrollLeft = 0;
    }
  });

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
