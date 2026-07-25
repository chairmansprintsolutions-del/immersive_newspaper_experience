"use client";

import { useState } from "react";

import Newspaper from "./Newspaper";
import Page from "./Page";
import ReadingCamera from "./ReadingCamera";

export default function NewspaperScene() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ReadingCamera open={open} />

      <group>
        <Newspaper
          open={open}
          onToggle={() => setOpen(!open)}
        />

        {open && (
          <>
            <Page side="left" open={open} />
            <Page side="right" open={open} />
          </>
        )}
      </group>
    </>
  );
}
