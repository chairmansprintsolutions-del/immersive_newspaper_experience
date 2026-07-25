"use client";

import PageMesh from "./PageMesh";

interface Props {
  pages?: number;
}

export default function PaperStack({
  pages = 20,
}: Props) {
  return (
    <group>
      {Array.from({ length: pages }).map((_, i) => (
        <group
          key={i}
          position={[0, i * 0.0012, 0]}
        >
          <PageMesh />
        </group>
      ))}
    </group>
  );
}
