"use client";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

interface MaterialMaps {
  color: string;
  normal?: string;
  roughness?: string;
  ao?: string;
  metalness?: string;
}

export function useMaterialTextures({
  color,
  normal,
  roughness,
  ao,
  metalness,
}: MaterialMaps) {
  const colorMap = useLoader(THREE.TextureLoader, color);

  const normalMap = normal
    ? useLoader(THREE.TextureLoader, normal)
    : undefined;

  const roughnessMap = roughness
    ? useLoader(THREE.TextureLoader, roughness)
    : undefined;

  const aoMap = ao
    ? useLoader(THREE.TextureLoader, ao)
    : undefined;

  const metalnessMap = metalness
    ? useLoader(THREE.TextureLoader, metalness)
    : undefined;

  [
    colorMap,
    normalMap,
    roughnessMap,
    aoMap,
    metalnessMap,
  ]
    .filter(Boolean)
    .forEach((texture) => {
      texture!.wrapS = THREE.RepeatWrapping;
      texture!.wrapT = THREE.RepeatWrapping;
      texture!.colorSpace = THREE.SRGBColorSpace;
      texture!.anisotropy = 16;
    });

  return {
    map: colorMap,
    normalMap,
    roughnessMap,
    aoMap,
    metalnessMap,
  };
}
