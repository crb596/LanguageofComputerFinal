const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.topnav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
});