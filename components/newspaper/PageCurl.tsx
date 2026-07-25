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
    const pos = geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);

      const t = open ? 1 : 0;

      const angle =
        (x / width) *
        Math.PI *
        0.9 *
        t;

      const z =
        Math.sin(angle) * 0.55;

      const y =
        Math.max(0, Math.sin(angle)) *
        0.18;

      pos.setZ(i, z);
      pos.setY(i, y);
    }

    pos.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh
      ref={mesh}
      rotation={[-Math.PI / 2, 0, 0]}
      castShadow
      receiveShadow
    >
      <planeGeometry
        args={[width, height, 120, 160]}
      />

      <meshPhysicalMaterial
        color="#faf7ef"
        roughness={0.92}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
