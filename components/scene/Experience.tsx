"use client";

import { OrbitControls } from "@react-three/drei";

import Floor from "./Floor";
import Table from "./Table";
import CafeScene from "./CafeScene";
import NewspaperScene from "../newspaper/NewspaperScene";

export default function Experience() {
  return (
    <>
      {/* Background */}
      <color attach="background" args={["#f4eee4"]} />

      {/* Ambient light */}
      <ambientLight intensity={1.2} />

      {/* Main sunlight */}
      <directionalLight
        castShadow
        position={[4, 8, 5]}
        intensity={2.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={30}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />

      {/* Soft fill light */}
      <pointLight
        position={[-3, 4, 2]}
        intensity={1}
        distance={12}
      />

      {/* Floor */}
      <Floor />

      {/* Main table */}
      <Table />

      {/* Café environment */}
      <CafeScene />

      {/* Newspaper */}
      <group
        position={[0, 0.84, 0]}
        scale={[0.65, 0.65, 0.65]}
      >
        <NewspaperScene />
      </group>

      {/* Camera controls */}
      <OrbitControls
        makeDefault
        enablePan={false}
        minDistance={3}
        maxDistance={9}
        minPolarAngle={0.45}
        maxPolarAngle={Math.PI / 2.05}
        target={[0, 0.8, 0]}
      />
    </>
  );
}
