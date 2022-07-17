// -- Mobile Nav Menu --

// Nav Menu Elements
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__menu');
const navItem = document.querySelectorAll('.nav__item');
const navLink = document.querySelectorAll('.nav__link');

// Nav Links
const navLink1 = navLink[0]
const navLink2 = navLink[1]
const navLink3 = navLink[2]

// Menu closed by default
let showMenu = false;

// Execute togglemenu function on button click
burger.addEventListener('click', toggleMenu);

navLink1.addEventListener('click', toggleMenu);
navLink2.addEventListener('click', toggleMenu);
navLink3.addEventListener('click', toggleMenu);

// Toggle menu visibility
function toggleMenu() {
    if (!showMenu) {
        burger.classList.add('open');
        burgerMenu.classList.add('open');
        navMenu.classList.add('open');
        nav.classList.add('open');
        navMenu.classList.add('open');
        navItem.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        burger.classList.remove('open');
        burgerMenu.classList.remove('open');
        navMenu.classList.remove('open');
        nav.classList.remove('open');
        navMenu.classList.remove('open');
        navItem.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}
