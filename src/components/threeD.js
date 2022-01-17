import React, {Suspense} from 'react';
import { useGLTF , useFBX} from "@react-three/drei";
import { OrbitControls } from '@react-three/drei';
import { Canvas } from "@react-three/fiber"

function Model(props) {
  const { scene } = useGLTF(props.src)
  return <primitive object={scene} />;
}

export function ShowThreeD(props) {
  return (
    <div style = {{width:"250px" , height:"250px", backgroundColor:"#"}}>
      <Canvas camera={{position: [30, 30, 30], fov: 0.5 }}>
        <pointLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
          <Model src={props.src}/>
        </Suspense>
      </Canvas>
    </div>
  );
}