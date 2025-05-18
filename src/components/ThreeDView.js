// src/components/ThreeDView.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, PerspectiveCamera, Stats } from "@react-three/drei";

const ContainerBox = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
};

const ThreeDView = ({ products }) => {
  // Convert mm to meters for 3D scale (1m = 1000mm)
  const scale = 0.001;

  return (
    <div style={{ height: "500px", width: "100%", background: "#f0f0f0" }}>
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <PerspectiveCamera makeDefault position={[2, 2, 4]} />
        <OrbitControls />

        {/* Container box boundary (20ft) - just for reference */}
        <mesh position={[1.5, 1, 1]}>
          <boxGeometry args={[6, 2.4, 2.4]} />
          <meshStandardMaterial color="#cccccc" wireframe />
        </mesh>

        {/* Product boxes */}
        {products.map((prod, index) => {
          const x = (index % 3) * 0.6; // simple spacing
          const y = 0.2;
          const z = Math.floor(index / 3) * 0.6;

          return (
            <ContainerBox
              key={index}
              position={[x + 0.3, y + 0.1, z + 0.3]}
              size={[
                prod.length * scale,
                prod.height * scale,
                prod.width * scale,
              ]}
              color={prod.color}
            />
          );
        })}
        <Stats />
      </Canvas>
    </div>
  );
};

export default ThreeDView;
