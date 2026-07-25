"use client";

import PaperStack from "./PaperStack";
import PageCurl from "./PageCurl";

interface Props {
  open: boolean;
}

export default function NewspaperModel({
  open,
}: Props) {
  return (
    <group position={[0, 0.03, 0]}>
      {/* Bottom pages */}
      <PaperStack pages={18} />

      {/* Opening page */}
      <group position={[0, 0.03, 0]}>
        <PageCurl open={open} />
      </group>
    </group>
  );
}
