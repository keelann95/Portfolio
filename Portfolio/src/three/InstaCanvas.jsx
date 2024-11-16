import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import React, { Suspense, useState, useRef } from 'react';
import * as THREE from 'three';
import Insta from '../three/Insta';

const RotatingInsta = ({ isHovered }) => {
  const modelRef = useRef();

  // Rotate the model on the Y-axis to achieve the original spin direction
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += isHovered ? 0.1 : 0.02; // Increase rotation speed on hover
    }
  });

  return (
    <group ref={modelRef} scale={0.8}>
      <Insta />
    </group>
  );
};

const InstaCanvas = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{
          position: [0, 0, 3.5],
          fov: 35
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping
        }}
      >
        <Suspense fallback={null}>
          <Environment preset="city" />
          <RotatingInsta isHovered={isHovered} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} intensity={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default InstaCanvas;
