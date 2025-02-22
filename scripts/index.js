const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const iconClosed = 'assets/menu.png'; 
const iconOpen = 'assets/menu-aberto.png';

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
  button.classList.toggle('active');
  if (mobileNavbar.classList.contains('active')) {
    button.src = iconOpen;
  } else {
    button.src = iconClosed;
  }
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});
