// Nabeela — Portfolio
// Behaviour comes from the annotations in the Figma file:
//   "arrow_back moves the slider one step back when applicable.
//    arrow_forward moves the slider one step forward when applicable."
//   "Cards scale and align to the layout grid. The controls make the cards snap to the grid."

(() => {
  // ---------- Gallery Slider ----------
  const track = document.getElementById('slider');
  const back = document.getElementById('arrow_back');
  const forward = document.getElementById('arrow_forward');

  if (track && back && forward) {
    // One step = one card + the gap, so the next card lands on the grid.
    const step = () => {
      const card = track.firstElementChild;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    };

    // Grey out an arrow when there's nowhere left to go.
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      back.disabled = track.scrollLeft <= 2;
      forward.disabled = track.scrollLeft >= max;
    };

    back.addEventListener('click', () => track.scrollBy({ left: -step() }));
    forward.addEventListener('click', () => track.scrollBy({ left: step() }));

    // Arrow keys work when the slider has focus.
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); track.scrollBy({ left: step() }); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); track.scrollBy({ left: -step() }); }
    });

    let frame = 0;
    track.addEventListener('scroll', () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // ---------- Navigation: phone menu ----------
  const button = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (button && menu) {
    const setOpen = (open) => {
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? 'Close' : 'Menu';
      menu.hidden = !open;
    };
    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  }
})();
