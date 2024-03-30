import * as THREE from "three";

const container = document.getElementById("canvas-main");

if (container) {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
		25,
		container.offsetWidth / container.offsetHeight,
		0.1,
		1000
	);

	const renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setSize(container.offsetWidth, container.offsetHeight);
	container.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 5;

	function animate() {
		requestAnimationFrame(animate);

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		renderer.render(scene, camera);
	}

	animate();

	window.addEventListener("resize", () => {
		renderer.setSize(container.offsetWidth, container.offsetHeight);
		camera.aspect = container.offsetWidth / container.offsetHeight;
		camera.updateProjectionMatrix();
	});
} else {
	console.error('Element o id "canvas-main" nie został znaleziony.');
}
