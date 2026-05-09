"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function TennisBall3D() {
  const meshRef = useRef(null);

  // Use R3F's useFrame to map scroll position to rotation
  useFrame(() => {
    if (!meshRef.current) return;
    
    // We get the scroll progress using native scroll for simplicity inside the canvas
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    
    // Smoothly interpolate the rotation target using GSAP utils or simple lerp
    // Ball rolls on the X and Y axes as user scrolls down
    meshRef.current.rotation.x = progress * Math.PI * 4;
    meshRef.current.rotation.y = progress * Math.PI * 2 + (Date.now() * 0.0005); // Add a tiny bit of auto-rotation
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={2.5} castShadow />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#c8e835" />
      
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial 
          color="#c8e835"
          roughness={0.7}
          metalness={0.1}
          emissive="#39d353"
          emissiveIntensity={0.05}
        />
      </mesh>
    </>
  );
}
