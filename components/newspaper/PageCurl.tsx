return (
  <mesh
    ref={mesh}
    rotation={[-Math.PI / 2, 0, 0]}
    position={[0, 0.025, 0]}
    castShadow
    receiveShadow
  >
    <planeGeometry
      args={[width, height, 120, 160]}
    />

    <meshPhysicalMaterial
      color="#faf7ef"
      roughness={0.92}
      side={THREE.DoubleSide}
    />
  </mesh>
);
