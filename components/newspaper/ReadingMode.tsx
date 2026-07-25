"use client";

import { Html } from "@react-three/drei";

interface Props {
  open: boolean;
}

export default function ReadingMode({ open }: Props) {
  if (!open) return null;

  return (
    <Html
      transform
      position={[0, 0.08, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      distanceFactor={2}
      occlude
    >
      <div className="h-[700px] w-[980px] overflow-auto rounded bg-[#f9f6ed] p-12 shadow-2xl">
        <h1 className="mb-8 text-6xl font-black">
          DAILY NEWS
        </h1>

        <div className="grid grid-cols-2 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i}>
              <div className="mb-3 h-44 bg-gray-300 rounded" />

              <h2 className="mb-2 text-2xl font-bold">
                Headline {i + 1}
              </h2>

              <p className="text-justify text-sm leading-7">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Html>
  );
}
