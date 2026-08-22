"use client";

export default function NewspaperScene() {
  return (
    <mesh
      position={[0, 0.02, 0]}
      rotation={[0, 0, 0]}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[2.8, 0.06, 3.8]} />

      <meshStandardMaterial
        color="#f4efe3"
        roughness={0.95}
      />
    </mesh>
  );
}
