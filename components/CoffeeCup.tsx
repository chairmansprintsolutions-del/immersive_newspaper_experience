"use client";

import { Cylinder, Torus } from "@react-three/drei";

export default function CoffeeCup() {
  return (
    <group position={[1.8, 0.12, -0.8]}>
      <Cylinder args={[0.22, 0.25, 0.35, 32]}>
        <meshStandardMaterial color="white" />
      </Cylinder>

      <Cylinder args={[0.19, 0.19, 0.3, 32]} position={[0, 0.02, 0]}>
        <meshStandardMaterial color="#3b2416" />
      </Cylinder>

      <Torus
        args={[0.08, 0.02, 16, 32]}
        rotation={[0, Math.PI / 2, 0]}
        position={[0.25, 0, 0]}
      >
        <meshStandardMaterial color="white" />
      </Torus>
    </group>
  );
}
