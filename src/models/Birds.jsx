import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

// Modelo 3D desde: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Bird() {
  const birdRef = useRef();

  // Cargar el modelo 3D y las animaciones desde el archivo GLTF proporcionado
  const { scene, animations } = useGLTF(birdScene);

  // Obtener acceso a las animaciones para el ave
  const { actions } = useAnimations(animations, birdRef);

  // Reproducir la animación "Take 001" cuando el componente se monta
  // Nota: Los nombres de las animaciones se pueden encontrar en el sitio web de Sketchfab donde se aloja el modelo 3D.
  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Actualizar la posición Y para simular un movimiento similar al de un pájaro utilizando una onda sinusoidal
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Verificar si el ave alcanzó un cierto punto final en relación con la cámara
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Cambiar dirección hacia atrás y rotar el ave 180 grados en el eje Y
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Cambiar dirección hacia adelante y restablecer la rotación del ave
      birdRef.current.rotation.y = 0;
    }

    // Actualizar las posiciones X y Z basadas en la dirección
    if (birdRef.current.rotation.y === 0) {
      // Mover hacia adelante
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Mover hacia atrás
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    // Para crear y mostrar objetos 3D
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      // Usar el elemento primitivo cuando desees incrustar directamente un
      modelo 3D complejo o una escena
      <primitive object={scene} />
    </mesh>
  );
}
