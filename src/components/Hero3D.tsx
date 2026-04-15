'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';

export function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-90 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          
          {/* PLACEHOLDER: USER WILL INJECT CUSTOM GLTF ORTHOPAEDIC MODELS HERE */}
          <mesh rotation={[0.5, 0.5, 0]}>
            <torusGeometry args={[1.5, 0.4, 32, 64]} />
            <meshStandardMaterial 
              color="#0f2615" 
              roughness={0.2} 
              metalness={0.8} 
              wireframe={true} 
            />
          </mesh>

        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
