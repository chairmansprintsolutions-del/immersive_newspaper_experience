"use client";

import * as THREE from "three";

export default function CafeScene() {
  return (
    <group>
      {/* Back wall */}
      <mesh position={[0, 2.5, -4]}>
        <boxGeometry args={[12, 5, 0.15]} />
        <meshStandardMaterial
          color="#e8dfd2"
          roughness={0.9}
        />
      </mesh>

      {/* Left wall */}
      <mesh position={[-6, 2.5, 0]}>
        <boxGeometry args={[0.15, 5, 8]} />
        <meshStandardMaterial
          color="#ded3c5"
          roughness={0.9}
        />
      </mesh>

      {/* Window frame */}
      <mesh position={[0, 2.6, -3.9]}>
        <boxGeometry args={[3.8, 2.4, 0.08]} />
        <meshStandardMaterial
          color="#3b3028"
          roughness={0.7}
        />
      </mesh>

      {/* Window glass */}
      <mesh position={[0, 2.6, -3.84]}>
        <planeGeometry args={[3.45, 2.05]} />
        <meshStandardMaterial
          color="#9db7c5"
          roughness={0.25}
          metalness={0.05}
        />
      </mesh>

      {/* Window vertical divider */}
      <mesh position={[0, 2.6, -3.75]}>
        <boxGeometry args={[0.08, 2.1, 0.1]} />
        <meshStandardMaterial color="#3b3028" />
      </mesh>

      {/* Window horizontal divider */}
      <mesh position={[0, 2.6, -3.75]}>
        <boxGeometry args={[3.5, 0.08, 0.1]} />
        <meshStandardMaterial color="#3b3028" />
      </mesh>

      {/* Plant pot */}
      <mesh position={[-4, 0.55, -2.5]}>
        <cylinderGeometry args={[0.35, 0.28, 0.65, 32]} />
        <meshStandardMaterial
          color="#8b5a3c"
          roughness={0.9}
        />
      </mesh>

      {/* Plant stem */}
      <mesh position={[-4, 1.4, -2.5]}>
        <cylinderGeometry args={[0.045, 0.045, 1.6, 12]} />
        <meshStandardMaterial color="#405438" />
      </mesh>

      {/* Plant leaves */}
      <mesh position={[-3.65, 1.65, -2.5]} rotation={[0, 0, -0.45]}>
        <sphereGeometry args={[0.28, 16, 16]} />
        <meshStandardMaterial color="#526b42" roughness={0.9} />
      </mesh>

      <mesh position={[-4.3, 1.8, -2.5]} rotation={[0, 0, 0.45]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#526b42" roughness={0.9} />
      </mesh>

      <mesh position={[-4, 2.05, -2.5]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#60794b" roughness={0.9} />
      </mesh>

      {/* Coffee cup */}
      <group position={[1.65, 0.98, -0.75]}>
        <mesh>
          <cylinderGeometry args={[0.28, 0.23, 0.45, 32]} />
          <meshStandardMaterial
            color="#f1eee8"
            roughness={0.6}
          />
        </mesh>

        {/* Coffee */}
        <mesh position={[0, 0.23, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.015, 32]} />
          <meshStandardMaterial
            color="#3b2417"
            roughness={0.5}
          />
        </mesh>

        {/* Handle */}
        <mesh
          position={[0.31, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[0.13, 0.045, 12, 24]} />
          <meshStandardMaterial
            color="#f1eee8"
            roughness={0.6}
          />
        </mesh>
      </group>

      {/* Chair */}
      <group position={[3.2, 0.65, 1.8]}>
        {/* Seat */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.4, 0.15, 1.3]} />
          <meshStandardMaterial
            color="#6f4932"
            roughness={0.9}
          />
        </mesh>

        {/* Back */}
        <mesh position={[0, 0.9, 0.55]}>
          <boxGeometry args={[1.4, 1.7, 0.15]} />
          <meshStandardMaterial
            color="#6f4932"
            roughness={0.9}
          />
        </mesh>

        {/* Legs */}
        {[
          [-0.5, -0.55],
          [0.5, -0.55],
          [-0.5, 0.45],
          [0.5, 0.45],
        ].map(([x, z], i) => (
          <mesh
            key={i}
            position={[x, -0.55, z]}
          >
            <cylinderGeometry args={[0.07, 0.07, 1.1, 12]} />
            <meshStandardMaterial
              color="#4a3021"
              roughness={0.9}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
