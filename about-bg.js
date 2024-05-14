import * as THREE from "three";

const container = document.getElementById("about");

if (container) {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
		45,
		container.offsetWidth / container.offsetHeight,
		0.1,
		1000
	);

	const renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setSize(container.offsetWidth, container.offsetHeight);
	container.appendChild(renderer.domElement);

	// Tworzenie sfery z efektem Wireframe
	const geometry = new THREE.SphereGeometry(1, 64, 64);
	const textureLoader = new THREE.TextureLoader();
	const planetTexture = textureLoader.load("/2k_venus_surface.jpg"); // Adjust the path as needed
	const material = new THREE.MeshBasicMaterial({
		map: planetTexture,
	});
	const planet = new THREE.Mesh(geometry, material);
	scene.add(planet);

	camera.position.z = 5;

	function animate() {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}

	animate();

	// Obracanie sfery na scroll
	window.addEventListener("scroll", () => {
		const rotation = window.scrollY * 0.005;
		planet.rotation.x = rotation;
		planet.rotation.y = rotation;
	});

	window.addEventListener("resize", () => {
		renderer.setSize(container.offsetWidth, container.offsetHeight);
		camera.aspect = container.offsetWidth / container.offsetHeight;
		camera.updateProjectionMatrix();
	});
} else {
	console.error('Element o id "canvas-main" nie został znaleziony.');
}
