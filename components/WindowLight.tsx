"use client";

export default function WindowLight() {
  return (
    <mesh rotation={[-Math.PI / 2, 0.35, 0]} position={[-1.6, 0.012, -0.5]}>
      <planeGeometry args={[5.5, 1.8]} />
      <meshBasicMaterial
        color="#fff6c9"
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}
