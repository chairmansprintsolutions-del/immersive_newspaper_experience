"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  open: boolean;
}

export default function ReadingCamera({ open }: Props) {
  const { camera } = useThree();

  const target = useRef(
    new THREE.Vector3(0, 2.2, 5)
  );

  useEffect(() => {
    target.current = open
      ? new THREE.Vector3(0, 1.2, 2.4)
      : new THREE.Vector3(0, 2.2, 5);
  }, [open]);

  useFrame(() => {
    camera.position.lerp(target.current, 0.05);
    camera.lookAt(0, 0.1, 0);
  });

  return null;
}
