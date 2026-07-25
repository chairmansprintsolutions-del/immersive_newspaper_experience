"use client";

import PaperMaterial from "../materials/PaperMaterial";

export default function Table() {
  return (
    <mesh castShadow receiveShadow position={[0, 0.75, 0]}>
      <boxGeometry args={[4, 0.08, 2.5]} />
      <PaperMaterial />
    </mesh>
  );
}
