import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styled from "styled-components";



function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/scene.gltf');
    console.log(nodes);
    console.log(materials);
    return (
      <group ref={group} {...props} dispose={null} scale={0.006}>
        <group rotation={[-Math.PI / 2.2, -0.1, -1.5]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials['lambert2SG']} />
          <mesh geometry={nodes.Object_3.geometry} material={materials['lambert2SG']} />
          <mesh geometry={nodes.Object_4.geometry} material={materials['lambert2SG']} />
        </group>
      </group>
    )
  }
  

const Example = () => {
    return (
            <CanvasWrap>
                <Canvas>
                    <Suspense fallback={null}>
                        <directionalLight intensity={1} />
                        <ambientLight intensity={1.2} />
                        <spotLight intensity={2} angle={2} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Model />
                        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} autoRotate={true}/>
                    </Suspense>
                </Canvas>
            </CanvasWrap>
    )
}

export default Example;

let CanvasWrap = styled.div`
  width:30%;
  height:50%;
  margin:auto;
  padding-top:100px;
`