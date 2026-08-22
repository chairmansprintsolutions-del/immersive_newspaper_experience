"use client";

import { OrbitControls } from "@react-three/drei";

import Floor from "./Floor";
import Table from "./Table";
import CafeScene from "./CafeScene";
import NewspaperScene from "../newspaper/NewspaperScene";

export default function Experience() {
  return (
    <>
      <color attach="background" args={["#f3ede3"]} />

      <ambientLight intensity={1.4} />

      <directionalLight
        castShadow
        position={[5, 8, 6]}
        intensity={2.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <pointLight
        position={[-3, 5, 2]}
        intensity={1}
      />

      <Floor />

      <Table />

      <CafeScene />

      {/* Newspaper */}
      <group position={[0, 0.80, 0]}>
        <NewspaperScene />
      </group>

      <OrbitControls
        makeDefault
        enablePan={false}
        target={[0, 1.2, 0]}
        minDistance={5}
        maxDistance={11}
        minPolarAngle={0.55}
        maxPolarAngle={1.35}
      />
    </>
  );
}
