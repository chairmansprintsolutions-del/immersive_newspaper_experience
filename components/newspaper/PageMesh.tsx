"use client";

import * as THREE from "three";

export default function PageMesh() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[2.8, 0.018, 3.8]} />
      <meshStandardMaterial
        color="#f5f0e6"
        roughness={0.95}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
