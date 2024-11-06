import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import Desk from '../three/Desk'

const RotatingDesk = () => {
  const deskRef = useRef()
  const [direction, setDirection] = useState(1) 

  useFrame(() => {
    if (deskRef.current) {
      const maxRotation = Math.PI * (45 / 180)

      deskRef.current.rotation.y += direction * 0.001

      if (deskRef.current.rotation.y >= maxRotation) {
        setDirection(-1)  
      } else if (deskRef.current.rotation.y <= -maxRotation) {
        setDirection(1)  
      }
    }
  })

  return (
    <group ref={deskRef}>
      <Desk />
    </group>
  )
}

const DeskCanvas = () => {
  return (
    <div className="h-[50vh] pt-14 w-[100%]">
      <Canvas>
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[1, 1, 11]} />
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            minDistance={2}
            maxDistance={9}
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
