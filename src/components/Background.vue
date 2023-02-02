<template>
    <section id="background" class="background">
        <canvas class="particles"></canvas>
    </section>
</template>

<script>
import * as THREE from 'three'
import * as dat from 'dat.gui'

export default {
    name: 'Background',
    mounted() {
        window.addEventListener('load', this.removeElem)

		const loader = new THREE.TextureLoader()
		const cross = loader.load('/cross.png'); 

		const gui = new dat.GUI()

		// Canvas
		const canvas = document.querySelector('canvas.particles')

		// Scene
		const scene = new THREE.Scene()

		// Objects
		const particlesGeometry = new THREE.BufferGeometry;
		const particlesCnt = 1000;

		const posArray = new Float32Array(particlesCnt * 3);
		// xyz, xyz, xyz, xyz

		for(let i = 0; i < particlesCnt * 3; i++) {
			posArray[i] = (Math.random() - 0.5) * 5
		}

		particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

		// Materials
		const particlesMaterial = new THREE.PointsMaterial({
			size: 0.016,
			map: cross,
			transparent: true,
			color: '#455ce9'
		})

		// Mesh
		const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
		scene.add(particlesMesh)

		// Lights
		const pointLight = new THREE.PointLight(0xffffff, 0.1)
		pointLight.position.x = 2
		pointLight.position.y = 3
		pointLight.position.z = 4
		scene.add(pointLight)

		/**
		 * Sizes
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		}

		function resizeHandler() {
			// Update sizes
			sizes.width = window.innerWidth
			sizes.height = window.innerHeight

			// Update camera
			camera.aspect = sizes.width / sizes.height
			camera.updateProjectionMatrix()

			// Update renderer
			renderer.setSize(sizes.width, sizes.height)
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		}

		window.addEventListener('resize', resizeHandler)

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
		camera.position.x = 0
		camera.position.y = 0
		camera.position.z = 2
		scene.add(camera)

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas
		})
		renderer.setSize(sizes.width, sizes.height)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		renderer.setClearColor(new THREE.Color('#161616'))

		// Mouse

		let mouseX = 500;
		let mouseY = 500;

		function animateParticles(event) {
            mouseX = event.clientX
			mouseY = event.clientY
		}

		/* Animate */

		var clock = new THREE.Clock()

        let tick = null;

        if ( window.innerWidth > 1023 ) {
            document.addEventListener('mousemove', animateParticles);
            tick = () => {
                var elapsedTime = clock.getElapsedTime()
    
                particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00003)
                particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00003)
    
                // Render
                renderer.render(scene, camera)
    
                // Call tick again on the next frame
                window.requestAnimationFrame(tick)
            }
        } else {
            tick = () => {
                var elapsedTime = clock.getElapsedTime()
    
                particlesMesh.rotation.x = 1000 * (elapsedTime * 0.00003)
                particlesMesh.rotation.y = 700 * (elapsedTime * 0.00003)
    
                // Render
                renderer.render(scene, camera)
    
                // Call tick again on the next frame
                window.requestAnimationFrame(tick)
            }
        }

		tick();
	},
    methods: {
        removeElem() {
            document.querySelector('.dg.ac').remove(); 
        }
    }
}
</script>