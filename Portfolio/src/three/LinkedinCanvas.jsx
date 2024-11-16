import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import React, { Suspense, useState, useRef } from 'react';
import * as THREE from 'three';
import Linkedin from '../three/Linkedin';

const RotatingLinkedin = ({ isHovered }) => {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.z += isHovered ? 0.05 : 0.02;
    }
  });

  return (
    <group ref={modelRef} scale={isHovered ? 0.9 : 0.8}>
      <Linkedin />
    </group>
  );
};

const LinkedinCanvas = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 200 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping
        }}
      >
        <Suspense>
          <Environment preset="city" />
          <RotatingLinkedin isHovered={isHovered} />
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LinkedinCanvas;
