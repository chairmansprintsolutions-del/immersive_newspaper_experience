"use client";

import { OrbitControls } from "@react-three/drei";

import Floor from "./Floor";
import Table from "./Table";
import NewspaperScene from "../newspaper/NewspaperScene";

export default function Experience() {
  return (
    <>
      <color attach="background" args={["#f6f2eb"]} />

      <ambientLight intensity={1.5} />

      <directionalLight
        castShadow
        position={[4, 8, 5]}
        intensity={2}
      />

      <Floor />
      <Table />

      {/* Newspaper sitting directly on the table */}
      <group
        position={[0, 0.795, 0]}
        scale={[0.7, 0.7, 0.7]}
      >
        <NewspaperScene />
      </group>

      <OrbitControls
        makeDefault
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        target={[0, 0.75, 0]}
      />
    </>
  );
}
