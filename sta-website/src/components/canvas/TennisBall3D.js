"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import useAppStore from "@/store/useAppStore";

export default function TennisBall3D() {
  const meshRef = useRef(null);
  
  // Load realistic 3D model and high-res texture
  const { scene } = useGLTF("/models/tennis-ball.glb");
  const texture = useTexture("/models/tennis-texture.png");
  
  // Configure texture color space for Normal Map
  useMemo(() => {
    texture.flipY = false;
    texture.colorSpace = THREE.LinearSRGBColorSpace;
  }, [texture]);

  // Traverse the loaded model and apply the PBR normal map
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.normalMap = texture;
        if (child.material.normalScale) {
          child.material.normalScale = new THREE.Vector2(1.2, 1.2);
        }
        child.material.roughness = 0.85;
        child.material.metalness = 0.1;
        child.userData.mat = child.material;
        if (!child.userData.baseColor) {
          child.userData.baseColor = child.material.color.clone();
        }
        child.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);

  const activeSport = useAppStore((state) => state.activeSport);

  const targetColors = useMemo(() => ({
    pickleball: new THREE.Color("#e8f55a"),
    tt: new THREE.Color("#ff6b35"),
  }), []);

  useFrame((state) => {
    if (!meshRef.current) return;

    // 1. Color Tinting
    scene.traverse((child) => {
      if (child.isMesh && child.userData.mat && child.userData.baseColor) {
        const isWhiteStripe = child.userData.baseColor.r > 0.8 && child.userData.baseColor.g > 0.8 && child.userData.baseColor.b > 0.8;
        if (!isWhiteStripe) {
          const targetColor = targetColors[activeSport] || child.userData.baseColor;
          child.userData.mat.color.lerp(targetColor, 0.05);
        }
      }
    });

    // 2. Scroll-driven rotation only (no position movement)
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

    // Fixed scale — small and non-obstructive
    const isMobile = window.innerWidth < 768;
    const fixedScale = isMobile ? 0.4 : 0.6;
    meshRef.current.scale.set(fixedScale, fixedScale, fixedScale);

    // Fixed position — bottom right of viewport
    meshRef.current.position.x = isMobile ? 1.5 : 3.0;
    meshRef.current.position.y = isMobile ? -3.0 : -2.5;
    meshRef.current.position.z = 0;

    // Rotation: scroll-driven spin + gentle idle rotation
    meshRef.current.rotation.x = progress * Math.PI * 6;
    meshRef.current.rotation.y = progress * Math.PI * 4 + state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <>
      <ambientLight intensity={1.8} />
      <directionalLight position={[10, 10, 10]} intensity={2.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.8} />
      
      <group ref={meshRef}>
        <primitive object={scene} />
      </group>
    </>
  );
}

// Preload the GLTF to avoid pop-in
useGLTF.preload("/models/tennis-ball.glb");
