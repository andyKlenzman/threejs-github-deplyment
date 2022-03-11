import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const canvas = document.querySelector(".webgl")
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff0f
})




const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,

}

const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, .1, 1000);
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})



const controls = new OrbitControls(camera, renderer.domElement);


renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled = true

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}

animate()
