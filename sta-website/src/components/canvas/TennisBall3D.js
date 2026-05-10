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
  
  // Flip texture if UVs are inverted (common with Sketchfab exports)
  texture.flipY = false;

  // Traverse the loaded model and apply the PBR texture
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Create a new PBR material for the ball
        child.material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.9,
          metalness: 0.1,
          color: new THREE.Color("#ffffff"), // Base color
        });
        // Cache material for rapid tinting in useFrame
        child.userData.mat = child.material;
      }
    });
  }, [scene, texture]);

  const activeSport = useAppStore((state) => state.activeSport);

  // Target colors for tinting the texture based on sport
  const targetColors = useMemo(() => ({
    tennis: new THREE.Color("#ffffff"), // Native texture color
    pickleball: new THREE.Color("#e8f55a"), // Yellow-green tint
    tt: new THREE.Color("#ff6b35"), // Orange tint
  }), []);

  // Animation loop: scroll physics + color tinting
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // 1. Color Tinting Physics
    const targetColor = targetColors[activeSport] || targetColors.tennis;
    scene.traverse((child) => {
      if (child.isMesh && child.userData.mat) {
        // Lerp towards the target color for a smooth transition
        child.userData.mat.color.lerp(targetColor, 0.05);
      }
    });

    // 2. Scroll-synced Positional Physics
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

    // Mobile detection & drastically reduced scaling
    const isMobile = window.innerWidth < 768;
    // The GLB native size might be huge or tiny, assuming it's roughly unit size:
    // Scale reduced significantly so it doesn't block content
    const baseScale = isMobile ? 0.8 : 1.5; 
    const xMultiplier = isMobile ? 0.7 : 1.0;

    // Keyframe trajectory: Push X further to the edges to avoid text
    const keyframes = [
      { p: 0.0, x: 2.5, y: 0.5, s: 1.0 },       // Hero
      { p: 0.2, x: -3.0, y: -0.5, s: 0.8 },     // About / Programs
      { p: 0.5, x: 2.8, y: 0.0, s: 0.7 },       // Coaches / Testimonials
      { p: 0.8, x: -2.5, y: 1.0, s: 0.9 },      // Gallery
      { p: 1.0, x: 0.0, y: -0.5, s: 1.0 },      // Footer / CTA
    ];

    let start = keyframes[0];
    let end = keyframes[keyframes.length - 1];
    for (let i = 0; i < keyframes.length - 1; i++) {
      if (progress >= keyframes[i].p && progress <= keyframes[i + 1].p) {
        start = keyframes[i];
        end = keyframes[i + 1];
        break;
      }
    }

    const segmentProgress = (progress - start.p) / (end.p - start.p || 1);
    const smooth = segmentProgress * segmentProgress * (3 - 2 * segmentProgress);
    
    const targetX = (start.x + (end.x - start.x) * smooth) * xMultiplier;
    const targetY = start.y + (end.y - start.y) * smooth;
    const targetScale = (start.s + (end.s - start.s) * smooth) * baseScale;

    // Apply smooth positional dampening
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    
    const currentScale = meshRef.current.scale.x;
    const nextScale = currentScale + (targetScale - currentScale) * 0.05;
    meshRef.current.scale.set(nextScale, nextScale, nextScale);

    // 3. Rotation Physics
    meshRef.current.rotation.x = progress * Math.PI * 4;
    meshRef.current.rotation.y =
      progress * Math.PI * 2 + state.clock.elapsedTime * 0.3;
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={2.5} />
      <directionalLight
        position={[-5, -5, -5]}
        intensity={0.5}
        color="#c8e835"
      />
      
      <group ref={meshRef}>
        <primitive object={scene} />
      </group>
    </>
  );
}

// Preload the GLTF to avoid pop-in
useGLTF.preload("/models/tennis-ball.glb");
