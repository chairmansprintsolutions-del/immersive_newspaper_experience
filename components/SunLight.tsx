"use client";

export default function SunLight() {
  return (
    <>
      <directionalLight
        position={[5, 8, 2]}
        intensity={3}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <ambientLight intensity={0.8} />

      <fog attach="fog" args={["#d8c3a5", 8, 18]} />
    </>
  );
}
