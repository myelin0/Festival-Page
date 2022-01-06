span


/// //hamburger menu///////////////////
const hamburger = document.querySelector('.menu-button');
const closebtn = document.querySelector('.closebtn');
const navmenu = document.querySelector('.menu-links');
const common = document.querySelectorAll('.common');

hamburger.addEventListener('click', () => {
  navmenu.classList.toggle('show');
});

closebtn.addEventListener('click', () => {
  navmenu.classList.remove('show');
});

for (let i = 0; i < common.length; i += 1) {
  common[i].addEventListener('click', () => {
    navmenu.classList.remove('show');
  });
}


