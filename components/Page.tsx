"use client";

import { motion } from "framer-motion";
import NewspaperContent from "./NewspaperContent";

interface Props {
  side: "left" | "right";
  open: boolean;
}

export default function Page({ side, open }: Props) {
  const left = side === "left";

  return (
    <motion.group
      position={[left ? -0.68 : 0.68, 0.03, 0]}
      animate={{
        rotateY: open
          ? left
            ? -0.08
            : 0.08
          : 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <mesh receiveShadow castShadow>
        <boxGeometry args={[1.35, 0.01, 3.6]} />
        <meshStandardMaterial color="#faf8f0" />
      </mesh>

      <NewspaperContent side={side} />
    </motion.group>
  );
}
