

$(document).ready(function () {
    console.log("document loaded");
    var burger = document.querySelector('.burger');
    var navbar = document.querySelector('.navbar');
    var navlist = document.querySelector('.nav-list');
    var rightnav = document.querySelector('.rightnav');




    burger.addEventListener('click', () => {
        rightnav.classList.toggle('v-class-resp');
        navlist.classList.toggle('v-class-resp');
        navbar.classList.toggle('h-nav-resp');

    })
});