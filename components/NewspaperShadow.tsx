"use client";

export default function NewspaperShadow() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0.011, 0]}
    >
      <planeGeometry args={[2.8, 3.8]} />
      <shadowMaterial opacity={0.3} />
    </mesh>
  );
}
