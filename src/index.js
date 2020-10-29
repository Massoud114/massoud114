import $ from "jquery"
import './style.css'
import Typed from 'typed.js';

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }
        else {
            $('.scroll-up-btn').removeClass("show")
        }
    })

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({scrollTop: 0})
    })

    //toggle navbar/menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })

    //typing animation script
    const options = {
        strings: ["Développeur Web", "Développeur Mobile ", "Full-Stack", "Freelancer", "Gamer", "SPIDER"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        startDelay: 2000,
        backDelay: 2000,
        cursorChar: '_',
    };

    const typed = new Typed('.typing', options);

    $("#teams").hide()

})