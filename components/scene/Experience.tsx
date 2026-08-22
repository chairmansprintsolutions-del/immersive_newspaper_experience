"use client";

import { Environment, OrbitControls } from "@react-three/drei";

import Floor from "./Floor";
import Table from "./Table";
import Lights from "./Lights";
import CafeScene from "./CafeScene";
import NewspaperScene from "../newspaper/NewspaperScene";

export default function Experience() {
  return (
    <>
      <color attach="background" args={["#f6f2eb"]} />

      <Lights />

      <Floor />
      <Table />

      <CafeScene />

      <group position={[0, 0.79, 0]}>
        <NewspaperScene />
      </group>

      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        maxPolarAngle={Math.PI / 2.05}
      />
    </>
  );
}
