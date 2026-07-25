"use client";

import { Float, RoundedBox } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Newspaper3D() {
  const paper = useLoader(
    THREE.TextureLoader,
    "/textures/paper.jpg"
  );

  paper.wrapS = paper.wrapT = THREE.RepeatWrapping;
  paper.repeat.set(1, 1);

  return (
    <Float speed={2} floatIntensity={0.15}>
      <group position={[0, 0.05, 0]}>
        <RoundedBox args={[2.6, 0.04, 3.6]} radius={0.02}>
          <meshStandardMaterial map={paper} />
        </RoundedBox>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
          <planeGeometry args={[2.4, 3.4]} />
          <meshBasicMaterial color="#111" transparent opacity={0.05} />
        </mesh>
      </group>
    </Float>
  );
}
