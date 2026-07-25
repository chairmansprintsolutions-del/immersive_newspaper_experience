"use client";

import { Box } from "@react-three/drei";

export default function Chair() {
  return (
    <group position={[3.2, -0.1, 1.8]}>
      <Box args={[0.9, 0.08, 0.9]}>
        <meshStandardMaterial color="#7b5232" />
      </Box>

      <Box args={[0.08, 1, 0.08]} position={[0, 0.5, -0.4]}>
        <meshStandardMaterial color="#7b5232" />
      </Box>
    </group>
  );
}
