import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/fox.glb";

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
const Fox = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        {/* Add other skinnedMesh components as needed */}
      </group>
    </group>
  );
};

export default Fox;

useGLTF.preload(scene);
