/* Progressive enhancement: all content and navigation work without JavaScript. */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('primary-navigation');
  if (toggle && navigation) {
    document.documentElement.classList.add('portfolio-enhanced');
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      navigation.classList.toggle('is-open', open);
    });
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
  }
  const printCV = document.getElementById('print-cv');
  if (printCV) printCV.addEventListener('click', () => window.print());

  document.querySelectorAll('.research-carousel').forEach(carousel => {
    const slides = [...carousel.querySelectorAll('.research-slide')];
    const controls = carousel.querySelector('.carousel-controls');
    const previous = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const playback = carousel.querySelector('[data-carousel-toggle]');
    if (slides.length < 2 || !controls || !previous || !next || !playback) return;

    const dots = [...carousel.querySelectorAll('[data-carousel-index]')];
    const status = carousel.querySelector('.carousel-status');
    const announcement = carousel.querySelector('.carousel-announcement');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let index = Math.max(0, slides.findIndex(slide => !slide.hidden));
    let userPaused = reducedMotion.matches;
    let hovered = false;
    let focused = carousel.contains(document.activeElement);
    let onScreen = true;
    let timer = null;

    const canRotate = () => !userPaused && !hovered && !focused && onScreen &&
      !document.hidden && !carousel.contains(document.activeElement);
    const updatePlayback = () => {
      const label = userPaused ? 'Resume autoplay' : 'Pause autoplay';
      playback.textContent = label;
      playback.setAttribute('aria-label', label);
    };
    const showSlide = (requestedIndex, announce = false) => {
      index = (requestedIndex + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === index;
        slide.hidden = !active;
        slide.setAttribute('aria-hidden', String(!active));
      });
      dots.forEach(dot => {
        dot.setAttribute('aria-pressed', String(Number(dot.dataset.carouselIndex) === index));
      });
      if (status) {
        status.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
      }
      if (announce && announcement) {
        const title = slides[index].querySelector('h2, h3, h4')?.textContent.trim();
        announcement.textContent = `Research ${index + 1} of ${slides.length}${title ? `: ${title}` : ''}`;
      }
    };
    const schedule = () => {
      window.clearTimeout(timer);
      timer = null;
      if (canRotate()) {
        timer = window.setTimeout(() => {
          if (canRotate()) showSlide(index + 1);
          schedule();
        }, 6000);
      }
    };
    const navigate = requestedIndex => {
      userPaused = true;
      updatePlayback();
      showSlide(requestedIndex, true);
      schedule();
    };

    previous.addEventListener('click', () => navigate(index - 1));
    next.addEventListener('click', () => navigate(index + 1));
    dots.forEach(dot => dot.addEventListener('click', () => {
      const requestedIndex = Number(dot.dataset.carouselIndex);
      if (Number.isInteger(requestedIndex) && requestedIndex >= 0 && requestedIndex < slides.length) {
        navigate(requestedIndex);
      }
    }));
    playback.addEventListener('click', () => {
      userPaused = !userPaused;
      updatePlayback();
      if (announcement) {
        announcement.textContent = userPaused ? 'Autoplay paused.' :
          'Autoplay enabled. Rotation continues when focus and pointer leave the carousel.';
      }
      schedule();
    });
    controls.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
          !event.target.closest('button')) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        navigate(index + (event.key === 'ArrowLeft' ? -1 : 1));
      }
    });
    carousel.addEventListener('mouseenter', () => { hovered = true; schedule(); });
    carousel.addEventListener('mouseleave', () => { hovered = false; schedule(); });
    carousel.addEventListener('focusin', () => { focused = true; schedule(); });
    carousel.addEventListener('focusout', event => {
      focused = carousel.contains(event.relatedTarget);
      // Focus may still point at the departing element until focusout finishes.
      window.setTimeout(schedule, 0);
    });
    document.addEventListener('visibilitychange', schedule);
    const handleMotionChange = () => {
      if (reducedMotion.matches) userPaused = true;
      updatePlayback();
      schedule();
    };
    if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', handleMotionChange);
    else reducedMotion.addListener(handleMotionChange);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        onScreen = entries[0].isIntersecting;
        schedule();
      }).observe(carousel);
    }

    showSlide(index);
    updatePlayback();
    controls.hidden = false;
    schedule();
  });

  const filters = [...document.querySelectorAll('[data-filter]')];
  const rows = [...document.querySelectorAll('.publication-row[data-category]')];
  if (filters.length && rows.length) {
    document.querySelector('.publication-filters')?.removeAttribute('hidden');
    filters.forEach(button => button.addEventListener('click', () => {
      const category = button.dataset.filter;
      filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
      rows.forEach(row => { row.hidden = category !== 'all' && row.dataset.category !== category; });
      document.querySelectorAll('.publication-year').forEach(group => {
        group.hidden = ![...group.querySelectorAll('.publication-row')].some(row => !row.hidden);
      });
      const count = document.getElementById('publication-count');
      if (count) count.textContent = `${rows.filter(row => !row.hidden).length} publications shown`;
    }));
  }
})();
