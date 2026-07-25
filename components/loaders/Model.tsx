"use client";

import { useGLTF } from "@react-three/drei";

interface Props {
  path: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

export default function Model({
  path,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}: Props) {
  const { scene } = useGLTF(path);

  return (
    <primitive
      object={scene.clone()}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}
