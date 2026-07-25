"use client";

import { MeshStandardMaterialProps } from "@react-three/fiber";
import { useMaterialTextures } from "../loaders/TextureLoader";

export default function WoodMaterial(
  props: MeshStandardMaterialProps
) {
  const maps = useMaterialTextures({
    color: "/textures/wood.jpg",
  });

  return (
    <meshStandardMaterial
      {...maps}
      roughness={0.8}
      metalness={0.05}
      {...props}
    />
  );
}
