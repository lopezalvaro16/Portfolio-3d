import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

// Modelo 3D de: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  // Nota: Los nombres de las animaciones se pueden encontrar en el sitio web de Sketchfab
  // donde se aloja el modelo 3D. Esto asegura animaciones suaves al hacer la velocidad de rotación independiente del fotograma.
  // 'delta' representa el tiempo en segundos desde el último fotograma.
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Ajusta la velocidad de rotación según sea necesario
    }
  });

  return (
    <mesh ref={skyRef}>
      {/* Usa el elemento primitivo cuando deseas incrustar directamente un modelo o escena 3D compleja */}
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
