"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface Props {
  open: boolean;
  width?: number;
  height?: number;
}

export default function PageCurl({
  open,
  width = 2.8,
  height = 3.8,
}: Props) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!mesh.current) return;

    const geometry = mesh.current.geometry as THREE.PlaneGeometry;
    const position = geometry.attributes.position;

    const target = open ? 1 : 0;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);

      if (!open) {
        position.setZ(i, 0);
        continue;
      }

      const normalized = (x + width / 2) / width;
      const angle = normalized * Math.PI * 0.75 * target;

      position.setZ(i, Math.sin(angle) * 0.35);
    }

    position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh
      ref={mesh}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0.035, 0]}
      castShadow
      receiveShadow
    >
      <planeGeometry
        args={[width, height, 80, 80]}
      />

      <meshStandardMaterial
        color="#f4efe3"
        roughness={0.95}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
