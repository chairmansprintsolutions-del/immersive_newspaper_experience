"use client";

import { useState } from "react";

import Newspaper from "./Newspaper";
import NewspaperContent from "./NewspaperContent";
import ReadingCamera from "./ReadingCamera";

export default function NewspaperScene() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ReadingCamera open={open} />

      <group
        onClick={() => setOpen((v) => !v)}
      >
        <Newspaper />

        {open && <NewspaperContent />}
      </group>
    </>
  );
}
