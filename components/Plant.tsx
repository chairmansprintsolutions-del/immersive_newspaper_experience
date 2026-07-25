"use client";

import { Cone, Cylinder } from "@react-three/drei";

export default function Plant() {
  return (
    <group position={[-2.7, 0, -1.8]}>
      <Cylinder args={[0.18, 0.22, 0.35, 24]} position={[0, 0.17, 0]}>
        <meshStandardMaterial color="#7a4a25" />
      </Cylinder>

      <Cone args={[0.45, 0.9, 8]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#2f8f46" />
      </Cone>

      <Cone args={[0.35, 0.7, 8]} position={[0.18, 1.0, 0]}>
        <meshStandardMaterial color="#3ea85a" />
      </Cone>

      <Cone args={[0.35, 0.7, 8]} position={[-0.18, 0.95, 0]}>
        <meshStandardMaterial color="#3ea85a" />
      </Cone>
    </group>
  );
}
