import "./style.scss";
import "aos/dist/aos.css";
import Typed from "typed.js";
import AOS from "aos";
import { tns } from "tiny-slider";

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		if (this.scrollY > 20) {
			document.querySelector(".navbar").classList.add("sticky");
		} else {
			document.querySelector(".navbar").classList.remove("sticky");
		}
		if (this.scrollY > 500) {
			document.querySelector(".scroll-up-btn").classList.add("show");
		} else {
			document.querySelector(".scroll-up-btn").classList.remove("show");
		}
	});

	// slide-up script
	document.querySelector(".scroll-up-btn").addEventListener("click", function () {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

	//typing animation script
	new Typed(".typing", {
		strings: [
			"Développeur Mobile",
			"Développeur Web PHP",
			"Développeur Full-Stack",
			"Freelance",
			"Gamer",
			"SPIDER",
		],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
		startDelay: 2000,
		backDelay: 1000,
		cursorChar: "_",
	});
	new Typed(".typing2", {
		strings: ["Développeur Web PHP", "Full-Stack"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: false,
		startDelay: 1000,
		backDelay: 1000,
		cursorChar: "|",
	});

	tns({
		container: ".carousel",
		items: 1,
		slideBy: 1,
		gutter: 30,
		loop: false,
		arrowKeys: true,
		navPosition: "bottom",
		controls: false,
		mouseDrag: true,
		responsive: {
			1100: {
				items: 2.5,
			},
			800: {
				items: 2,
			},
			640: {
				items: 1,
			},
		},
	});

	AOS.init({
		delay: 50, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: true,
	});

	document.getElementById("year").innerHTML = (Math.floor((new Date() - new Date(2001, 10, 4)) / 3.15576e+10)).toString();

	for (let i = document.getElementsByClassName("xpAge").length - 1; i >= 0; i--) {
		document.getElementsByClassName("xpAge")[i].innerHTML = (Math.floor((new Date() - new Date(2018, 1, 1)) / 3.15576e+10)).toString();
	}
});
