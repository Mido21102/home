const navToggleIcon = document.getElementById('nav-toggle-icon');
const navMenu = document.getElementById('nav-menu');

navToggleIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});