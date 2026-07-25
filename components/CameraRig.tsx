"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraRig() {
  const { camera } = useThree();
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current += delta;

    camera.position.x = Math.sin(t.current * 0.15) * 0.25;
    camera.position.y = 2.2;
    camera.position.z = 5;

    camera.lookAt(0, 0, 0);
  });

  return null;
}
