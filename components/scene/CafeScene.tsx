"use client";

import Model from "../loaders/Model";

export default function CafeScene() {
  return (
    <>
      <Model
        path="/model/room.glb"
        position={[0, 0, 0]}
        scale={1}
      />

      <Model
        path="/model/table.glb"
        position={[0, 0, 0]}
        scale={1}
      />

      <Model
        path="/model/coffee_cup.glb"
        position={[1.6, 0.05, -0.8]}
        scale={0.4}
      />

      <Model
        path="/model/chair.glb"
        position={[3, 0, 1.8]}
        scale={1}
      />

      <Model
        path="/model/plant.glb"
        position={[-2.5, 0, -1.8]}
        scale={0.8}
      />
    </>
  );
}
