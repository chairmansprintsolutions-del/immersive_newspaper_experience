"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface Props {
  width?: number;
  height?: number;
}

export default function PageMesh({
  width = 2.8,
  height = 3.8,
}: Props) {
  const geometry = useMemo(() => {
    const g = new THREE.PlaneGeometry(
      width,
      height,
      80,
      120
    );

    const pos = g.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);

      // slight natural paper bend
      const curve = Math.sin((x / width) * Math.PI) * 0.03;

      pos.setZ(i, curve);
    }

    pos.needsUpdate = true;
    g.computeVertexNormals();

    return g;
  }, [width, height]);

  return (
    <mesh
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
      castShadow
    >
      <meshPhysicalMaterial
        color="#faf7ef"
        roughness={0.92}
        clearcoat={0.05}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
