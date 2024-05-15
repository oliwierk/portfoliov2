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
gsap.from("#canvas-main", {
	duration: 1,
	y: 100,
	opacity: 0,
	ease: "power2.out",
	delay: 1.5,
});

gsap.from(".signature", {
	scrollTrigger: {
		trigger: ".signature",
		start: "top bottom", // Adjust if the element triggers too late or early
		toggleActions: "restart none none none",
		once: true,
	},
	opacity: 1, // Ensure it fades in correctly and stays visible
	y: 50, // Start from its natural position
	duration: 1,
	ease: "power1.out",
});

gsap.utils.toArray(".project").forEach(tile => {
	gsap.from(tile, {
		scrollTrigger: {
			trigger: tile,
			start: "top bottom-=100", // Starts when the top of the tile hits the bottom of the viewport
			end: "bottom top",
			toggleActions: "play",
			once: true,
		},
		opacity: 0,
		y: 50,
		duration: 0.5,
		ease: "power1.out",
	});
});
gsap.utils.toArray(".headline").forEach(tile => {
	gsap.from(tile, {
		scrollTrigger: {
			trigger: tile,
			start: "top bottom-=100", // Starts when the top of the tile hits the bottom of the viewport
			end: "bottom top",
			toggleActions: "play",
			once: true,
		},
		opacity: 0,
		y: 50,
		duration: 1,
		ease: "power1.out",
	});
});

// Ensure the contact section stays visible after animation
gsap.from("#contact .contact-left a", {
	scrollTrigger: {
		trigger: "#contact",
		start: "top bottom-=200", // Adjust based on when you want the animation to start
		toggleActions: "play none none none",
		once: true,
	},
	opacity: 0,
	y: 30,
	duration: 0.7,
	ease: "power1.out",
	stagger: 0.2, // This will animate each link one after another with a delay
});

gsap.from("#contact .contact-left .relative", {
	scrollTrigger: {
		trigger: "#contact",
		start: "top bottom-=150",
		toggleActions: "play none none none",
		once: true,
	},
	opacity: 0,
	y: 30,
	duration: 0.7,
	ease: "power1.out",
	delay: 0.3, // Delay this slightly more than the links for a nice effect
});

// Animate the right part of the contact section where the form is located
gsap.from("#contact .contact-right > *", {
	scrollTrigger: {
		trigger: "#contact .contact-right",
		start: "top bottom-=100",
		toggleActions: "play none none none",
		once: true,
	},
	opacity: 0,
	y: 50,
	duration: 0.5,
	ease: "power1.out",
	stagger: 0.15, // This creates a sequence effect for each element in the form
});

// Adjusting #about section's animation for smoother transition
gsap.from("#about", {
	scrollTrigger: {
		trigger: "#about",
		start: "top bottom",
		end: "bottom top",
		scrub: true, // Smooth scrubbing might help with jerkiness
		toggleActions: "play none none none",
		once: true,
	},
	opacity: 1,
	y: 0,
	duration: 1.5, // A longer duration for smoother effect
	ease: "power1.out",
});
