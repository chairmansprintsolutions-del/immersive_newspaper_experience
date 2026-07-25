"use client";

import { OrbitControls } from "@react-three/drei";
import Floor from "./Floor";
import Table from "./Table";
import NewspaperScene from "./NewspaperScene";

export default function Experience() {
  return (
    <>
      <ambientLight intensity={1} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={2}
        castShadow
      />

      <Floor />

      <Table />

      <group position={[0, 0.79, 0]}>
        <NewspaperScene />
      </group>

      <OrbitControls />
    </>
  );
}
