import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.from("nav", {
	duration: 1,
	y: -100,
	opacity: 0,
	ease: "power1.inOut",
	delay: 0,
});
gsap.from("h1", {
	duration: 1, // czas trwania animacji w sekundach
	y: 100, // przesunięcie początkowe w pikselach na osi Y (pionowo)
	opacity: 0, // początkowa przezroczystość elementu
	ease: "power2.out", // typ wygładzenia animacji
	delay: 0.5, // opóźnienie startu animacji
});

// GSAP: (Front-end Developer)
gsap.from("h2", {
	duration: 1,
	y: 100,
	opacity: 0,
	ease: "power2.out",
	delay: 1, // opóźnienie pozwala na rozpoczęcie animacji tego elementu po zakończeniu animacji poprzedniego
});
gsap.from(".top-text", {
	duration: 1,
	x: -100,
	opacity: 0,
	ease: "power3.out",
	delay: 0.5,
});
gsap.from(".signature", {
	scrollTrigger: {
		trigger: ".signature",
		start: "top 95%", // Uruchom animację, gdy górny krawędź .signature pojawi się w 95% wysokości viewportu
		end: "bottom 10%", // Definiuje, kiedy animacja ma się zakończyć
		toggleActions: "restart pause", // Działania przy różnych etapach scrollowania
		once: true, // Uruchom animację tylko raz
	},
	opacity: 0, // Startowa przezroczystość
	y: 50, // Startowe przesunięcie w pionie
	duration: 1, // Czas trwania animacji w sekundach
	ease: "power1.out", // Typ wygładzania
});
