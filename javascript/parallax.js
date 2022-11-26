let background = document.getElementById('background');
let clouds = document.getElementById('clouds');
let sun = document.getElementById('sun');
let land_behind = document.getElementById('land_behind');
let land_front = document.getElementById('land_front');
let church = document.getElementById('church');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    sun.style.top = value * 1.5 + 'px';
    land_front.style.top = value * 0.5 + 'px';
    church.style.top = value * 0.2 + 'px';
})