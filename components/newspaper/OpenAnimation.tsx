"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface Props {
  open: boolean;
  children: React.ReactNode;
}

export default function OpenAnimation({
  open,
  children,
}: Props) {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? -1.55 : -1.35,
      0.08
    );

    group.current.scale.lerp(
      new THREE.Vector3(
        open ? 1.08 : 1,
        open ? 1.08 : 1,
        open ? 1.08 : 1
      ),
      0.08
    );

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? 0.08 : 0.03,
      0.08
    );
  });

  return <group ref={group}>{children}</group>;
}
