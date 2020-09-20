// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );
// camera.position.z = 5;
// var renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setClearColor("#e5e5e5");
// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// window.addEventListener("resize", () => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;

//     camera.updateProjectionMatrix();
// });

// var raycaster = new THREE.Raycaster();
// var mouse = new THREE.Vector2();

// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });
// // var mesh = new THREE.Mesh(geometry, material);
// // scene.add(mesh);

// meshX = -10;
// for (var i = 0; i < 50; i++) {
//     var mesh = new THREE.Mesh(geometry, material);
//     mesh.position.x = (Math.random() - 0.5) * 15;
//     mesh.position.y = (Math.random() - 0.5) * 15;
//     mesh.position.z = (Math.random() - 0.7) * 10;
//     scene.add(mesh);
//     meshX += 1;
// }

// var light = new THREE.PointLight(0xffffff, 1, 500);
// light.position.set(0, 0, 0);
// scene.add(light);

// var light = new THREE.PointLight(0xffffff, 2, 1000);
// light.position.set(0, 0, 25);
// scene.add(light);

// var render = function () {
//     requestAnimationFrame(render);
//     // mesh.rotation.x += 0.05;
//     // mesh.rotation.y += 0.01;
//     controls.update();

//     renderer.render(scene, camera);
// }

// var controls = new OrbitControls( camera, renderer.domElement );
// camera.position.set( 0, 20, 100 );
// controls.update();


// function onMouseMove(event) {
//     event.preventDefault();
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

//     raycaster.setFromCamera(mouse, camera);

//     var intersects = raycaster.intersectObjects(scene.children, true);
//     for (var i = 0; i < intersects.length; i++) {
//         this.tl = new TimelineMax();
//         this.tl.to(intersects[i].object.scale, .7, { x: 2, ease: Expo.easeOut });
//         this.tl.to(intersects[i].object.scale, .5, { x: 1, ease: Expo.easeOut });
//         this.tl.to(intersects[i].object.position, .5, { y: -2, ease: Expo.easeOut });
//         this.tl.to(intersects[i].object.rotation, .5, { y: Math.PI * .5, ease: Expo.easeOut }, "=-1.5")

//     }
// }

// render();


// window.addEventListener('mousemove', onMouseMove)
// // window.addEventListener('click', onMouseMove)

import * as THREE from 'https://unpkg.com/three@0.120.1/build/three.module.js';

import { OrbitControls } from 'https://unpkg.com/three@0.120.1/examples/jsm/controls/OrbitControls.js';

var camera, controls, scene, renderer;

init();
//render(); // remove when using next line for animation loop (requestAnimationFrame)
animate();

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);
    scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(-400, 50, 0);
    

    // controls
    
    controls = new OrbitControls(camera, renderer.domElement);

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    controls.autoRotate = true;
    controls.autoRotateSpeed = Math.PI/180*25;
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 100;
    controls.maxDistance = 500;

    controls.maxPolarAngle = Math.PI / 2;

    

    // world

    // var geometry = new THREE.BoxBufferGeometry(20, 20, Math.random()*10);
    var material = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true });
    var group = new THREE.Group();

    for (var i = 0; i < 5000; i++) {
        var a = Math.random()*10+5;
        var b = Math.random()*20 + 3;
        var c = Math.random()*10+5;
        var px = Math.random() * 1600 - 800;
        var pz = Math.random() * 1600 - 800;
        if (px > -10 && px < 10 && pz > -10 && pz < 10)
        {
            b = b +20;
            if (b>40)
            {
                b = b + 10;
            }
            
        }
        else if (px > -50 && px < 50 && pz > -50 && pz < 50 )
        {
            b = b + 10;
            if (b>30)
            {
                b = b + 10;
            }
            
        }
        else if (px > -100 && px < 100 && pz > -100 && pz < 100 && b>21)
        {
            b = b + 20;
        }
        else if (px > -200 && px < 200 && pz > -200 && pz < 200 && b>20)
        {
            b = b + 10;
        }
        
        var geometry = new THREE.BoxBufferGeometry(a, b, c);
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = px;
        mesh.position.y = b/2;
        mesh.position.z = pz;
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        group.add(mesh);
    }
    scene.add(group);
    
    // lights

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x002288);
    light.position.set(- 1, - 1, - 1);
    scene.add(light);

    var light = new THREE.AmbientLight(0x222222);
    scene.add(light);

    //

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

    requestAnimationFrame(animate);
    // group[1].rotation.y += Math.PI/180*0.1;
    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

    render();

}

function render() {

    renderer.render(scene, camera);

}