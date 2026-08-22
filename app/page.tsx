"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "@/components/scene/Experience";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#f6f2eb]">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 5.5, 6.5],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </main>
  );
}
