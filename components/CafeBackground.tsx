"use client";

import { Sphere } from "@react-three/drei";

export default function CafeBackground() {
  return (
    <Sphere args={[40, 32, 32]}>
      <meshBasicMaterial
        color="#f3ead8"
        side={2}
      />
    </Sphere>
  );
}
