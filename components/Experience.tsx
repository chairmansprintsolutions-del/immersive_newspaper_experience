"use client";

export default function Experience() {
  return (
    <>
      <ambientLight intensity={1} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
