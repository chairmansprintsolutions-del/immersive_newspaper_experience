"use client";

export default function CafeScene() {
  return (
    <group>
      {/* BACK WALL */}
      <mesh position={[0, 3, -3.5]}>
        <boxGeometry args={[12, 6, 0.2]} />
        <meshStandardMaterial color="#d7c7b5" roughness={1} />
      </mesh>

      {/* WINDOW */}
      <group position={[0, 3, -3.35]}>
        <mesh>
          <boxGeometry args={[5, 3, 0.08]} />
          <meshStandardMaterial
            color="#9fc4d4"
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>

        {/* vertical frame */}
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry args={[0.12, 3, 0.15]} />
          <meshStandardMaterial color="#4a3425" />
        </mesh>

        {/* horizontal frame */}
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry args={[5, 0.12, 0.15]} />
          <meshStandardMaterial color="#4a3425" />
        </mesh>

        {/* top */}
        <mesh position={[0, 1.55, 0.08]}>
          <boxGeometry args={[5.3, 0.15, 0.15]} />
          <meshStandardMaterial color="#4a3425" />
        </mesh>

        {/* bottom */}
        <mesh position={[0, -1.55, 0.08]}>
          <boxGeometry args={[5.3, 0.15, 0.15]} />
          <meshStandardMaterial color="#4a3425" />
        </mesh>
      </group>

      {/* ================= CHAIR ================= */}

      <group position={[2.7, 0, 1.1]}>
        {/* seat */}
        <mesh position={[0, 0.85, 0]}>
          <boxGeometry args={[1.4, 0.18, 1.3]} />
          <meshStandardMaterial color="#75472f" roughness={0.85} />
        </mesh>

        {/* back */}
        <mesh position={[0, 1.8, 0.5]}>
          <boxGeometry args={[1.4, 1.8, 0.18]} />
          <meshStandardMaterial color="#75472f" roughness={0.85} />
        </mesh>

        {/* legs */}
        {[
          [-0.5, 0.4, -0.45],
          [0.5, 0.4, -0.45],
          [-0.5, 0.4, 0.45],
          [0.5, 0.4, 0.45],
        ].map((p, i) => (
          <mesh key={i} position={p as [number, number, number]}>
            <cylinderGeometry args={[0.07, 0.07, 0.8, 16]} />
            <meshStandardMaterial color="#3d281d" />
          </mesh>
        ))}
      </group>

      {/* ================= COFFEE ================= */}

      <group position={[1.1, 0.88, -0.55]}>
        {/* saucer */}
        <mesh position={[0, -0.08, 0]}>
          <cylinderGeometry args={[0.42, 0.42, 0.05, 32]} />
          <meshStandardMaterial color="#eee8dc" roughness={0.5} />
        </mesh>

        {/* cup */}
        <mesh>
          <cylinderGeometry args={[0.27, 0.22, 0.42, 32]} />
          <meshStandardMaterial color="#f4f0e7" roughness={0.45} />
        </mesh>

        {/* coffee */}
        <mesh position={[0, 0.215, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.025, 32]} />
          <meshStandardMaterial color="#3a1c0d" roughness={0.3} />
        </mesh>

        {/* handle */}
        <mesh
          position={[0.3, 0.02, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[0.13, 0.045, 16, 32]} />
          <meshStandardMaterial color="#f4f0e7" />
        </mesh>
      </group>

      {/* ================= PLANT ================= */}

      <group position={[-2.5, 0, 1.0]}>
        {/* pot */}
        <mesh position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.45, 0.32, 0.7, 32]} />
          <meshStandardMaterial color="#a96745" roughness={0.9} />
        </mesh>

        {/* stem */}
        <mesh position={[0, 1.45, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 1.8, 16]} />
          <meshStandardMaterial color="#405b38" />
        </mesh>

        {/* leaves */}
        <mesh position={[-0.35, 1.8, 0]}>
          <sphereGeometry args={[0.38, 20, 20]} />
          <meshStandardMaterial color="#527348" roughness={0.9} />
        </mesh>

        <mesh position={[0.35, 2.0, 0]}>
          <sphereGeometry args={[0.4, 20, 20]} />
          <meshStandardMaterial color="#5d7d4d" roughness={0.9} />
        </mesh>

        <mesh position={[-0.2, 2.35, 0]}>
          <sphereGeometry args={[0.4, 20, 20]} />
          <meshStandardMaterial color="#47653d" roughness={0.9} />
        </mesh>

        <mesh position={[0.3, 2.55, 0]}>
          <sphereGeometry args={[0.35, 20, 20]} />
          <meshStandardMaterial color="#648654" roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
}
