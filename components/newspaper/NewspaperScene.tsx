"use client";

import { useState } from "react";
import NewspaperModel from "./NewspaperModel";
import ReadingMode from "./ReadingMode";

export default function NewspaperScene() {
  const [open, setOpen] = useState(false);

  return (
    <group>
      <NewspaperModel
        open={open}
        onToggle={() => setOpen(!open)}
      />

      {open && <ReadingMode />}
    </group>
  );
}
