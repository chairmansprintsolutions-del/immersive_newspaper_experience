"use client";

import { Float } from "@react-three/drei";

export default function Newspaper3D() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh rotation={[-1.2, 0, 0]}>
        <boxGeometry args={[3, 0.04, 4]} />
        <meshStandardMaterial color="#f5f1e8" />
      </mesh>
    </Float>
  );
}
