const dropdown = document.querySelector('.contact-dropdown');
if (dropdown) {
  const btn = dropdown.querySelector('.contact-btn');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
}
