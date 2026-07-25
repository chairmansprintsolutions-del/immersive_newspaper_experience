"use client";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        castShadow
        position={[5, 8, 5]}
        intensity={2}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <pointLight
        position={[-2, 3, -2]}
        intensity={20}
        distance={10}
      />
    </>
  );
}
