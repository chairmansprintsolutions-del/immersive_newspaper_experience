"use client";

import * as THREE from "three";

export default function NewspaperScene() {
  return (
    <group>
      {/* Main newspaper body */}
      <mesh
        position={[0, 0.04, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.8, 3.8, 0.06]} />

        <meshStandardMaterial
          color="#f3eee2"
          roughness={0.95}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Slightly smaller top sheet */}
      <mesh
        position={[0, 0.075, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[2.68, 3.68]} />

        <meshStandardMaterial
          color="#fffdf5"
          roughness={0.95}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Centre fold */}
      <mesh
        position={[0, 0.082, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[0.025, 3.5]} />

        <meshBasicMaterial
          color="#cfc7b7"
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}
