"use client";

import { Torus, Cylinder } from "@react-three/drei";

export default function Glasses() {
  return (
    <group position={[-1.2, 0.05, 0.9]} rotation={[-Math.PI / 2, 0, 0.2]}>
      <Torus args={[0.16, 0.01, 16, 32]}>
        <meshStandardMaterial color="#222" />
      </Torus>

      <Torus args={[0.16, 0.01, 16, 32]} position={[0.4, 0, 0]}>
        <meshStandardMaterial color="#222" />
      </Torus>

      <Cylinder
        args={[0.008, 0.008, 0.08]}
        rotation={[0, 0, Math.PI / 2]}
        position={[0.2, 0, 0]}
      >
        <meshStandardMaterial color="#222" />
      </Cylinder>
    </group>
  );
}
