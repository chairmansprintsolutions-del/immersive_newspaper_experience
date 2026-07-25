"use client";

import { useState } from "react";

import NewspaperModel from "./NewspaperModel";
import OpenAnimation from "./OpenAnimation";
import ReadingMode from "./ReadingMode";

export default function NewspaperScene() {
  const [open, setOpen] = useState(false);

  return (
    <group
      onClick={() => setOpen(!open)}
    >
      <OpenAnimation open={open}>
        <NewspaperModel open={open} />
      </OpenAnimation>

      <ReadingMode open={open} />
    </group>
  );
}
