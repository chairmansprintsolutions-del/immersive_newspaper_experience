"use client";

import { Html } from "@react-three/drei";
import { headlines } from "@/data/headlines";

export default function NewspaperContent() {
  return (
    <Html
      transform
      position={[0, 0.03, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      distanceFactor={2}
    >
      <div className="w-[700px] bg-[#faf7ef] p-10 text-black">
        <h1 className="mb-6 text-5xl font-bold">
          DAILY NEWS
        </h1>

        {headlines.map((item) => (
          <div key={item.title} className="mb-5">
            <h2 className="text-2xl font-bold">
              {item.title}
            </h2>

            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </Html>
  );
}
