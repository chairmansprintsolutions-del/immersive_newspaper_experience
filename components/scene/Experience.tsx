"use client";

import { OrbitControls } from "@react-three/drei";
import Floor from "./Floor";
import Table from "./Table";

export default function Experience() {
  return (
    <>
      <color attach="background" args={["#f6f2eb"]} />

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[4, 8, 5]}
        intensity={2}
        castShadow
      />

      <Floor />
      <Table />

      <OrbitControls
        makeDefault
        enablePan={false}
        target={[0, 0.75, 0]}
      />
    </>
  );
}
