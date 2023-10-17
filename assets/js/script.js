const toggleBtn = document.querySelector('.bi-list-nested');
const closeBtn = document.querySelector('.bi-x');
const navAside = document.querySelector('.navbarAside');
// Create Function for NavbarAside Controls
const showNavside = function () {
  navAside.classList.add('show-navAside');
};
const hideNavside = function () {
  navAside.classList.remove('show-navAside');
};
// Actice Functions
toggleBtn.addEventListener('click', showNavside);
closeBtn.addEventListener('click', hideNavside);

var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  effect: 'cards',
});
