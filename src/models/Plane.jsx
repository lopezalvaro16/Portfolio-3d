import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

// Modelo 3D de: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  // Carga el modelo 3D y sus animaciones
  const { scene, animations } = useGLTF(planeScene);
  // Obtiene las acciones de animación asociadas con el avión
  const { actions } = useAnimations(animations, ref);

  // Usa un efecto para controlar la animación del avión basándose en 'isRotating'
  // Nota: Los nombres de las animaciones se pueden encontrar en el sitio web de Sketchfab
  // donde se aloja el modelo 3D.
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      {/* Usa el elemento primitivo cuando deseas incrustar directamente un modelo o escena 3D compleja */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
