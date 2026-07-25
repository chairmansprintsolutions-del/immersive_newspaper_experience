"use client";

import { MeshStandardMaterialProps } from "@react-three/fiber";
import { useMaterialTextures } from "../loaders/TextureLoader";

export default function PaperMaterial(
  props: MeshStandardMaterialProps
) {
  const maps = useMaterialTextures({
    color: "/textures/paper.jpg",
  });

  return (
    <meshStandardMaterial
      {...maps}
      roughness={1}
      metalness={0}
      {...props}
    />
  );
}
