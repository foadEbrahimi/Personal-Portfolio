const toggleBtn = document.querySelector('.bi-list-nested');
const closeBtn = document.querySelector('.bi-x');
const navAside = document.querySelector('.navbarAside');
const showNavside = function () {
  navAside.classList.add('show-navAside');
};
const hideNavside = function () {
  navAside.classList.remove('show-navAside');
};
toggleBtn.addEventListener('click', showNavside);
closeBtn.addEventListener('click', hideNavside);
