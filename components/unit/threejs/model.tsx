import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type Props = {};

const BgModel = (props: Props) => {
  let canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef?.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true,
      });
      const camera = new THREE.PerspectiveCamera(10, 1);
      camera.position.set(
        279.438407348616,
        662.3416875749203,
        437.31341829291944
      );
      console.log(camera.position);
      const controls = new OrbitControls(camera, renderer.domElement);
      const loader = new GLTFLoader();
      const light = new THREE.DirectionalLight(0xffffff, 1.7);
      renderer.outputEncoding = THREE.sRGBEncoding;
      scene.add(light);
      controls.update();

      loader.load("/three/coffee/scene.gltf", (object) => {
        scene.add(object.scene);
        renderer.render(scene, camera);
        function animate() {
          controls.update();
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        }
        animate();
      });
    }
  }, [canvasRef]);
  return (
    <div className="absolute z-50 right-3 bottom-44">
      <canvas ref={canvasRef} id="canvas" />
    </div>
  );
};

export default BgModel;
