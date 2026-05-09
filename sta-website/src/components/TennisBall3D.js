"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";

/* ============================================
   3D TENNIS BALL — Scroll-Linked Rotation
   The signature hero element of STA
   ============================================ */

function TennisBallMesh({ scrollProgress, isPickleball }) {
  const meshRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });

  // Smooth rotation based on scroll
  useFrame(() => {
    if (!meshRef.current) return;
    // 3 full rotations across the page
    targetRotation.current.y = scrollProgress.current * Math.PI * 6;
    targetRotation.current.x = scrollProgress.current * Math.PI * 2;

    meshRef.current.rotation.y +=
      (targetRotation.current.y - meshRef.current.rotation.y) * 0.08;
    meshRef.current.rotation.x +=
      (targetRotation.current.x - meshRef.current.rotation.x) * 0.08;
  });

  // Tennis ball seam curve
  const seamCurve = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 200; i++) {
      const t = (i / 200) * Math.PI * 2;
      const x = Math.cos(t) * 1.01;
      const y = Math.sin(t * 2) * 0.3;
      const z = Math.sin(t) * 1.01;
      points.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.CatmullRomCurve3(points, true);
  }, []);

  const seamGeometry = useMemo(() => {
    const pts = seamCurve.getPoints(200);
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [seamCurve]);

  if (isPickleball) {
    return (
      <group ref={meshRef}>
        {/* Pickleball body */}
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            color="#C7F93E"
            roughness={0.6}
            metalness={0.05}
          />
        </mesh>
        {/* Holes pattern */}
        {Array.from({ length: 26 }).map((_, i) => {
          const phi = Math.acos(-1 + (2 * i) / 26);
          const theta = Math.sqrt(26 * Math.PI) * phi;
          const x = Math.cos(theta) * Math.sin(phi) * 1.005;
          const y = Math.sin(theta) * Math.sin(phi) * 1.005;
          const z = Math.cos(phi) * 1.005;
          return (
            <mesh key={i} position={[x, y, z]} rotation={[phi, theta, 0]}>
              <circleGeometry args={[0.1, 16]} />
              <meshStandardMaterial
                color="#99CC22"
                roughness={0.8}
                side={THREE.DoubleSide}
              />
            </mesh>
          );
        })}
      </group>
    );
  }

  return (
    <group ref={meshRef}>
      {/* Tennis ball body — fuzzy felt */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#C8E628"
          roughness={0.95}
          metalness={0.0}
          emissive="#4a5500"
          emissiveIntensity={0.05}
        />
      </mesh>
      {/* Seam line */}
      <line geometry={seamGeometry}>
        <lineBasicMaterial color="#ffffff" linewidth={2} opacity={0.7} transparent />
      </line>
      {/* Secondary seam (mirrored) */}
      <group rotation={[0, Math.PI, 0]}>
        <line geometry={seamGeometry}>
          <lineBasicMaterial color="#ffffff" linewidth={2} opacity={0.7} transparent />
        </line>
      </group>
      {/* Felt fuzz glow */}
      <mesh>
        <sphereGeometry args={[1.02, 32, 32]} />
        <meshStandardMaterial
          color="#d4f030"
          roughness={1}
          metalness={0}
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

export default function TennisBall3D({ className, isPickleball = false }) {
  const scrollProgress = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = docHeight > 0 ? scrollTop / docHeight : 0;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return <BallFallback className={className} />;

  return (
    <div className={className} style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff8e7" />
        <directionalLight position={[-3, -2, 4]} intensity={0.4} color="#c7f93e" />
        <pointLight position={[0, 3, 2]} intensity={0.5} color="#ffffff" />
        <TennisBallMesh
          scrollProgress={scrollProgress}
          isPickleball={isPickleball}
        />
      </Canvas>
    </div>
  );
}

/* CSS-only fallback for SSR and low-end devices */
export function BallFallback({ className }) {
  return (
    <div className={className}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            aspectRatio: "1",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 35%, #e0f940, #C8E628 40%, #9eb51e 100%)",
            boxShadow:
              "0 20px 60px rgba(200,230,40,0.3), inset 0 -8px 20px rgba(0,0,0,0.15)",
            animation: "ballSpin 8s linear infinite",
            position: "relative",
          }}
        >
          {/* Seam line CSS */}
          <div
            style={{
              position: "absolute",
              inset: "8%",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.5)",
              transform: "rotateX(60deg)",
            }}
          />
        </div>
        <style>{`
          @keyframes ballSpin {
            from { transform: rotateY(0deg) rotateX(0deg); }
            to { transform: rotateY(360deg) rotateX(120deg); }
          }
        `}</style>
      </div>
    </div>
  );
}
