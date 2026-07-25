"use client";

import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Table() {
  const wood = useLoader(THREE.TextureLoader, "/textures/wood.jpg");

  wood.wrapS = wood.wrapT = THREE.RepeatWrapping;
  wood.repeat.set(6, 6);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.03, 0]}>
      <planeGeometry args={[12, 12]} />
      <meshStandardMaterial map={wood} />
    </mesh>
  );
}
