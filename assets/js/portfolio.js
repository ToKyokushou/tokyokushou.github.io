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
