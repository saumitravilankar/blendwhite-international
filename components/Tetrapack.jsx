/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 tetrapack.gltf 
Author: riccardopallotto (https://sketchfab.com/riccardopallotto)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bom-ba-milk-41589a39a0234cec8fc171e734d8359d
Title: BOM BA MILK
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/tetrapack.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0,-2.4,0]} rotation={[-Math.PI / 2, 0, 0]} scale={15}>
        <group rotation={[Math.PI / 2, 0.5, 0]}>
          <group position={[0, 0, -0.059]} rotation={[0.489, 0, 0]}>
            <mesh geometry={nodes.Object_5.geometry} material={materials.Materiale_tappo} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.Materiale_tappo} />
          </group>
          <mesh geometry={nodes.Object_9.geometry} material={materials.Opaco} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tetrapack.gltf')
