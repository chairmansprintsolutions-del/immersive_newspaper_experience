"use client";

export default function CafeScene() {
  return (
    <group>
      {/* =========================
          BACK WALL
      ========================= */}
      <mesh position={[0, 3, -4]}>
        <boxGeometry args={[12, 6, 0.15]} />
        <meshStandardMaterial
          color="#d8cec0"
          roughness={0.9}
        />
      </mesh>

      {/* =========================
          WINDOW
      ========================= */}
      <group position={[0, 3.1, -3.88]}>
        {/* Glass */}
        <mesh>
          <planeGeometry args={[4.5, 2.6]} />
          <meshStandardMaterial
            color="#9bb9c7"
            roughness={0.25}
            metalness={0.05}
          />
        </mesh>

        {/* Outer frame */}
        <mesh position={[0, 1.35, 0.05]}>
          <boxGeometry args={[4.8, 0.12, 0.12]} />
          <meshStandardMaterial color="#3b2b21" />
        </mesh>

        <mesh position={[0, -1.35, 0.05]}>
          <boxGeometry args={[4.8, 0.12, 0.12]} />
          <meshStandardMaterial color="#3b2b21" />
        </mesh>

        <mesh position={[-2.35, 0, 0.05]}>
          <boxGeometry args={[0.12, 2.8, 0.12]} />
          <meshStandardMaterial color="#3b2b21" />
        </mesh>

        <mesh position={[2.35, 0, 0.05]}>
          <boxGeometry args={[0.12, 2.8, 0.12]} />
          <meshStandardMaterial color="#3b2b21" />
        </mesh>

        {/* Window cross */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[0.08, 2.6, 0.1]} />
          <meshStandardMaterial color="#3b2b21" />
        </mesh>

        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[4.5, 0.08, 0.1]} />
          <meshStandardMaterial color="#3b2b21" />
        </mesh>
      </group>

      {/* =========================
          CHAIR
      ========================= */}
      <group position={[3.0, 0, 1.7]}>
        {/* Seat */}
        <mesh position={[0, 0.72, 0]}>
          <boxGeometry args={[1.35, 0.16, 1.25]} />
          <meshStandardMaterial
            color="#71482f"
            roughness={0.85}
          />
        </mesh>

        {/* Back */}
        <mesh position={[0, 1.65, 0.5]}>
          <boxGeometry args={[1.35, 1.8, 0.16]} />
          <meshStandardMaterial
            color="#71482f"
            roughness={0.85}
          />
        </mesh>

        {/* Legs */}
        <mesh position={[-0.5, 0.35, -0.42]}>
          <cylinderGeometry args={[0.06, 0.06, 0.7, 12]} />
          <meshStandardMaterial color="#4b3021" />
        </mesh>

        <mesh position={[0.5, 0.35, -0.42]}>
          <cylinderGeometry args={[0.06, 0.06, 0.7, 12]} />
          <meshStandardMaterial color="#4b3021" />
        </mesh>

        <mesh position={[-0.5, 0.35, 0.42]}>
          <cylinderGeometry args={[0.06, 0.06, 0.7, 12]} />
          <meshStandardMaterial color="#4b3021" />
        </mesh>

        <mesh position={[0.5, 0.35, 0.42]}>
          <cylinderGeometry args={[0.06, 0.06, 0.7, 12]} />
          <meshStandardMaterial color="#4b3021" />
        </mesh>
      </group>

      {/* =========================
          COFFEE CUP
      ========================= */}
      <group position={[1.35, 0.92, -0.7]}>
        {/* Cup */}
        <mesh>
          <cylinderGeometry args={[0.25, 0.21, 0.42, 32]} />
          <meshStandardMaterial
            color="#f4f0e8"
            roughness={0.55}
          />
        </mesh>

        {/* Coffee */}
        <mesh position={[0, 0.215, 0]}>
          <cylinderGeometry args={[0.20, 0.20, 0.018, 32]} />
          <meshStandardMaterial
            color="#3b2114"
            roughness={0.4}
          />
        </mesh>

        {/* Handle */}
        <mesh
          position={[0.28, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[0.12, 0.04, 12, 24]} />
          <meshStandardMaterial
            color="#f4f0e8"
            roughness={0.55}
          />
        </mesh>

        {/* Saucer */}
        <mesh position={[0, -0.22, 0]}>
          <cylinderGeometry args={[0.38, 0.38, 0.035, 32]} />
          <meshStandardMaterial
            color="#eee9df"
            roughness={0.6}
          />
        </mesh>
      </group>

      {/* =========================
          PLANT
      ========================= */}
      <group position={[-3.5, 0, -2.5]}>
        {/* Pot */}
        <mesh position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.38, 0.30, 0.7, 32]} />
          <meshStandardMaterial
            color="#9a6344"
            roughness={0.9}
          />
        </mesh>

        {/* Stem */}
        <mesh position={[0, 1.45, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 1.8, 12]} />
          <meshStandardMaterial color="#405336" />
        </mesh>

        {/* Leaves */}
        <mesh
          position={[-0.35, 1.75, 0]}
          rotation={[0, 0, -0.55]}
        >
          <sphereGeometry args={[0.32, 20, 20]} />
          <meshStandardMaterial
            color="#506b43"
            roughness={0.9}
          />
        </mesh>

        <mesh
          position={[0.35, 1.95, 0]}
          rotation={[0, 0, 0.55]}
        >
          <sphereGeometry args={[0.32, 20, 20]} />
          <meshStandardMaterial
            color="#587449"
            roughness={0.9}
          />
        </mesh>

        <mesh
          position={[0, 2.25, 0]}
        >
          <sphereGeometry args={[0.34, 20, 20]} />
          <meshStandardMaterial
            color="#607b4e"
            roughness={0.9}
          />
        </mesh>

        <mesh
          position={[-0.4, 2.15, 0.15]}
        >
          <sphereGeometry args={[0.28, 20, 20]} />
          <meshStandardMaterial
            color="#4d6840"
            roughness={0.9}
          />
        </mesh>
      </group>
    </group>
  );
}
