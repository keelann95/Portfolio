/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 insta.gltf 
Author: miguel.acf204 (https://sketchfab.com/miguel.acf204)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/instagram-3294ce064aea4030a560929e57232636
Title: Instagram
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/insta.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Instagram_Material002_0.geometry} material={materials['Material.002']} scale={171.33} />
      </group>
    </group>
  )
}

useGLTF.preload('/insta.gltf')