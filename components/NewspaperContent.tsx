"use client";

import { Html } from "@react-three/drei";
import { headlines } from "@/data/headlines";

interface Props {
  side: "left" | "right";
}

export default function NewspaperContent({ side }: Props) {
  const items =
    side === "left"
      ? headlines.slice(0, 2)
      : headlines.slice(2);

  return (
    <Html
      transform
      distanceFactor={2}
      position={[0, 0.02, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <div className="w-[330px] h-[520px] overflow-hidden bg-[#faf8f2] p-6 text-black">
        <h1 className="mb-4 text-2xl font-bold">
          {side === "left" ? "Morning" : "Edition"}
        </h1>

        {items.map((item) => (
          <div key={item.title} className="mb-5">
            <h2 className="font-bold">
              {item.title}
            </h2>

            <p className="text-sm">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </Html>
  );
}
