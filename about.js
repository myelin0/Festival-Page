/// //hamburger menu///////////////////
const hamburger = document.querySelector('.menu-button');
const closebtn = document.querySelector('.closebtn');
const overlay = document.querySelector('.overlay');
const common = document.querySelectorAll('.common');

function openMenu() {
  overlay.classList.remove('hidden');
}
function closeMenu() {
  overlay.classList.add('hidden');
}

closebtn.addEventListener('click', closeMenu);
hamburger.addEventListener('click', openMenu);

for (let i = 0; i < common.length; i += 1) {
  common[i].addEventListener('click', closeMenu);
}
