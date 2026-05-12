"use client";

import { useRef, useMemo, useCallback } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import useAppStore from "@/store/useAppStore";

export default function TennisBall3D() {
  const meshRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef(0);
  const prevScrollRef = useRef(0);
  const smoothVelocityRef = useRef(0);
  
  const { scene } = useGLTF("/models/tennis-ball.glb");
  const texture = useTexture("/models/tennis-texture.png");
  
  // Configure texture color space for Normal Map
  useMemo(() => {
    texture.flipY = false;
    texture.colorSpace = THREE.LinearSRGBColorSpace;
  }, [texture]);

  // Traverse the loaded model and apply PBR material
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

  // Mouse tracking for follow effect
  const handlePointerMove = useCallback((e) => {
    // Normalize mouse position to [-1, 1]
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  // Attach/detach mouse listener
  useMemo(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handlePointerMove);
      return () => window.removeEventListener("mousemove", handlePointerMove);
    }
  }, [handlePointerMove]);

  const activeSport = useAppStore((state) => state.activeSport);

  // Sport-semantic color mapping
  const targetColors = useMemo(() => ({
    tennis: null, // use base color
    pickleball: new THREE.Color("#e8f55a"),
    tt: new THREE.Color("#ff6b35"),
  }), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // === 1. Color Tinting (section-aware) ===
    scene.traverse((child) => {
      if (child.isMesh && child.userData.mat && child.userData.baseColor) {
        const isWhiteStripe = child.userData.baseColor.r > 0.8 && child.userData.baseColor.g > 0.8 && child.userData.baseColor.b > 0.8;
        if (!isWhiteStripe) {
          const targetColor = targetColors[activeSport] || child.userData.baseColor;
          child.userData.mat.color.lerp(targetColor, 0.05);
        }
      }
    });

    // === 2. Scroll Progress + Velocity ===
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

    // Calculate scroll velocity for dynamic rotation speed
    const scrollDelta = scrollTop - prevScrollRef.current;
    prevScrollRef.current = scrollTop;
    velocityRef.current = scrollDelta;
    // Smooth the velocity for fluid feel
    smoothVelocityRef.current += (velocityRef.current - smoothVelocityRef.current) * 0.1;

    // === 3. Responsive Sizing & Positioning ===
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // Ball is the HERO — large, prominent, right-side positioned
    let baseScale, posX, posY;
    if (isMobile) {
      baseScale = 0.7;
      posX = 0;    // Centered on mobile
      posY = -1.0;
    } else if (isTablet) {
      baseScale = 1.0;
      posX = 2.0;
      posY = -0.5;
    } else {
      baseScale = 1.4;
      posX = 2.8;
      posY = -0.3;
    }

    // Subtle scale pulse based on scroll velocity
    const velocityScale = 1.0 + Math.abs(smoothVelocityRef.current) * 0.001;
    const finalScale = baseScale * Math.min(velocityScale, 1.15);
    meshRef.current.scale.lerp(new THREE.Vector3(finalScale, finalScale, finalScale), 0.08);

    // === 4. Mouse Follow (gentle parallax) ===
    const mouseInfluenceX = isMobile ? 0 : mouseRef.current.x * 0.4;
    const mouseInfluenceY = isMobile ? 0 : mouseRef.current.y * 0.2;

    meshRef.current.position.x += ((posX + mouseInfluenceX) - meshRef.current.position.x) * 0.06;
    meshRef.current.position.y += ((posY + mouseInfluenceY) - meshRef.current.position.y) * 0.06;
    meshRef.current.position.z = 0;

    // === 5. Rotation: scroll-progress + velocity + idle ===
    // Base rotation from scroll progress (3 full satisfying rotations)
    const scrollRotX = progress * Math.PI * 6;
    const scrollRotY = progress * Math.PI * 4;

    // Velocity-driven extra spin (makes scrolling feel addictive)
    const velocitySpin = smoothVelocityRef.current * 0.008;

    // Gentle idle spin
    const idleRotY = state.clock.elapsedTime * 0.12;
    const idleRotZ = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;

    meshRef.current.rotation.x = scrollRotX + velocitySpin * 0.5;
    meshRef.current.rotation.y = scrollRotY + idleRotY + velocitySpin;
    meshRef.current.rotation.z = idleRotZ;
  });

  return (
    <>
      <ambientLight intensity={2.0} />
      <directionalLight position={[10, 10, 10]} intensity={3.0} />
      <directionalLight position={[-5, -5, -5]} intensity={0.8} />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#5DADE2" />
      
      <group ref={meshRef}>
        <primitive object={scene} />
      </group>
    </>
  );
}

useGLTF.preload("/models/tennis-ball.glb");
