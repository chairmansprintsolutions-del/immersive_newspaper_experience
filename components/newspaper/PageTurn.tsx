"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface Props {
  page: number;
  current: number;
  children: React.ReactNode;
}

export default function PageTurn({
  page,
  current,
  children,
}: Props) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current) return;

    const target =
      page < current ? -Math.PI : 0;

    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      target,
      0.08
    );
  });

  return <group ref={ref}>{children}</group>;
}
