"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newspaper() {
  const [open, setOpen] = useState(false);

  return (
    <motion.group
      onClick={() => setOpen(!open)}
      animate={{
        rotationX: open ? -1.57 : -1.35,
        y: open ? 0.08 : 0.03,
        scale: open ? 1.12 : 1,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      {/* Bottom Page */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[2.7, 0.02, 3.7]} />
        <meshStandardMaterial color="#f7f4eb" />
      </mesh>

      {/* Top Page */}
      <motion.group
        animate={{
          rotateZ: open ? -180 : 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <mesh
          position={[0, 0.025, -1.85]}
          rotation={[0, 0, 0]}
        >
          <boxGeometry args={[2.7, 0.01, 3.7]} />
          <meshStandardMaterial color="#fcfaf3" />
        </mesh>
      </motion.group>
    </motion.group>
  );
}
