"use client";

import { Plane } from "@react-three/drei";

export default function SunRays() {
  return (
    <Plane
      args={[8, 3]}
      rotation={[-Math.PI / 2.8, 0.35, 0]}
      position={[-2, 2.2, -2]}
    >
      <meshBasicMaterial
        color="#fff8cf"
        transparent
        opacity={0.12}
      />
    </Plane>
  );
}
