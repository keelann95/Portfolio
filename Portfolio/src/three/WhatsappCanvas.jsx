import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import React, { Suspense, useState, useRef } from 'react';
import * as THREE from 'three';
import Whatsapp from '../three/Whatsapp';

const RotatingWhatsapp = ({ isHovered }) => {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += isHovered ? 0.1 : 0.02;
    }
  });

  return (
    <group ref={modelRef} scale={0.8}>
      <Whatsapp />
    </group>
  );
};

const WhatsappCanvas = () => {
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
          <RotatingWhatsapp isHovered={isHovered} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} intensity={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default WhatsappCanvas;
