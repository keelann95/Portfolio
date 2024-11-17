import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import Desk from '../three/Desk'

const RotatingDesk = () => {
  const deskRef = useRef()
  
  return (
    <group ref={deskRef}>
      <Desk />
    </group>
  )
}

const DeskCanvas = () => {
  return (
    <div className="h-[70vh] w-[100%] " >
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 10, 0]} fov={55} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            minDistance={4}
            maxDistance={9}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          
          {/* Lights */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Environment */}
          <Environment preset="studio" />
          
          {/* Rotating Desk */}
          <RotatingDesk />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default DeskCanvas
