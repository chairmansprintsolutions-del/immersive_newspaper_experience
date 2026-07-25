"use client";

import { Box, Plane } from "@react-three/drei";

export default function Window() {
  return (
    <group position={[0, 3.2, -9.85]}>
      <Plane args={[6, 3]}>
        <meshStandardMaterial
          color="#cde8ff"
          transparent
          opacity={0.45}
        />
      </Plane>

      <Box args={[6.2, 3.2, 0.08]}>
        <meshStandardMaterial color="#6d4c2d" />
      </Box>

      <Box args={[0.08, 3.2, 0.15]}>
        <meshStandardMaterial color="#6d4c2d" />
      </Box>

      <Box args={[6.2, 0.08, 0.15]}>
        <meshStandardMaterial color="#6d4c2d" />
      </Box>
    </group>
  );
}
