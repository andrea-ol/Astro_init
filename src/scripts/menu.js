const menu = document.querySelector('.menu');
const navLinks = document.getElementById('main-menu');

menu?.addEventListener('click', () => {
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', `${!isExpanded}`);
  navLinks?.classList.toggle('is-open', !isExpanded);
});