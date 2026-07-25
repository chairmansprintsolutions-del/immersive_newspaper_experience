"use client";

import { Plane } from "@react-three/drei";

export default function Floor() {
  return (
    <Plane
      args={[30, 30]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.05, 0]}
      receiveShadow
    >
      <meshStandardMaterial
        color="#9d6d45"
        roughness={0.9}
      />
    </Plane>
  );
}
