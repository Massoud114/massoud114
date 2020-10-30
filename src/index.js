import $ from "jquery"
import './style.css'
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import AOS from 'aos';
import { tns } from "../node_modules/tiny-slider/src/tiny-slider"

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
    new Typed('.typing', {
        strings: ["Développeur Mobile", "Développeur Web PHP", "Développeur Full-Stack", "Freelancer", "Gamer", "SPIDER"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        startDelay: 2000,
        backDelay: 1000,
        cursorChar: '_',
    });
    new Typed('.typing2', {
        strings: ["Développeur Web PHP", "Full-Stack"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
        startDelay: 1000,
        backDelay: 1000,
        cursorChar: '|',
    });

    let slider = tns({
        container: '.carousel',
        items: 2.5,
        slideBy: 1,
        gutter : 30,
        loop : false,
        arrowKeys : true,
        navPosition: 'bottom',
        controls : false,
        mouseDrag : true
    });
    console.log(slider)

    AOS.init({
        delay: 50, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: true,
    });
})