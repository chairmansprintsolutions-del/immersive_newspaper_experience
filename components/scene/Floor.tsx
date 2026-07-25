"use client";

import WoodMaterial from "../materials/WoodMaterial";

export default function Floor() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <WoodMaterial />
    </mesh>
  );
}
