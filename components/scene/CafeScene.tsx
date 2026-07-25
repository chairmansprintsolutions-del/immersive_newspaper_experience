"use client";

import Model from "../loaders/Model";

export default function CafeScene() {
  return (
    <>
      <Model
        path="/models/newspaper.glb"
        position={[0, 0.04, 0]}
        scale={1}
      />

      <Model
        path="/models/coffee_cup.glb"
        position={[1.6, 0.05, -0.8]}
        scale={0.4}
      />

      <Model
        path="/models/chair.glb"
        position={[3, 0, 1.8]}
        scale={1}
      />

      <Model
        path="/models/plant.glb"
        position={[-2.5, 0, -1.8]}
        scale={0.8}
      />
    </>
  );
}
