
const menuClick = document.querySelector('.menu');
const titleMenu = document.querySelector('.titre-menu');
const listeMenu = document.querySelector('.liste-menu');
const lienMenu = document.querySelector('.liste-menu a');

menuClick.addEventListener('click', () => {
    menuClick.classList.add('menu-mobile');
    titleMenu.classList.add('title-mobile');
    listeMenu.classList.add('liste-mobile');
    lienMenu.classList.add('lien-mobile');
})

console.log("test");