"use client";

import { Box } from "@react-three/drei";

export default function Walls() {
  return (
    <>
      <Box args={[30, 8, 0.2]} position={[0, 4, -10]}>
        <meshStandardMaterial color="#efe5d0" />
      </Box>

      <Box args={[0.2, 8, 30]} position={[-10, 4, 0]}>
        <meshStandardMaterial color="#efe5d0" />
      </Box>

      <Box args={[0.2, 8, 30]} position={[10, 4, 0]}>
        <meshStandardMaterial color="#efe5d0" />
      </Box>
    </>
  );
}
